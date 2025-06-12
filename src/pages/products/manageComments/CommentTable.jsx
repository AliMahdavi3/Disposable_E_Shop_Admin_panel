import React, { useEffect, useState } from 'react'
import { deleteProductCommentService, getProductCommentsService } from '../../../services/comment';
import { useParams } from 'react-router-dom';
import DetailsModalButton from '../../../components/DetailsModalButton';
import CommentActions from './CommentActions';
import PaginatedTable from '../../../components/PaginatedTable';
import CommentDetailsModal from './CommentDetailsModal';
import ReturnButton from '../../../components/ReturnButton';
import { Alert, Confirm } from '../../../utils/sweetalert2';

const CommentTable = () => {

  let { productId } = useParams();
  const [data, setData] = useState([]);
  const [reInitialValues, setReInitialValues] = useState(null);
  const [detailsModal, setDetailsModal] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleGetProductComments = async () => {
      setLoading(true);
      try {
        const res = await getProductCommentsService(productId);
        console.log(res);

        if (res.status === 200) {
          // Map through the comments and add user name to each comment object
          const commentsWithUserNames = res.data.productComments.map(comment => ({
            ...comment,
            userName: comment.user ? comment.user.name : 'کاربر ناشناس' // Default value if user is not found
          }));

          setData(commentsWithUserNames); // Set the modified comments with user names
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }
    handleGetProductComments();
  }, [productId]);



  const handleDeleteProductComments = async (rowData) => {
    const confirmDelete = await Confirm('حذف نظر!', `آیا از حذف ${rowData.content} اطمینان دارید؟`, 'question');
    if (confirmDelete.isConfirmed) {
      try {
        const res = await deleteProductCommentService(productId, rowData._id);
        console.log(res);
        if (res.status === 200) {
          setData(data.filter(d => d._id !== rowData._id));
          Alert('نظر حذف شد', 'عملیات موفقیت آمیز بود!', 'success');
        }
      } catch (error) {
        console.log(error);
        Alert('خطا در حذف نظر', error.message, 'error');
      }
    }
  }


  const dataInfo = [
    { field: 'index', title: '#' },
    { field: 'content', title: 'محتوا' },
    { field: 'userName', title: 'کاربر' }, // Use the new userName field
    { field: 'product', title: 'محصول' },
    { field: 'rating', title: 'امتیاز' },
  ]

  const additionalField = [
    {
      title: 'جزئیات',
      elements: (rowData) => <DetailsModalButton
        setReInitialValues={setReInitialValues}
        setDetailsModal={setDetailsModal}
        rowData={rowData}
        className={'me-2'} />
    },
    {
      title: 'عملیات',
      elements: (rowData) => <CommentActions
        handleDeleteProductComments={handleDeleteProductComments}
        rowData={rowData} />
    },
  ]

  const searchParams = {
    placeholder: 'جستجو نظر محصول',
    searchFiled: 'content',
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
        <ReturnButton title={"بازگشت"} />
      </PaginatedTable>

      <CommentDetailsModal
        reInitialValues={reInitialValues}
        setDetailsModal={setDetailsModal}
        detailsModal={detailsModal}
      />
    </>
  )
}

export default CommentTable
