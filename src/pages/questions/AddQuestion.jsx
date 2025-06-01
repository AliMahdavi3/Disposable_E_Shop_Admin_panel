import React, { useEffect, useState } from 'react'
import { getSingleQuestionService } from '../../services/question';
import { FaPlus } from 'react-icons/fa';
import ModalContainer from '../../components/ModalContainer';
import { Form, Formik } from 'formik';
import FormikControl from '../../components/form/FormikControl';
import SubmitButton from '../../components/form/SubmitButton';
import { initialValues, onSubmit, validationSchema } from './core/core';
import { Alert } from '../../utils/sweetalert2';

const AddQuestion = ({ editId, setEditId, setForceRender, setAddQuestionModal, addQuestionModal, reInitialValues, setReInitialValues }) => {

  
  const [editQuestion, setEditQuestion] = useState(null);

  const handleGetSingleQuestion = async () => {
    try {
      const res = await getSingleQuestionService(editId);
      if (res.status === 200) {
        const oldQuestion = res.data.question;
        setEditQuestion(oldQuestion);
      }
    } catch (error) {
      Alert('خطا!', 'سوال موردنظر یافت نشد!', 'warning')
    }
  }

  useEffect(() => {
    if (editId) handleGetSingleQuestion()
    else setEditQuestion(null)
  }, [editId]);


  useEffect(() => {
    if (editQuestion) {
      setReInitialValues({
        title: editQuestion.title,
        content: editQuestion.content,
      })
    } else {
      setReInitialValues(null);
    }
  }, [editQuestion]);



  return (
    <>
    <button onClick={() => {
      setAddQuestionModal(true)
      setEditId(null);
      setReInitialValues(null)
    }} className='bg-teal-600 dark:bg-darkModeBgColor
     hover:bg-violet-600 dark:hover:bg-violet-600 cursor-pointer p-2 rounded-md'>
      <FaPlus className='text-white dark:text-darkModeTextColor text-2xl' />
    </button >

    <ModalContainer
      open={addQuestionModal}
      onClose={() => setAddQuestionModal(false)}
      title={reInitialValues ? 'ویرایش : ' + (reInitialValues.title) : 'افزودن سوال'}
      fullscreen={true}>


      <Formik
        initialValues={reInitialValues || initialValues}
        onSubmit={(values, actions) => onSubmit(values, actions, setForceRender, editId)}
        validationSchema={validationSchema}
        enableReinitialize
      >
        {
          formik => {
            return (
              <Form className='gap-5 text-sm container pb-10'>
                <FormikControl
                  className="rounded-md px-5 py-2"
                  formik={formik}
                  control="input"
                  type="text"
                  label="سوال"
                  placeholder="سوال"
                  name="title"
                />

                <FormikControl
                  className="rounded-md px-5 py-2"
                  formik={formik}
                  control="textarea"
                  label="پاسخ"
                  placeholder="پاسخ"
                  name="content"
                  cols={30}
                  rows={5}
                />

                <SubmitButton setOpen={setAddQuestionModal} />

              </Form>
            )
          }
        }
      </Formik>
    </ModalContainer>
  </>
  )
}

export default AddQuestion
