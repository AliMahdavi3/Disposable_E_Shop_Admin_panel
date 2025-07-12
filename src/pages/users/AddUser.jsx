import React, { useEffect, useState } from 'react'
import SubmitButton from '../../components/form/SubmitButton';
import { FaPlus } from 'react-icons/fa';
import ModalContainer from '../../components/ModalContainer';
import { Form, Formik } from 'formik';
import FormikControl from '../../components/form/FormikControl';
import { getSingleUserService } from '../../services/user';
import { Alert } from '../../utils/sweetalert2';
import { initialValues, onSubmit, validationSchema } from './core/core';

const AddUser = ({ editId, setEditId, setForceRender, setAddUserModal, addUserModal, reInitialValues, setReInitialValues }) => {

  const [editUser, setEditUser] = useState(null);

  const handleGetSingleUser = async () => {
    try {
      const res = await getSingleUserService(editId);
      if (res.status === 200) {
        const oldUserInfo = res.data.user;
        setEditUser(oldUserInfo);
      }
    } catch (error) {
      Alert('خطا!', 'کاربر موردنظر یافت نشد!', 'error');
    }
  }

  useEffect(() => {
    if (editId) handleGetSingleUser();
    else setEditUser(null);
  }, [editId]);


  useEffect(() => {
    if (editUser) {
      setReInitialValues({
        name: editUser.name || '',
        email: editUser.email || '',
        phone: editUser.phone || '',
        address: editUser.address || '',
        city: editUser.city || '',
        role: editUser.role || '',
        zipCode: editUser.zipCode || '',
        birthDate: editUser.birthDate || '',
      });
    } else {
      setReInitialValues(null);
    }
  }, [editUser]);

  return (
    <>
      <button onClick={() => {
        setAddUserModal(true)
        setEditId(null);
        setReInitialValues(null)
      }} className='bg-teal-600 dark:bg-darkModeBgColor
       hover:bg-violet-600 dark:hover:bg-violet-600 cursor-pointer p-2 rounded-md'>
        <FaPlus className='text-white dark:text-darkModeTextColor text-2xl' />
      </button >

      <ModalContainer
        open={addUserModal}
        onClose={() => setAddUserModal(false)}
        title={reInitialValues ? 'ویرایش : ' + (reInitialValues.name) : 'ثبت نام کاربر'}
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
                  <div className='flex flex-col lg:flex-row justify-between items-center gap-4'>
                    <div className="w-full">
                      <FormikControl
                        className="rounded-md px-5 py-2"
                        formik={formik}
                        control="input"
                        type="text"
                        label="نام و نام خانوادگی"
                        placeholder="نام نام خانوادگی"
                        name="name"
                      />
                    </div>

                    <div className="w-full">
                      <FormikControl
                        className="rounded-md px-5 py-2"
                        formik={formik}
                        control="input"
                        type="email"
                        name="email"
                        label="ایمیل"
                        placeholder="aaa@example.bbb"
                      />
                    </div>

                    <div className="w-full">
                      <FormikControl
                        className="rounded-md px-5 py-2"
                        formik={formik}
                        control="input"
                        type="text"
                        label="شماره همراه"
                        placeholder="09123456789"
                        name="phone"
                      />
                    </div>
                  </div>

                  <div className='flex flex-col lg:flex-row justify-between items-center gap-4'>
                    <div className="w-full">
                      <FormikControl
                        className="rounded-md px-5 py-2"
                        formik={formik}
                        control="input"
                        type="text"
                        label="استان"
                        placeholder="استان"
                        name="city"
                      />
                    </div>

                    <div className="w-full">
                      <FormikControl
                        className="rounded-md px-5 py-2"
                        formik={formik}
                        control="input"
                        type="text"
                        label="کدپستی"
                        placeholder="کدپستی"
                        name="zipCode"
                      />
                    </div>

                    <div className="w-full">
                      <FormikControl
                        className="rounded-md px-5 py-2"
                        formik={formik}
                        control="input"
                        type="text"
                        label="وظیفه"
                        placeholder="وظیفه"
                        name="role"
                      />
                    </div>
                  </div>

                  <div className='w-full '>
                    <FormikControl
                      className="rounded-md px-5 py-2"
                      formik={formik}
                      control="textarea"
                      label="آدرس"
                      placeholder="آدرس"
                      name="address"
                      cols={30}
                      rows={2}
                    />

                    <FormikControl
                      className="rounded-md px-5 py-2"
                      control="date"
                      formik={formik}
                      name="birthDate"
                      label="تاریخ تولد"
                      placeholder="تاریخ تولد"
                    />
                  </div>

                  {
                    !editId ? (
                      <div className="w-full">
                        <FormikControl
                          className="rounded-md px-5 py-2"
                          control="password"
                          formik={formik}
                          type="password"
                          name="password"
                          label="رمزعبور"
                          placeholder="رمزعبور"
                        />
                        <FormikControl
                          className="rounded-md px-5 py-2"
                          control="password"
                          formik={formik}
                          type="password"
                          name="confirm_password"
                          label="تکرار رمزعبور"
                          placeholder="تکرار رمزعبور"
                        />
                      </div>
                    ) : null
                  }
                  <SubmitButton setOpen={setAddUserModal} />
                </Form>
              )
            }
          }
        </Formik>
      </ModalContainer>
    </>
  )
}

export default AddUser
