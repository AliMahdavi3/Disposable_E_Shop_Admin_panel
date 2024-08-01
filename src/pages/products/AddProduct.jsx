import React from 'react'
import ModalContainer from '../../components/ModalContainer'

const AddProduct = ({ open, onClose }) => {
  return (
    <ModalContainer open={open} onClose={onClose} fullscreen={true}>
      <h1 className='text-center text-xl'>افزودن محصول</h1>
      <form className='gap-5 text-sm container'>

        <div className='flex flex-col'>
          <label className='text-xs mb-1 mt-3 text-gray-600 font-medium' htmlFor="title">نام محصول</label>
          <input className='border rounded-md px-5 py-2' placeholder='نام' type="text" name="" id="" />
        </div>

        <div className='flex flex-col'>
          <label className='text-xs mb-1 mt-3 text-gray-600 font-medium' htmlFor="title">محتوا</label>
          <textarea className='border rounded-md px-5 py-2' placeholder='محتوا' name="" id="" cols="30" rows="5"></textarea>
        </div>

        <div className='flex flex-col'>
          <label className='text-xs mb-1 mt-3 text-gray-600 font-medium' htmlFor="title">تصاویر</label>
          <input className='border rounded-md px-5 py-2' placeholder='تصاویر' type="file" name="" id="" />
        </div>


        <div className='flex flex-col lg:flex-row justify-between items-center gap-5'>
          <div className='w-full'>
            <div className='flex flex-col'>
              <label className='text-xs mb-1 mt-3 text-gray-600 font-medium' htmlFor="title">قیمت</label>
              <input className='border rounded-md px-5 py-2' placeholder='قیمت' type="text" name="" id="" />
            </div>
            <div className='flex flex-col'>
              <label className='text-xs mb-1 mt-3 text-gray-600 font-medium' htmlFor="title">کد محصول</label>
              <input className='border rounded-md px-5 py-2' placeholder='کد' type="text" name="" id="" />
            </div>
          </div>

          <div className='w-full'>
            <div className='flex flex-col'>
              <label className='text-xs mb-1 mt-3 text-gray-600 font-medium' htmlFor="title">موجودی</label>
              <input className='border rounded-md px-5 py-2' placeholder='موجودی' type="text" name="" id="" />
            </div>
            <div className='flex flex-col'>
              <label className='text-xs mb-1 mt-3 text-gray-600 font-medium' htmlFor="title">دسته بندی</label>
              <input className='border rounded-md px-5 py-2' placeholder='دسته بندی' type="text" name="" id="" />
            </div>
          </div>

          <div className='w-full'>
            <div className='flex flex-col'>
              <label className='text-xs mb-1 mt-3 text-gray-600 font-medium' htmlFor="title">وزن</label>
              <input className='border rounded-md px-5 py-2' placeholder='وزن' type="text" name="" id="" />
            </div>

            <div className='flex flex-col'>
              <label className='text-xs mb-1 mt-3 text-gray-600 font-medium' htmlFor="title">اندازه</label>
              <input className='border rounded-md px-5 py-2' placeholder='اندازه' type="text" name="" id="" />
            </div>
          </div>

          <div className='w-full'>
            <div className='flex flex-col'>
              <label className='text-xs mb-1 mt-3 text-gray-600 font-medium' htmlFor="title">رنگ</label>
              <input className='border rounded-md px-5 py-2' placeholder='رنگ' type="text" name="" id="" />
            </div>

            <div className='flex flex-col'>
              <label className='text-xs mb-1 mt-3 text-gray-600 font-medium' htmlFor="title">تگ</label>
              <input className='border rounded-md px-5 py-2' placeholder='تگ' type="text" name="" id="" />
            </div>
          </div>
        </div>


        <div className='flex justify-start mt-5 items-center'>
          <button type='submit' className='text-white bg-mgreen px-3 rounded-md py-2'>ذخیره</button>
          <button type='submit' className='text-white bg-rose-600 ms-3 px-3 rounded-md py-2'>انصراف</button>
        </div>

      </form>
    </ModalContainer>
  )
}

export default AddProduct
