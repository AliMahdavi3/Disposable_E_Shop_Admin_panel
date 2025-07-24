import React from 'react'

const PricesBox = ({ cartData }) => {
    return (
        <div className='col-span-5 lg:col-span-2'>
            <div className="border-2 border-gray-300 text-mgreen
                dark:text-darkModeTextColor
                rounded-md p-4 mb-3 dark:bg-darkModeBgColor">
                <h2 className="text-sm lg:text-base font-semibold mb-2">
                    تخفیف اعمال شده
                </h2>
                <p className='text-xs lg:text-sm mb-2'>
                    <span>کد تخفیف : </span>
                    {cartData?.appliedDiscount?.discountCode || "بدون کد تخفیف"}
                </p>
                <p className='text-xs lg:text-sm mb-2'>
                    <span>درصد تخفیف : </span>
                    {cartData?.appliedDiscount?.percentage || 0}%
                </p>
                <p className='text-xs lg:text-sm mb-2'>
                    <span>مقدار تخفیف : </span>
                    {cartData?.formattedDiscountAmount || 0} تومان
                </p>
            </div>

            <div className="border-2 border-gray-300 text-mgreen
                dark:text-darkModeTextColor rounded-md p-4 mb-3
                dark:bg-darkModeBgColor">
                <h2 className="text-sm lg:text-base font-semibold mb-2">
                    جمع کل
                </h2>
                <p className='text-xs lg:text-sm mb-2'>
                    <span>تعداد کل محصولات : </span>
                    {cartData?.totalQuantity}
                </p>
                <p className='text-xs lg:text-sm mb-2'>
                    <span>قیمت کل : </span>
                    {cartData?.formattedPrice} تومان
                </p>
                <p className='text-xs lg:text-sm mb-2'>
                    <span>مبلغ نهایی (با تخفیف) : </span>
                    {cartData?.formattedDiscountedPrice || cartData?.formattedPrice} تومان
                </p>
            </div>
        </div>
    )
}

export default PricesBox
