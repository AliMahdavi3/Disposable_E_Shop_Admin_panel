import React, { useEffect, useState } from 'react'
import { deleteDiscountCodeService, getDiscountCodesService } from '../../services/discount';
import Actions from './discountAddition/Actions';
import DetailsModalButton from '../../components/DetailsModalButton';
import PaginatedTable from '../../components/PaginatedTable';
import AddDiscount from './AddDiscount';
import DetailsModal from './DetailsModal';
import IsActiveCode from './discountAddition/IsActiveCode';
import { Alert, Confirm } from '../../utils/sweetalert2';

const DiscountTable = () => {

  const [data, setData] = useState([]);
  const [reInitialValues, setReInitialValues] = useState(null);
  const [editId, setEditId] = useState(null);
  const [addDiscountCodeModal, setAddDiscountCodeModal] = useState(false);
  const [detailsModal, setDetailsModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [forceRender, setForceRender] = useState(0);

  const handleGetDiscountCodes = async () => {
    setLoading(true);
    try {
      const res = await getDiscountCodesService();
      if (res.status === 200) {
        setData(res.data.discounts);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }

  const handleDeleteDiscountCode = async (rowData) => {
    const confirmDelete = await Confirm('حذف کد تخفیف!', `آیا از حذف کد تخفیف اطمینان دارید؟`, 'question');
    if (confirmDelete.isConfirmed) {
      try {
        const res = await deleteDiscountCodeService(rowData._id);
        console.log(res);
        if (res.status === 200) {
          setData(data.filter(d => d._id !== rowData._id));
          Alert('کد تخفیف حذف شد', 'عملیات موفقیت آمیز بود!', 'success');
        }
      } catch (error) {
        console.log(error);
        Alert('خطا در حذف کد تخفیف', error.message, 'error');
      }
    }
  }

  useEffect(() => {
    handleGetDiscountCodes();
  }, [forceRender]);


  const dataInfo = [
    { field: 'index', title: '#' },
    { field: 'code', title: 'کد' },
    { field: 'percentage', title: 'درصد' },
    { field: 'expiresAt', title: 'انقضا' },
  ]

  const additionalField = [
    {
      title: 'وضعیت',
      elements: (rowData) => <IsActiveCode rowData={rowData} />
    },
    {
      title: 'جزئیات',
      elements: (rowData) => <DetailsModalButton
        className={'me-2'}
        setReInitialValues={setReInitialValues}
        setDetailsModal={setDetailsModal}
        rowData={rowData} />
    },
    {
      title: 'عملیات',
      elements: (rowData) => <Actions
        handleDeleteDiscountCode={handleDeleteDiscountCode}
        setEditId={setEditId}
        setAddDiscountCodeModal={setAddDiscountCodeModal}
        rowData={rowData} />
    },
  ]

  const searchParams = {
    placeholder: 'جستجو کد ',
    searchFiled: 'code',
  }


  return (
    <>
      <PaginatedTable
        data={data}
        dataInfo={dataInfo}
        additionalField={additionalField}
        loading={loading}
        numOfPage={4}
        searchParams={searchParams}
      >
        <AddDiscount
          setForceRender={setForceRender}
          setAddDiscountCodeModal={setAddDiscountCodeModal}
          addDiscountCodeModal={addDiscountCodeModal}
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

export default DiscountTable
