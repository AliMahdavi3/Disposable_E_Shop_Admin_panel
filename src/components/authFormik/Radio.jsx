import { FastField } from 'formik';
import React, { Fragment } from 'react'

const Radio = (props) => {
    const { name, options } = props;
    return (
        <div className='mb-5'>
            <FastField id={name} name={name}>
                {({ field }) => (
                     options.map((o) => (
                        <Fragment key={o.id}>
                            <input
                                className='ml-2 cursor-pointer top-[0.5px] relative'
                                type="radio"
                                id={o.id}
                                {...field}
                                value={o.id}
                                checked={field.value === o.id} />

                            <label className='text-xs md:text-base ml-3 text-gray-500' htmlFor={o.id}>{o.value}</label>
                        </Fragment>
                    ))
                )}
            </FastField>
        </div>
    )
}

export default Radio
