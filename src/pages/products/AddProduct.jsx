import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import ModalContainer from '../../components/ModalContainer';
import FormikControl from '../../components/form/FormikControl';
import { createNewProductService } from '../../services/product';
import { Alert } from '../../utils/alert';

const initialValues = {
  title: '',
  content: '',
  image: [],
  price: '',
  productCode: '',
  weight: '',
  size: '',
  // available: true,
  category: '',
  color: '',
  tag: '',
}

const onSubmit = async (values, action) => {
  try {
    const res = await createNewProductService(values);
    console.log(res);
    if (res.status === 201) {
      Alert('محصول ثبت شد', 'عملیات موفقیت آمیز بود!', 'success')
    }
    action.resetForm();
  } catch (error) {
    console.error("Error creating product:", error.message);
  }
  console.log(values);
}

const validationSchema = Yup.object({
  title: Yup.string().required('نام محصول الزامی است'),
  content: Yup.string().required('محتوا الزامی است'),
  image: Yup.array().min(1, 'حداقل یک تصویر بارگذاری کنید!'),
  price: Yup.number().required('قیمت الزامی است').positive('قیمت باید مثبت باشد'),
  productCode: Yup.string().required('کد محصول الزامی است'),
  weight: Yup.string().required('وزن الزامی است'),
  size: Yup.string().required('اندازه الزامی است'),
  // available: Yup.string().required('وضعیت موجودی الزامی است'),
  category: Yup.string().required('دسته بندی الزامی است'),
  color: Yup.string().required('رنگ الزامی است'),
  tag: Yup.string().required('تگ الزامی است'),
})

const categories = [
  { id: 1, value: 'ظروف یکبارمصرف' },
  { id: 2, value: 'تولدی' },
  { id: 3, value: 'آلمینیوم' },
]
const colors = [
  { id: 1, value: 'ظروف یکبارمصرف' },
  { id: 2, value: 'تولدی' },
  { id: 3, value: 'آلمینیوم' },
]
const tags = [
  { id: 1, value: 'ظروف یکبارمصرف' },
  { id: 2, value: 'تولدی' },
  { id: 3, value: 'آلمینیوم' },
]
// const isAvailable = [
//   { id: 1, value: 'موجود هست' },
//   { id: 2, value: 'موجود نیست', }
// ];



const AddProduct = ({ open, onClose }) => {
  return (
    <ModalContainer open={open} onClose={onClose} title='افزودن محصول' fullscreen={true}>

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {
          formik => {
            return (
              <Form className='gap-5 text-sm container'>
                
                <FormikControl
                  className="shadow-sm bg-blue-100 rounded-md px-5 py-2"
                  formik={formik}
                  control="input"
                  type="text"
                  label="نام محصول"
                  placeholder="نام محصول"
                  name="title"
                />

                <FormikControl
                  className="shadow-sm bg-blue-100 rounded-md px-5 py-2"
                  formik={formik}
                  control="textarea"
                  label="محتوا"
                  placeholder="محتوا"
                  name="content"
                />

                <FormikControl
                  className="shadow-sm bg-blue-100 rounded-md px-5 py-2"
                  formik={formik}
                  control="file"
                  label="تصاویر"
                  placeholder="تصاویر"
                  name="image"
                />


                <div className='flex flex-col lg:flex-row justify-between items-center gap-5'>

                  <div className='w-full '>

                    <FormikControl
                      className="shadow-sm bg-blue-100 rounded-md px-5 py-2"
                      formik={formik}
                      control="input"
                      type="number"
                      label="قیمت"
                      placeholder="قیمت"
                      name="price"
                    />
                    <FormikControl
                      className="shadow-sm bg-blue-100 rounded-md px-5 py-2"
                      formik={formik}
                      control="input"
                      type="text"
                      label="کد محصول"
                      placeholder="کد محصول"
                      name="productCode"
                    />

                  </div>

                  <div className='w-full '>


                    {/* <FormikControl
                      className="shadow-sm bg-blue-100 rounded-md px-5 py-2"
                      formik={formik}
                      options={isAvailable}
                      control="select"
                      label="موجودی"
                      placeholder="موجودی"
                      name="available"
                    /> */}

                    <FormikControl
                      className="shadow-sm bg-blue-100 rounded-md px-5 py-2"
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
                      className="shadow-sm bg-blue-100 rounded-md px-5 py-2"
                      formik={formik}
                      control="input"
                      type="text"
                      label="وزن"
                      placeholder="وزن"
                      name="weight"
                    />

                    <FormikControl
                      className="shadow-sm bg-blue-100 rounded-md px-5 py-2"
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
                      className="shadow-sm bg-blue-100 rounded-md px-5 py-2"
                      formik={formik}
                      options={tags}
                      control="select"
                      label="تگ"
                      placeholder="تگ"
                      name="tag"
                    />

                    <FormikControl
                      className="shadow-sm bg-blue-100 rounded-md px-5 py-2"
                      formik={formik}
                      control="select"
                      options={categories}
                      label="دسته بندی"
                      placeholder="دسته بندی"
                      name="category"
                    />

                  </div>
                </div>

                <div className='flex justify-start mt-5 items-center'>
                  <button type='submit' className='text-white bg-mgreen px-3 rounded-md py-2'>ذخیره</button>
                  <button onClick={onClose} className='text-white bg-rose-600 ms-3 px-3 rounded-md py-2'>انصراف</button>
                </div>

              </Form>
            )
          }
        }

      </Formik>
    </ModalContainer>
  )
}

export default AddProduct
