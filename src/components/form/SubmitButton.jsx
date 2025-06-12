import { FastField } from 'formik'
import React from 'react'
import SpinnerLoad from '../SpinnerLoad'

const SubmitButton = ({ setOpen, onlySubmit }) => {

    return (
        <FastField>
            {({ form }) => {
                return (
                    <div className='flex justify-start items-center'>
                        <button type='submit' className='text-white cursor-pointer bg-mgreen 
                            px-3 py-2 me-3 rounded-md dark:bg-darkModeBgColor dark:hover:bg-mgreen'
                            disabled={form.isSubmitting}
                        >
                            {form.isSubmitting ? <SpinnerLoad isSmall={true} /> : 'ذخیره'}
                        </button>
                        {
                            !onlySubmit ? (
                                <button onClick={() => setOpen(false)} type='button'
                                    className='text-white bg-rose-600 cursor-pointer 
                                    px-3 rounded-md py-2'>
                                    خروج
                                </button>
                            ) : null
                        }
                    </div>
                )
            }}
        </FastField>
    )
}

export default SubmitButton
