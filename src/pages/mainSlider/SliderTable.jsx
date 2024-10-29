import React, { useEffect, useState } from 'react'
import { deleteSlideService, getSlidesService } from '../../services/main-slider';
import { Alert, Confirm } from '../../utils/alert';
import Actions from './slideAddition/Actions';
import SlideImage from './slideAddition/SlideImage';
import PaginatedTable from '../../components/PaginatedTable';
import AddSlide from './AddSlide';
import DetailsModal from './DetailsModal';
import DetailsModalButton from '../../components/DetailsModalButton';

const SliderTable = () => {

  const [data, setData] = useState([]);
  const [reInitialValues, setReInitialValues] = useState(null);
  const [editId, setEditId] = useState(null);
  const [addSlideModal, setAddSlideModal] = useState(false);
  const [detailsModal, setDetailsModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [forceRender, setForceRender] = useState(0);

  const handleGetSlides = async () => {
    setLoading(true);
    try {
      const res = await getSlidesService();
      if (res.status === 200) {
        setData(res.data.mainSliders);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }

  const handleDeleteSlide = async (rowData) => {
    if (await Confirm('حذف اسلاید!', `آیا از حذف اسلاید اطمینان دارید؟`)) {
      try {
        const res = await deleteSlideService(rowData._id);
        console.log(res);
        if (res.status === 200) {
          setData(data.filter(d => d._id !== rowData._id));
          Alert('اسلاید حذف شد', 'عملیات موفقیت آمیز بود!', 'success');
        }
      } catch (error) {
        console.log(error);
        Alert('خطا در حذف اسلاید', error.message, 'error');
      }
    }
  }

  useEffect(() => {
    handleGetSlides();
  }, [forceRender])

  const dataInfo = [
    { field: 'index', title: '#' },
    { field: 'title', title: 'عنوان' },
    { field: 'content', title: 'محتوا' },
  ]


  const additionalField = [
    {
      title: 'تصویر',
      elements: (rowData) => <SlideImage rowData={rowData} />,
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
        handleDeleteSlide={handleDeleteSlide}
        setEditId={setEditId}
        setAddSlideModal={setAddSlideModal}
        rowData={rowData} />
    },
  ]

  const searchParams = {
    placeholder: 'جستجو اسلاید ',
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
      <AddSlide
        setForceRender={setForceRender}
        setAddSlideModal={setAddSlideModal}
        addSlideModal={addSlideModal}
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

export default SliderTable
