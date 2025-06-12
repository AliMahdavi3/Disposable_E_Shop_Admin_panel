import React, { useEffect, useState } from 'react'
import PaginatedTable from '../../components/PaginatedTable';
import AddBanner from './AddBanner';
import DetailsModal from './DetailsModal';
import Actions from './bannerAddition/Actions';
import BannerImage from './bannerAddition/BannerImage';
import { deleteBannerService, getBannersService } from '../../services/banner';
import DetailsModalButton from '../../components/DetailsModalButton';
import { Alert, Confirm } from '../../utils/sweetalert2';

const BannerTable = () => {

  const [data, setData] = useState([]);
  const [reInitialValues, setReInitialValues] = useState(null);
  const [editId, setEditId] = useState(null);
  const [addBannerModal, setAddBannerModal] = useState(false);
  const [detailsModal, setDetailsModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [forceRender, setForceRender] = useState(0);


  const handleGetBanners = async () => {
    setLoading(true);
    try {
      const res = await getBannersService();
      if (res.status === 200) {
        setData(res.data.banners);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }

  const handleDeleteBanner = async (rowData) => {
    const confirmDelete = await Confirm('حذف بنر!', `آیا از حذف بنر اطمینان دارید؟`, 'question');
    if (confirmDelete.isConfirmed) {
      try {
        const res = await deleteBannerService(rowData._id);
        console.log(res);
        if (res.status === 200) {
          setData(data.filter(d => d._id !== rowData._id));
          Alert('بنر حذف شد', 'عملیات موفقیت آمیز بود!', 'success');
        }
      } catch (error) {
        console.log(error);
        Alert('خطا در حذف بنر', error.message, 'error');
      }
    }
  }

  useEffect(() => {
    handleGetBanners();
  }, [forceRender])


  const dataInfo = [
    { field: 'index', title: '#' },
    { field: 'title', title: 'عنوان' },
    { field: 'content', title: 'محتوا' },
    { field: 'link', title: 'آدرس' },
  ]


  const additionalField = [
    {
      title: 'تصویر',
      elements: (rowData) => <BannerImage rowData={rowData} />,
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
        handleDeleteBanner={handleDeleteBanner}
        setEditId={setEditId}
        setAddBannerModal={setAddBannerModal}
        rowData={rowData} />
    },
  ]

  const searchParams = {
    placeholder: 'جستجو بنر ',
    searchFiled: 'title',
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
        <AddBanner
          setForceRender={setForceRender}
          setAddBannerModal={setAddBannerModal}
          addBannerModal={addBannerModal}
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

export default BannerTable
