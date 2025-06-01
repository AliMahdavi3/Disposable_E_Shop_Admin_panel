import React, { useEffect, useState } from 'react'
import { getSingleBannerService } from '../../services/banner';
import { FaPlus } from 'react-icons/fa';
import ModalContainer from '../../components/ModalContainer';
import { Form, Formik } from 'formik';
import FormikControl from '../../components/form/FormikControl';
import SubmitButton from '../../components/form/SubmitButton';
import { initialValues, onSubmit, validationSchema } from './core/core';
import { Alert } from '../../utils/sweetalert2';

const AddBanner = ({ editId, setEditId, setReInitialValues, reInitialValues, setAddBannerModal, addBannerModal, setForceRender }) => {

  const [editBanner, setEditBanner] = useState(null);
  
  const handleGetSingleBanner = async () => {
    try {
      const res = await getSingleBannerService(editId);
      console.log(res);
      if (res.status === 200) {
        const oldBanner = res.data.banner;
        console.log(oldBanner);
        setEditBanner(oldBanner);
      }
    } catch (error) {
      Alert('خطا!', 'بنر موردنظر یافت نشد!', 'warning')
    }
  }

  useEffect(() => {
    if (editId) handleGetSingleBanner()
    else setEditBanner(null)
  }, [editId]);


  useEffect(() => {
    if (editBanner) {
      setReInitialValues({
        title: editBanner.title || "",
        content: editBanner.content || "",
        image: editBanner.image || "",
        link: editBanner.link || "",
      })
    } else {
      setReInitialValues(null);
    }
  }, [editBanner]);


  return (
    <>
      <button onClick={() => {
        setAddBannerModal(true)
        setEditId(null);
        setReInitialValues(null)
      }}
        className='bg-teal-600 dark:bg-darkModeBgColor
        hover:bg-violet-600 dark:hover:bg-violet-600 cursor-pointer p-2 rounded-md'>
        <FaPlus className='text-white dark:text-darkModeTextColor text-2xl' />
      </button >

      <ModalContainer
        open={addBannerModal}
        onClose={() => setAddBannerModal(false)}
        title={reInitialValues ? 'ویرایش : ' + (reInitialValues.title) : 'افزودن بنر'}
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
                    control="input"
                    type="text"
                    label="آدرس بنر"
                    placeholder="آدرس بنر"
                    name="link"
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

                  <SubmitButton setOpen={setAddBannerModal} />

                </Form>
              )
            }
          }
        </Formik>
      </ModalContainer>
    </>
  )
}

export default AddBanner
