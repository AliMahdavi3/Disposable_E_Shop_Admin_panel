import React, { useEffect, useState } from 'react'
import { Alert, Confirm } from '../../utils/sweetalert2';
import PaginatedTable from '../../components/PaginatedTable';
import { deleteTicketService, getAllTicketsService } from '../../services/ticket';
import DetailsModal from './DetailsModal';
import AddTicket from './AddTicket';
import Actions from './ticketAdditions/Actions';
import DetailsModalButton from '../../components/DetailsModalButton';
import TicketImages from './ticketAdditions/TicketImages';
import TicketStatus from './ticketAdditions/TicketStatus';

const TicketsTable = () => {
    const [data, setData] = useState([]);
    const [reInitialValues, setReInitialValues] = useState(null);
    const [editId, setEditId] = useState(null);
    const [addTicketModal, setAddTicketModal] = useState(false);
    const [detailsModal, setDetailsModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [forceRender, setForceRender] = useState(0);

    const handleGetAllTickets = async () => {
        setLoading(true);
        try {
            const res = await getAllTicketsService();
            if (res.status === 200) {
                setData(res.data.tickets);
            }
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false);
        }
    }

    const handleDeleteTicket = async (rowData) => {
        const confirmDelete = await Confirm('حذف تیکت!', `آیا از حذف ${rowData.subject} اطمینان دارید؟`, 'question');
        if (confirmDelete.isConfirmed) {
            try {
                const res = await deleteTicketService(rowData._id);
                console.log(res);
                if (res.status === 200) {
                    setData(data.filter(d => d._id !== rowData._id));
                    Alert('تیکت حذف شد', 'عملیات موفقیت آمیز بود!', 'success');
                }
            } catch (error) {
                console.log(error);
                Alert('خطا در حذف تیکت', error.message, 'error');
            }
        }
    }

    useEffect(() => {
        handleGetAllTickets();
    }, [forceRender])

    const dataInfo = [
        { field: 'index', title: '#' },
        { field: 'name', title: 'نام کاربر' },
        { field: 'subject', title: 'موضوع' },
        { field: 'description', title: 'توضیحات' },
    ]


    const additionalField = [
        {
            title: 'وضعیت',
            elements: (rowData) => <TicketStatus rowData={rowData} />
        },
        {
            title: 'تصاویر',
            elements: (rowData) => <TicketImages rowData={rowData} />,
        },
        {
            title: 'جزئیات',
            elements: (rowData) => <DetailsModalButton
                setReInitialValues={setReInitialValues}
                setDetailsModal={setDetailsModal}
                rowData={rowData}
            />
        },
        {
            title: 'عملیات',
            elements: (rowData) => <Actions
                handleDeleteTicket={handleDeleteTicket}
                setEditId={setEditId}
                setAddTicketModal={setAddTicketModal}
                rowData={rowData}
            />
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
                numOfPage={3}
                searchParams={searchParams}
            >
                <AddTicket
                    setForceRender={setForceRender}
                    setAddTicketModal={setAddTicketModal}
                    addTicketModal={addTicketModal}
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

export default TicketsTable
