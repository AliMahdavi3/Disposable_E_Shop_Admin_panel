import React, { useEffect, useState } from 'react'
import PaginatedTable from '../../components/PaginatedTable'
import { deleteQuestionService, getQuestionsService } from '../../services/question';
import { Alert, Confirm } from '../../utils/alert';
import Actions from './questionAddition/Actions';
import AddQuestion from './AddQuestion';
import DetailsModal from './DetailsModal';
import DetailsModalButton from '../../components/DetailsModalButton';

const QuestionTable = () => {

  const [data, setData] = useState([]);
  const [reInitialValues, setReInitialValues] = useState(null);
  const [editId, setEditId] = useState(null);
  const [addQuestionModal, setAddQuestionModal] = useState(false);
  const [detailsModal, setDetailsModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [forceRender, setForceRender] = useState(0);


  const handleGetQuestions = async () => {
    setLoading(true);
    try {
      const res = await getQuestionsService();
      if (res.status === 200) {
        setData(res.data.questions);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }

  const handleDeleteQuestion = async (rowData) => {
    if (await Confirm('حذف سوال!', `آیا از حذف ${rowData.title} اطمینان دارید؟`)) {
      try {
        const res = await deleteQuestionService(rowData._id);
        console.log(res);
        if (res.status === 200) {
          setData(data.filter(d => d._id !== rowData._id));
          Alert('سوال حذف شد', 'عملیات موفقیت آمیز بود!', 'success');
        }
      } catch (error) {
        console.log(error);
        Alert('خطا در حذف سوال', error.message, 'error');
      }
    }
  }

  useEffect(() => {
    handleGetQuestions();
  }, [forceRender])


  const dataInfo = [
    { field: 'index', title: '#' },
    { field: 'title', title: 'موضوع' },
    { field: 'content', title: 'پاسخ' },
  ]


  const additionalField = [
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
        handleDeleteQuestion={handleDeleteQuestion}
        setEditId={setEditId}
        setAddQuestionModal={setAddQuestionModal}
        rowData={rowData} />
    },
  ]

  const searchParams = {
    placeholder: 'جستجو سوال',
    searchFiled: 'title',
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
        <AddQuestion
          setForceRender={setForceRender}
          setAddQuestionModal={setAddQuestionModal}
          addQuestionModal={addQuestionModal}
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

export default QuestionTable
