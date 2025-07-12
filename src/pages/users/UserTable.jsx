import React, { useEffect, useState } from 'react'
import PaginatedTable from '../../components/PaginatedTable';
import { deleteUserService, getAllUsersService } from '../../services/user';
import { Alert, Confirm } from '../../utils/sweetalert2';
import DetailsModalButton from '../../components/DetailsModalButton';
import Actions from './userAdditions/Actions';
import DetailsModal from './DetailsModal';
import AddUser from './AddUser';
import UserRole from './userAdditions/UserRole';

const UserTable = () => {

    const [data, setData] = useState([]);
    const [reInitialValues, setReInitialValues] = useState(null);
    const [editId, setEditId] = useState(null);
    const [addUserModal, setAddUserModal] = useState(false);
    const [detailsModal, setDetailsModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [forceRender, setForceRender] = useState(0);

    const handleGetUsers = async () => {
        setLoading(true);
        try {
            const res = await getAllUsersService();
            if (res.status === 200) {
                setData(res.data.users);
            }
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false);
        }
    }

    const handleDeleteUser = async (rowData) => {
        const confirmDelete = await Confirm('حذف کاربر!', `آیا از حذف ${rowData.name} اطمینان دارید؟`, 'question');
        if (confirmDelete.isConfirmed) {
            try {
                const res = await deleteUserService(rowData._id);
                console.log(res);
                if (res.status === 200) {
                    setData(data.filter(d => d._id !== rowData._id));
                    Alert('کاربر حذف شد', 'عملیات موفقیت آمیز بود!', 'success');
                }
            } catch (error) {
                console.log(error);
                Alert('خطا در حذف کاربر', error.message, 'error');
            }
        }
    }

    useEffect(() => {
        handleGetUsers();
    }, [forceRender])

    const dataInfo = [
        { field: 'index', title: '#' },
        { field: 'name', title: 'نام' },
        { field: 'email', title: 'ایمیل' },
        { field: 'phone', title: 'تلفن' },
    ]

    const additionalField = [
        {
          title: 'موجودی',
          elements: (rowData) => <UserRole rowData={rowData} />,
        },
        {
            title: 'جزئیات',
            elements: (rowData) => <DetailsModalButton
                setReInitialValues={setReInitialValues}
                setDetailsModal={setDetailsModal}
                rowData={rowData} />
        },
        {
            title: 'عملیات',
            elements: (rowData) => <Actions
                handleDeleteUser={handleDeleteUser}
                setEditId={setEditId}
                setAddUserModal={setAddUserModal}
                rowData={rowData} />
        },
    ]

    const searchParams = {
        placeholder: 'جستجو نام کاربر',
        searchFiled: 'name',
    }


    return (
        <>
            <PaginatedTable
                data={data}
                dataInfo={dataInfo}
                additionalField={additionalField}
                loading={loading}
                numOfPage={5}
                searchParams={searchParams}
            >
                <AddUser
                    setForceRender={setForceRender}
                    setAddUserModal={setAddUserModal}
                    addUserModal={addUserModal}
                    reInitialValues={reInitialValues}
                    setReInitialValues={setReInitialValues}
                    editId={editId}
                    setEditId={setEditId}
                />
            </PaginatedTable>

            <DetailsModal
                reInitialValues={reInitialValues}
                setDetailsModal={setDetailsModal}
                detailsModal={detailsModal}
            />
        </>
    )
}

export default UserTable
