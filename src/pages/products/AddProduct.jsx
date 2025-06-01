import React, { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import ModalContainer from '../../components/ModalContainer';
import FormikControl from '../../components/form/FormikControl';
import { FaPlus } from 'react-icons/fa';
import SubmitButton from '../../components/form/SubmitButton';
import { categories, colors, initialValues, isAvailable, onSubmit, ratingValue, tags, validationSchema } from './core/core';
import { getSingleProductService } from '../../services/product';
import { Alert } from '../../utils/sweetalert2';

const AddProduct = ({ editId, setEditId, setForceRender, setAddProductModal, addProductModal, reInitialValues, setReInitialValues }) => {

  const [editProduct, setEditProduct] = useState(null);

  const handleGetSingleProduct = async () => {
    try {
      const res = await getSingleProductService(editId);
      if (res.status === 200) {
        const oldProduct = res.data.product;
        setEditProduct(oldProduct);
      }
    } catch (error) {
      Alert('خطا!', 'محصول موردنظر یافت نشد!', 'warning')
    }
  }

  useEffect(() => {
    if (editId) handleGetSingleProduct()
    else setEditProduct(null)
  }, [editId]);


  useEffect(() => {
    if (editProduct) {
      setReInitialValues({
        title: editProduct.title,
        content: editProduct.content,
        image: editProduct.imageUrl && editProduct.imageUrl.length > 0 ? editProduct.imageUrl : [], // Use editProduct.imageUrl
        price: editProduct.price,
        productCode: editProduct.productCode,
        weight: editProduct.weight,
        size: editProduct.size,
        available: editProduct?.available ? 'موجود هست' : 'موجود نیست',
        category: editProduct.category,
        color: editProduct.color,
        tag: editProduct.tag,
        rating: editProduct.rating,
      })
    } else {
      setReInitialValues(null);
    }
  }, [editProduct]);


  return (
    <>
      <button onClick={() => {
        setAddProductModal(true)
        setEditId(null);
        setReInitialValues(null)
      }} className='bg-teal-600 dark:bg-darkModeBgColor
       hover:bg-violet-600 dark:hover:bg-violet-600 cursor-pointer p-2 rounded-md'>
        <FaPlus className='text-white dark:text-darkModeTextColor text-2xl' />
      </button >

      <ModalContainer
        open={addProductModal}
        onClose={() => setAddProductModal(false)}
        title={reInitialValues ? 'ویرایش : ' + (reInitialValues.title) : 'افزودن محصول'}
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
                    label="نام محصول"
                    placeholder="نام محصول"
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
                    className="w-full text-gray-600 rounded-md px-5 py-3 flex 
                    justify-center items-center"
                    formik={formik}
                    control="file"
                    label="تصاویر"
                    placeholder="تصاویر"
                    isMultiple={true} // Indicate multiple file upload
                    name="image"
                  />

                  <div className='flex flex-col lg:flex-row justify-between items-center gap-5'>

                    <div className='w-full '>
                      <FormikControl
                        className="rounded-md px-5 py-2"
                        formik={formik}
                        control="input"
                        type="number"
                        label="قیمت"
                        placeholder="قیمت"
                        name="price"
                      />
                      <FormikControl
                        className="rounded-md px-5 py-2"
                        formik={formik}
                        control="input"
                        type="text"
                        label="کد محصول"
                        placeholder="کد محصول"
                        name="productCode"
                      />
                    </div>

                    <div className='w-full '>
                      <FormikControl
                        className="rounded-md px-5 py-2"
                        formik={formik}
                        options={isAvailable}
                        control="select"
                        label="موجودی"
                        placeholder="موجودی"
                        name="available"
                      />
                      <FormikControl
                        className="rounded-md px-5 py-2"
                        formik={formik}
                        control="select"
                        options={colors}
                        label="رنگ"
                        placeholder="رنگ"
                        name="color"
                      />
                    </div>

                    <div className='w-full '>
                      <FormikControl
                        className="rounded-md px-5 py-2"
                        formik={formik}
                        control="input"
                        type="text"
                        label="وزن"
                        placeholder="وزن"
                        name="weight"
                      />
                      <FormikControl
                        className="rounded-md px-5 py-2"
                        formik={formik}
                        control="input"
                        type="text"
                        label="اندازه"
                        placeholder="اندازه"
                        name="size"
                      />
                    </div>

                    <div className='w-full '>
                      <FormikControl
                        className="rounded-md px-5 py-2"
                        formik={formik}
                        options={tags}
                        control="select"
                        label="تگ"
                        placeholder="تگ"
                        name="tag"
                      />

                      <FormikControl
                        className="rounded-md px-5 py-2"
                        formik={formik}
                        control="select"
                        options={categories}
                        label="دسته بندی"
                        placeholder="دسته بندی"
                        name="category"
                      />

                      <FormikControl
                        className="rounded-md px-5 py-2"
                        formik={formik}
                        control="select"
                        options={ratingValue}
                        label="امتیاز"
                        placeholder="امتیاز"
                        name="rating"
                      />
                    </div>
                  </div>

                  <SubmitButton setOpen={setAddProductModal} />

                </Form>
              )
            }
          }
        </Formik>
      </ModalContainer>
    </>
  )
}

export default AddProduct
