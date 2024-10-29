import React, { useEffect, useState } from 'react'
import { Form, Formik } from 'formik';
import { FaPlus } from 'react-icons/fa';
import { Alert } from '../../utils/alert';
import { ArticleCategories, initialValues, onSubmit, readingTime, validationSchema } from './core/core';
import SubmitButton from '../../components/form/SubmitButton';
import ModalContainer from '../../components/ModalContainer';
import { getSingleArticleService } from '../../services/article';
import FormikControl from '../../components/form/FormikControl';



const AddArticle = ({ editId, reInitialValues, setReInitialValues, setAddArticleModal, setEditId, addArticleModal, setForceRender }) => {

  const [editArticle, setEditArticle] = useState(null);

  const handleGetSingleArticle = async () => {
    try {
      const res = await getSingleArticleService(editId);
      console.log(res);
      if (res.status === 200) {
        const oldArticle = res.data.article;
        console.log(oldArticle);
        setEditArticle(oldArticle); 
      }
    } catch (error) {
      Alert('خطا!', 'مقاله موردنظر یافت نشد!', 'warning')
    }
  }

  useEffect(() => {
    if (editId) handleGetSingleArticle()
    else setEditArticle(null)
  }, [editId]);


  useEffect(() => {
    if (editArticle) {
      setReInitialValues({
        title: editArticle.title || "",
        content: editArticle.content || "",
        excerpt: editArticle.excerpt || "",
        image: editArticle.image || "",
        authorName: editArticle.author.name || "",
        authorBio: editArticle.author.bio || "",
        authorProfileImage: editArticle.authorProfileImage || "",
        readTime: editArticle.readTime || "",
        categories: editArticle.categories || "",
      })
    } else {
      setReInitialValues(null);
    }
  }, [editArticle]);

  return (
    <>
      <button onClick={() => {
        setAddArticleModal(true)
        setEditId(null);
        setReInitialValues(null)
      }} className='bg-teal-600 dark:bg-darkModeBgColor
     hover:bg-violet-600 dark:hover:bg-violet-600 cursor-pointer p-2 rounded-md'>
        <FaPlus className='text-white dark:text-darkModeTextColor text-2xl' />
      </button >

      <ModalContainer
        open={addArticleModal}
        onClose={() => setAddArticleModal(false)}
        title={reInitialValues ? 'ویرایش : ' + (reInitialValues.title) : 'افزودن مقاله'}
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
                    label="موضوع مقاله"
                    placeholder="موضوع مقاله"
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
                    className="rounded-md px-5 py-2"
                    formik={formik}
                    control="textarea"
                    label="خلاصه"
                    placeholder="خلاصه"
                    name="excerpt"
                    cols={30}
                    rows={2}
                  />

                  <div className='grid grid-cols-2 gap-5'>

                    <div className="col-span-2 lg:col-span-1">
                      <FormikControl
                        className="w-full text-gray-600 rounded-md px-5 py-3 flex 
                        justify-center items-center"
                        formik={formik}
                        control="file"
                        label="تصویر مقاله"
                        placeholder="تصویر مقاله"
                        name="image"
                        isMultiple={false} // Indicate multiple file upload
                      />
                    </div>

                    <div className="col-span-2 lg:col-span-1">
                      <FormikControl
                        className="w-full text-gray-600 rounded-md px-5 py-3 flex 
                        justify-center items-center"
                        formik={formik}
                        control="file"
                        label="تصویر نویسنده"
                        placeholder="تصویر نویسنده"
                        name="authorProfileImage"
                        isMultiple={false} // Indicate multiple file upload
                      />
                    </div>

                  </div>

                  <div className="grid grid-cols-3 gap-5">

                    <div className="col-span-3 lg:col-span-1">
                      <FormikControl
                        className="rounded-md px-5 py-2"
                        formik={formik}
                        control="input"
                        type="text"
                        label="نام نویسنده"
                        placeholder="نام نویسنده"
                        name="authorName"
                      />
                    </div>

                    <div className="col-span-3 lg:col-span-1">
                      <FormikControl
                        className="rounded-md px-5 py-2"
                        formik={formik}
                        control="select"
                        options={ArticleCategories}
                        label="دسته بندی"
                        placeholder="دسته بندی"
                        name="categories"
                      />
                    </div>

                    <div className="col-span-3 lg:col-span-1">
                      <FormikControl
                        className="rounded-md px-5 py-2"
                        formik={formik}
                        control="select"
                        options={readingTime}
                        label="زمان مطالعه"
                        placeholder="زمان مطالعه"
                        name="readTime"
                      />
                    </div>

                    <div className='col-span-3'>
                      <FormikControl
                        className="rounded-md px-5 py-2"
                        formik={formik}
                        control="textarea"
                        label="بیوگرافی نویسنده"
                        placeholder="بیوگرافی نویسنده"
                        name="authorBio"
                        cols={30}
                        rows={2}
                      />
                    </div>

                  </div>


                  <SubmitButton setOpen={setAddArticleModal} />

                </Form>
              )
            }
          }
        </Formik>
      </ModalContainer>
    </>
  )
}

export default AddArticle
