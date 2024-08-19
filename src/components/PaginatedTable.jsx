import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const PaginatedTable = ({ data, dataInfo, additionalField }) => {
  return (
    <>
      <div className='flex justify-center items-center w-full'>
        <div className='table_content overflow-x-scroll md:overflow-hidden'>
          <table className="mt-5 flex flex-col w-[1400px] md:w-full">
            <thead className='bg-mgreen text-white border-b-8 border-white rounded-t-md'>
              <tr className='py-5 container flex justify-between items-center'>
                {
                  dataInfo.map((f) => (
                    <th key={f.field} className="text-center flex justify-center items-center">
                      <p className="line-clamp-1 text-xs font-medium">{f.title}</p>
                    </th>
                  ))
                }
                {
                  additionalField.map((field, index) => (
                    <th key={index} className="text-center flex justify-center items-center">
                      <p className="text-xs font-medium">
                        {field.title}
                      </p>
                    </th>
                  ))
                }

              </tr>
            </thead>

            <tbody>
              {
                data.map((d, index) => (
                  <tr key={index} className='bg-lime-200 text-gray-700 border-b-8 border-white flex justify-between items-center container'>
                    {
                      dataInfo.map((i) => (
                        <td key={i.field + '_' + d._id} className="py-2 ms-1">
                          <p className="text-xs text-blue-gray-900 font-medium">{d[i.field]}</p>
                        </td>
                      ))
                    }
                    {
                      additionalField.map((field, index) => (
                        <td key={index} className="py-2 flex justify-center items-center cursor-pointer">
                          {field.elements(d)}
                        </td>
                      ))
                    }
                  </tr>
                ))
              }
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

export default PaginatedTable
