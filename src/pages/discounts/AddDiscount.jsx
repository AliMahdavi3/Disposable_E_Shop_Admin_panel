import React, { useEffect, useState } from 'react'
import { getSingleDiscountCodeService } from '../../services/discount';
import { Alert } from '../../utils/alert';
import { FaPlus } from 'react-icons/fa';
import ModalContainer from '../../components/ModalContainer';
import { Form, Formik } from 'formik';
import { initialValues, isAvailable, onSubmit, validationSchema } from './core/core';
import FormikControl from '../../components/form/FormikControl';
import SubmitButton from '../../components/form/SubmitButton';

const AddDiscount = ({ setForceRender, setAddDiscountCodeModal, addDiscountCodeModal, reInitialValues, setReInitialValues, editId, setEditId }) => {

  const [editDiscountCode, setEditDiscountCode] = useState(null);

  const handleValidateDiscountCode = async () => {
    try {
      const res = await getSingleDiscountCodeService(editId);
      console.log(res);

      if (res.status === 200) {
        const oldDiscountCode = res.data.discount;
        setEditDiscountCode(oldDiscountCode);
      }
    } catch (error) {
      Alert('خطا!', 'کد تخفیف موردنظر یافت نشد!', 'warning')
    }
  }

  useEffect(() => {
    if (editId) handleValidateDiscountCode()
    else setEditDiscountCode(null)
  }, [editId]);

  useEffect(() => {
    if (editDiscountCode) {
      setReInitialValues({
        code: editDiscountCode.code || "",
        percentage: editDiscountCode.percentage || "",
        expiresAt: editDiscountCode.expiresAt || "",
        isActive: editDiscountCode?.isActive ? 'موجود هست' : 'موجود نیست',
      })
    } else {
      setReInitialValues(null);
    }
  }, [editDiscountCode]);




  return (
    <>
      <button onClick={() => {
        setAddDiscountCodeModal(true)
        setEditId(null);
        setReInitialValues(null)
      }} className='bg-teal-600 dark:bg-darkModeBgColor
     hover:bg-violet-600 dark:hover:bg-violet-600 cursor-pointer p-2 rounded-md'>
        <FaPlus className='text-white dark:text-darkModeTextColor text-2xl' />
      </button >

      <ModalContainer
        open={addDiscountCodeModal}
        onClose={() => setAddDiscountCodeModal(false)}
        title={reInitialValues ? 'ویرایش : ' + (reInitialValues.title) : 'افزودن کد تخفیف'}
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
                    label="کد تخفیف"
                    placeholder="کد تخفیف"
                    name="code"
                  />

                  <div className='grid grid-cols-3 gap-5'>

                    <div className='col-span-3 lg:col-span-1'>
                      <FormikControl
                        className="rounded-md px-5 py-2"
                        formik={formik}
                        options={isAvailable}
                        control="select"
                        label="وضعیت"
                        placeholder="وضعیت"
                        name="isActive"
                      />

                    </div>
                    <div className='col-span-3 lg:col-span-1'>

                      <FormikControl
                        className="rounded-md px-5 py-2"
                        formik={formik}
                        control="input"
                        type="number"
                        label="درصد"
                        placeholder="درصد"
                        name="percentage"
                      />
                    </div>
                    <div className='col-span-3 lg:col-span-1'>

                      <FormikControl
                        className="rounded-md px-5 py-2"
                        formik={formik}
                        control="input"
                        type="text"
                        label="تاریخ"
                        placeholder="تاریخ"
                        name="expiresAt"
                      />
                    </div>

                  </div>

                  <SubmitButton setOpen={setAddDiscountCodeModal} />

                </Form>
              )
            }
          }
        </Formik>
      </ModalContainer>
    </>
  )
}

export default AddDiscount
