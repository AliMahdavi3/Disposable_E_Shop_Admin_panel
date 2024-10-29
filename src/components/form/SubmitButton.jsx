import { FastField } from 'formik'
import React from 'react'
import SpinnerLoad from '../SpinnerLoad'

const SubmitButton = ({ setOpen }) => {
    return (
        <FastField>
            {({ form }) => {
                return (
                    <div className='flex justify-start mt-5 items-center'>
                        <button type='submit' className='text-white cursor-pointer bg-mgreen px-3 py-2
                        rounded-md' disabled={form.isSubmitting}>
                            {form.isSubmitting ? <SpinnerLoad isSmall={true} /> : 'ذخیره'}
                        </button>
                        <button onClick={() => setOpen(false)} type='button'
                            className='text-white bg-rose-600 cursor-pointer ms-3 px-3 rounded-md py-2'>
                            خروج
                        </button>
                    </div>
                )
            }}
        </FastField>
    )
}

export default SubmitButton
