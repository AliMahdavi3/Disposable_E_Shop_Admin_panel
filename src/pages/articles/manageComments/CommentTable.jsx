import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { deleteArticleCommentService, getArticleCommentsService } from '../../../services/comment';
import { Alert, Confirm } from '../../../utils/alert';
import DetailsModalButton from '../../../components/DetailsModalButton';
import CommentActions from './CommentActions';
import PaginatedTable from '../../../components/PaginatedTable';
import CommentDetailsModal from './CommentDetailsModal';
import ReturnButton from '../../../components/ReturnButton';

const CommentTable = () => {

  let { articleId } = useParams();
  const [data, setData] = useState([]);
  const [reInitialValues, setReInitialValues] = useState(null);
  const [detailsModal, setDetailsModal] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleGetArticleComments = async () => {
      setLoading(true);
      try {
        const res = await getArticleCommentsService(articleId);
        console.log(res);
        if (res.status === 200) {
          const commentsWithUserNames = res.data.articleComments.map(comment => ({
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
    handleGetArticleComments();
  }, [articleId]);



  const handleDeleteArticleComments = async (rowData) => {
    if (await Confirm('حذف نظر!', `آیا از حذف ${rowData.content} اطمینان دارید؟`)) {
      try {
        const res = await deleteArticleCommentService(articleId, rowData._id);
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
    { field: 'article', title: 'مقاله' },
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
        handleDeleteArticleComments={handleDeleteArticleComments}
        rowData={rowData} />
    },
  ]

  const searchParams = {
    placeholder: 'جستجو نظر مقاله',
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
        <ReturnButton />
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
