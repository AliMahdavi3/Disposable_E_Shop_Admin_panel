import React, { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import { initialValues, onSubmit, ticketStatusOptions, validationSchema } from './core/core';
import { userService } from '../../services/auth';
import { FaPlus } from 'react-icons/fa';
import ModalContainer from '../../components/ModalContainer';
import SubmitButton from '../../components/form/SubmitButton';
import FormikControl from '../../components/form/FormikControl';
import { getSingleTicketService } from '../../services/ticket';
import { Alert } from '../../utils/sweetalert2';


const AddTicket = ({ setForceRender, setAddTicketModal, addTicketModal, reInitialValues, setReInitialValues, editId, setEditId }) => {
    const [userData, setUserData] = useState(null);
    const [editTicket, setEditTicket] = useState(null);

    useEffect(() => {
        const handleFetchUserInfo = async () => {
            try {
                const res = await userService();
                if (res.status === 200) {
                    setUserData(res.data.user);
                }
            } catch (error) {
                console.log(error);
            }
        }
        handleFetchUserInfo();
    }, []);

    useEffect(() => {
        const handleGetSingleTicket = async () => {
            try {
                const res = await getSingleTicketService(editId);
                if (res.status === 200) {
                    setEditTicket(res.data.ticket);
                }
            } catch (error) {
                Alert('خطا!', 'تیکت موردنظر یافت نشد!', 'error')
            }
        }

        if (editId) handleGetSingleTicket()
        else setEditTicket(null)
    }, [editId]);

    useEffect(() => {
        if (userData) {
            const baseValues = {
                name: userData.name || '',
                email: userData.email || '',
                phone: userData.phone || '',
                subject: editTicket?.subject || '',
                description: editTicket?.description || '',
                ticketStatus: editTicket?.ticketStatus || '',
                image: editTicket?.imageUrl || [],
            };
            setReInitialValues(baseValues);
        }
    }, [userData, editTicket]);

    return (
        <>
            <button onClick={() => {
                setAddTicketModal(true)
                setEditId(null);
                setReInitialValues({
                    name: userData.name || '',
                    email: userData.email || '',
                    phone: userData.phone || '',
                    subject: '',
                    description: '',
                    ticketStatus: '',
                    image: [],
                });
            }} className='bg-teal-600 dark:bg-darkModeBgColor
                cursor-pointer hover:bg-violet-600 dark:hover:bg-violet-600 p-2 rounded-md'>
                <FaPlus className='text-white dark:text-darkModeTextColor text-2xl' />
            </button >

            <ModalContainer
                open={addTicketModal}
                onClose={() => setAddTicketModal(false)}
                title={editTicket ? 'ویرایش : ' + (editTicket.subject) : 'ساخت تیکت'}
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
                                    <div className='flex flex-col md:flex-row justify-between 
                                    items-center gap-5'>
                                        <FormikControl
                                            control="ticketInput"
                                            formik={formik}
                                            type="text"
                                            name="name"
                                            label="نام و نام خانوادگی"
                                            placeholder="نام"
                                            readOnly={true}
                                        />
                                        <FormikControl
                                            control="ticketInput"
                                            formik={formik}
                                            type="email"
                                            name="email"
                                            label="ایمیل"
                                            placeholder="example@gmail.com"
                                            readOnly={true}
                                        />
                                        <FormikControl
                                            control="ticketInput"
                                            formik={formik}
                                            type="text"
                                            name="phone"
                                            label="تلفن"
                                            placeholder="example@gmail.com"
                                            readOnly={true}
                                        />
                                    </div>

                                    <FormikControl
                                        className="rounded-md px-5 py-2"
                                        formik={formik}
                                        control="textarea"
                                        label="موضوع"
                                        placeholder="موضوع"
                                        name="subject"
                                        cols={5}
                                        rows={1}
                                    />

                                    <FormikControl
                                        className="rounded-md px-5 py-2"
                                        formik={formik}
                                        control="textarea"
                                        label="توضیحات"
                                        placeholder="توضیحات"
                                        name="description"
                                        cols={30}
                                        rows={5}
                                    />

                                    <FormikControl
                                        className="rounded-md px-5 py-2"
                                        formik={formik}
                                        control="select"
                                        options={ticketStatusOptions}
                                        label="وضعیت"
                                        placeholder="وضعیت"
                                        name="ticketStatus"
                                    />

                                    <FormikControl
                                        className="w-full text-gray-600 rounded-md px-5 py-3 flex 
                                        justify-center items-center"
                                        formik={formik}
                                        control="file"
                                        label="تصاویر"
                                        placeholder="تصاویر"
                                        isMultiple={true}
                                        name="image"
                                    />

                                    <SubmitButton setOpen={setAddTicketModal} />
                                </Form>
                            )
                        }
                    }
                </Formik>
            </ModalContainer>
        </>
    )
}

export default AddTicket
