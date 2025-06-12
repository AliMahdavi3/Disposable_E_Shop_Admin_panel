import { Form, Formik } from 'formik'
import React from 'react'
import FormikControl from '../../../components/form/FormikControl'
import { initialValues, onSubmit, validationSchema } from '../core/responseCore'
import SubmitButton from '../../../components/form/SubmitButton'
import ReturnButton from '../../../components/ReturnButton'

const TicketForm = ({ setForceRender, ticketId, setTicket }) => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => onSubmit(values, actions, setForceRender, ticketId, setTicket)}
            validationSchema={validationSchema}
        >
            {
                (formik) => {
                    return (
                        <Form>
                            <>
                                <FormikControl
                                    className="rounded-md px-5 py-2 text-xs"
                                    formik={formik}
                                    control="textarea"
                                    placeholder="پاسخ خود را وارد کنید!"
                                    name="responseMessage"
                                    rows={3}
                                />
                                <div className='flex items-center mt-5'>
                                    <SubmitButton onlySubmit={true} />
                                    <ReturnButton title={"بازگشت به صفحه قبل"} />
                                </div>
                            </>
                        </Form>
                    )
                }
            }
        </Formik>
    )
}

export default TicketForm
