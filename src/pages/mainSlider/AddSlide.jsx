import React, { useEffect, useState } from 'react'
import { Alert } from '../../utils/alert';
import { getSingleSlideService } from '../../services/main-slider';
import { FaPlus } from 'react-icons/fa';
import ModalContainer from '../../components/ModalContainer';
import { Form, Formik } from 'formik';
import { initialValues, onSubmit, validationSchema } from './core/core';
import FormikControl from '../../components/form/FormikControl';
import SubmitButton from '../../components/form/SubmitButton';

const AddSlide = ({ setForceRender, setAddSlideModal, addSlideModal, reInitialValues, setReInitialValues, editId, setEditId }) => {

    const [editSlide, setEditSlide] = useState(null);

    const handleGetSingleSlide = async () => {
        try {
            const res = await getSingleSlideService(editId);
            console.log(res);
            if (res.status === 200) {
                const oldSlide = res.data.slide;
                console.log(oldSlide);
                setEditSlide(oldSlide);
            }
        } catch (error) {
            Alert('خطا!', 'اسلاید موردنظر یافت نشد!', 'warning')
        }
    }

    useEffect(() => {
        if (editId) handleGetSingleSlide()
        else setEditSlide(null)
    }, [editId]);


    useEffect(() => {
        if (editSlide) {
          setReInitialValues({
            title: editSlide.title || "",
            content: editSlide.content || "",
            image: editSlide.image || "",
          })
        } else {
          setReInitialValues(null);
        }
      }, [editSlide]);


    return (
        <>
        <button onClick={() => {
          setAddSlideModal(true)
          setEditId(null);
          setReInitialValues(null)
        }}
          className='bg-teal-600 dark:bg-darkModeBgColor
          hover:bg-violet-600 dark:hover:bg-violet-600 cursor-pointer p-2 rounded-md'>
          <FaPlus className='text-white dark:text-darkModeTextColor text-2xl' />
        </button >
  
        <ModalContainer
          open={addSlideModal}
          onClose={() => setAddSlideModal(false)}
          title={reInitialValues ? 'ویرایش : ' + (reInitialValues.title) : 'افزودن اسلاید'}
          fullscreen={true}
        >
  
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
                      label="عنوان"
                      placeholder="عنوان"
                      name="title"
                    />
  
                    <FormikControl
                      className="rounded-md px-5 py-2"
                      formik={formik}
                      control="textarea"
                      label="محتوا"
                      placeholder="محتوا"
                      name="content"
                      cols={30}
                      rows={5}
                    />
  
                    <FormikControl
                      className="w-full text-gray-600 rounded-md px-5 py-3 flex justify-center items-center"
                      formik={formik}
                      control="file"
                      label="تصویر"
                      placeholder="تصویر"
                      name="image"
                      isMultiple={false} // Indicate multiple file upload
                    />
  
                    <SubmitButton setOpen={setAddSlideModal} />
  
                  </Form>
                )
              }
            }
          </Formik>
        </ModalContainer>
      </>
    )
}

export default AddSlide
