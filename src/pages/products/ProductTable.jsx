import React from 'react'
import { FaArrowLeft, FaArrowRight, FaEdit, FaTrash } from 'react-icons/fa'

const ProductTable = () => {
  return (
    <>
    <div className='flex justify-center items-center w-full'>
      <div className='table_content overflow-x-scroll md:overflow-hidden'>
        <table className="mt-5 flex flex-col w-[1400px] md:w-full">
          <thead className='bg-mgreen text-white border-b-8 border-white rounded-t-md'>

            <tr className='py-5 container flex justify-between items-center'>

              <th className="text-center flex justify-center items-center">
                <p className="text-xs font-medium">#</p>
              </th>
              <th className="w-16 text-center flex justify-center items-center">
                <p className="line-clamp-1 text-xs font-medium">نام محصول</p>
              </th>
              <th className="text-center flex justify-center items-center">
                <p className="text-xs font-medium">تصاویر</p>
              </th>
              <th className="text-center flex justify-center items-center">
                <p className="text-xs font-medium">قیمت</p>
              </th>
              <th className="w-10 text-center flex justify-center items-center">
                <p className="line-clamp-1 text-xs font-medium">کد محصول</p>
              </th>
              <th className="text-center flex justify-center items-center">
                <p className="text-xs font-medium">موجودی</p>
              </th>
              <th className="text-center flex justify-center items-center">
                <p className="text-xs font-medium">دسته بندی</p>
              </th>
              <th className="text-center flex justify-center items-center">
                <p className="text-xs font-medium">جزئیات</p>
              </th>
              <th className="text-center flex justify-center items-center">
                <p className="text-xs font-medium">ویرایش</p>
              </th>


            </tr>

          </thead>

          <tbody>

            <tr className='bg-lime-200 text-gray-700 border-b-8 border-white flex justify-between items-center container'>

              <td className="py-2">
                <p className="text-xs text-blue-gray-900 font-medium">1</p>
              </td>

              <td className="py-2 w-14">
                <p className="line-clamp-1 text-xs text-blue-gray-900 font-medium">بشقاب یکبار مصرف</p>
              </td>


              <td className="py-2">
                <img src="/assets/images/slide (5).png" alt="" className="object-center rounded-full w-12 h-12 border-2 border-mgreen object-contain p-1" />
              </td>

              <td className="py-2">
                <p className="text-xs text-blue-gray-900 font-medium">250,000</p>
              </td>

              <td className="py-2 w-10">
                <p className="text-xs line-clamp-1 text-blue-gray-900 font-medium">234-G</p>
              </td>


              <td className="py-2 bg-teal-500 text-gray-100 px-2 rounded-full">
                <p className="text-xs text-blue-gray-900 font-medium">هست</p>
              </td>

              <td className="py-2">
                <p className="text-xs text-blue-gray-900 font-medium">یکبارمصرف</p>
              </td>

              <td className="py-2 -me-3 hover:bg-violet-500 cursor-pointer
         bg-orange-400 text-gray-100 rounded-full px-2 flex justify-center items-center text-xs text-blue-gray-900 font-medium">
                <span>بیشتر</span>
                <FaArrowLeft />
              </td>

              <td className="py-2 flex justify-center items-center cursor-pointer">
                <FaTrash className='me-2 text-rose-600 hover:text-mgreen' />
                <FaEdit className='text-amber-500 hover:text-mgreen' />
              </td>

            </tr>

            <tr className='bg-sky-200 text-gray-700 border-b-8 border-white flex justify-between items-center container'>

              <td className="py-2">
                <p className="text-xs text-blue-gray-900 font-medium">1</p>
              </td>

              <td className="py-2 w-14">
                <p className="line-clamp-1 text-xs text-blue-gray-900 font-medium">بشقاب یکبار مصرف</p>
              </td>


              <td className="py-2">
                <img src="/assets/images/slide (5).png" alt="" className="object-center rounded-full w-12 h-12 border-2 border-mgreen object-contain p-1" />
              </td>

              <td className="py-2">
                <p className="text-xs text-blue-gray-900 font-medium">250,000</p>
              </td>

              <td className="py-2 w-10">
                <p className="text-xs line-clamp-1 text-blue-gray-900 font-medium">234-G</p>
              </td>


              <td className="py-2 bg-rose-500 text-gray-100 px-2 rounded-full">
                <p className="text-xs text-blue-gray-900 font-medium">نیست</p>
              </td>

              <td className="py-2">
                <p className="text-xs text-blue-gray-900 font-medium">یکبارمصرف</p>
              </td>

              <td className="py-2 -me-3 hover:bg-violet-500 cursor-pointer
         bg-orange-400 text-gray-100 rounded-full px-2 flex justify-center items-center text-xs text-blue-gray-900 font-medium">
                <span>بیشتر</span>
                <FaArrowLeft />
              </td>

              <td className="py-2 flex justify-center items-center cursor-pointer">
                <FaTrash className='me-2 text-rose-600 hover:text-mgreen' />
                <FaEdit className='text-amber-500 hover:text-mgreen' />
              </td>

            </tr>

            <tr className='bg-lime-200 text-gray-700 border-b-8 border-white flex justify-between items-center container'>

              <td className="py-2">
                <p className="text-xs text-blue-gray-900 font-medium">1</p>
              </td>

              <td className="py-2 w-14">
                <p className="line-clamp-1 text-xs text-blue-gray-900 font-medium">بشقاب یکبار مصرف</p>
              </td>


              <td className="py-2">
                <img src="/assets/images/slide (5).png" alt="" className="object-center rounded-full w-12 h-12 border-2 border-mgreen object-contain p-1" />
              </td>

              <td className="py-2">
                <p className="text-xs text-blue-gray-900 font-medium">250,000</p>
              </td>

              <td className="py-2 w-10">
                <p className="text-xs line-clamp-1 text-blue-gray-900 font-medium">234-G</p>
              </td>


              <td className="py-2 bg-teal-500 text-gray-100 px-2 rounded-full">
                <p className="text-xs text-blue-gray-900 font-medium">هست</p>
              </td>

              <td className="py-2">
                <p className="text-xs text-blue-gray-900 font-medium">یکبارمصرف</p>
              </td>

              <td className="py-2 -me-3 hover:bg-violet-500 cursor-pointer
         bg-orange-400 text-gray-100 rounded-full px-2 flex justify-center items-center text-xs text-blue-gray-900 font-medium">
                <span>بیشتر</span>
                <FaArrowLeft />
              </td>

              <td className="py-2 flex justify-center items-center cursor-pointer">
                <FaTrash className='me-2 text-rose-600 hover:text-mgreen' />
                <FaEdit className='text-amber-500 hover:text-mgreen' />
              </td>

            </tr>

            <tr className='bg-sky-200 text-gray-700 border-b-8 border-white flex justify-between items-center container'>

              <td className="py-2">
                <p className="text-xs text-blue-gray-900 font-medium">1</p>
              </td>

              <td className="py-2 w-14">
                <p className="line-clamp-1 text-xs text-blue-gray-900 font-medium">بشقاب یکبار مصرف</p>
              </td>


              <td className="py-2">
                <img src="/assets/images/slide (5).png" alt="" className="object-center rounded-full w-12 h-12 border-2 border-mgreen object-contain p-1" />
              </td>

              <td className="py-2">
                <p className="text-xs text-blue-gray-900 font-medium">250,000</p>
              </td>

              <td className="py-2 w-10">
                <p className="text-xs line-clamp-1 text-blue-gray-900 font-medium">234-G</p>
              </td>


              <td className="py-2 bg-rose-500 text-gray-100 px-2 rounded-full">
                <p className="text-xs text-blue-gray-900 font-medium">نیست</p>
              </td>

              <td className="py-2">
                <p className="text-xs text-blue-gray-900 font-medium">یکبارمصرف</p>
              </td>

              <td className="py-2 -me-3 hover:bg-violet-500 cursor-pointer
         bg-orange-400 text-gray-100 rounded-full px-2 flex justify-center items-center text-xs text-blue-gray-900 font-medium">
                <span>بیشتر</span>
                <FaArrowLeft />
              </td>

              <td className="py-2 flex justify-center items-center cursor-pointer">
                <FaTrash className='me-2 text-rose-600 hover:text-mgreen' />
                <FaEdit className='text-amber-500 hover:text-mgreen' />
              </td>

            </tr>

          </tbody>

        </table>
      </div>
    </div>

    <div className="flex  mt-3 justify-center space-x-2 items-center text-mgreen">
      <button type="button" className="flex items-center justify-center me-2 w-8 h-8 py-0 border rounded-md shadow-sm shadow-mgreen">
        <FaArrowRight />
      </button>
      <button type="button" className="flex items-center justify-center w-8 h-8 text-sm border rounded shadow-sm shadow-mgreen">1</button>
      <button type="button" className="flex items-center justify-center w-8 h-8 text-sm border rounded shadow-sm shadow-mgreen">2</button>
      <button type="button" className="flex items-center justify-center w-8 h-8 text-sm border rounded shadow-sm shadow-mgreen">3</button>
      <button type="button" className="flex items-center justify-center w-8 h-8 text-sm border rounded shadow-sm shadow-mgreen">4</button>
      <button type="button" className="flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-sm shadow-mgreen">
        <FaArrowLeft />
      </button>
    </div>

    
  </>
  )
}

export default ProductTable
