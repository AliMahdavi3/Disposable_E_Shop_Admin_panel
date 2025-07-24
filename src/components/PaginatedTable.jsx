import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight, FaSearch } from 'react-icons/fa'
import SpinnerLoad from './SpinnerLoad'


const PaginatedTable = ({ data, dataInfo, additionalField, children, loading, numOfPage, searchParams }) => {
  const [initData, setInitData] = useState(data);
  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [searchChar, setSearchChar] = useState("");

  const pageRange = 2;

  useEffect(() => {
    let pCount = Math.ceil(initData.length / numOfPage);
    setPageCount(pCount);
    let pArr = [];
    for (let i = 1; i <= pCount; i++) pArr = [...pArr, i];
    setPages(pArr);
  }, [initData, numOfPage]);

  useEffect(() => {
    let start = (currentPage * numOfPage) - numOfPage;
    let end = (currentPage * numOfPage);
    setTableData(initData.slice(start, end));
  }, [currentPage, initData, numOfPage]);

  useEffect(() => {
    setInitData(data.filter(d => d[searchParams.searchFiled].includes(searchChar)));
    setCurrentPage(1);
  }, [searchChar, data, searchParams]);


  return (
    <>
      <div className='mt-3 md:mt-0 flex justify-between items-center'>
        <div className="relative text-gray-600 w-full">
          <input
            onChange={(e) => setSearchChar(e.target.value)}
            type="text"
            name="search"
            placeholder={searchParams.placeholder}
            className="bg-white dark:bg-darkModeBgColor dark:text-darkModeTextColor shadow-lg h-10 px-2 md:px-5 pr-8 md:pr-10 rounded-full text-sm focus:outline-none" />
          <FaSearch className='absolute right-0 top-0 mt-3 mr-2 md:mr-4 h-4 w-4 fill-current text-gray-400' />
        </div>
        {children}
      </div>

      <div className={`my-5 flex justify-center items-center w-full
        ${tableData.length ? 'shadow-gray-300 dark:shadow-gray-800 shadow-lg rounded-b-2xl' : ''}`}>
        <div className='table_content overflow-x-scroll md:overflow-hidden rounded-b-2xl'>
          {
            loading ? (
              <SpinnerLoad />
            ) : tableData.length ? (
              <table className="flex flex-col w-[1400px] md:w-full">
                <thead className='bg-mgreen dark:bg-darkModeBgColor text-white border-b-8 border-white
                 dark:border-gray-500 rounded-t-md'>
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
                    tableData?.map((d, index) => {
                      const actualIndex = (currentPage - 1) * numOfPage + index + 1;
                      return (
                        <tr key={index} className='bg-lime-200 dark:bg-slate-300 text-gray-700 
                          border-b-8 border-white dark:border-gray-500 flex justify-between items-center container'>
                          <td className="py-1 -ms-1">
                            <p className="w-11 truncate text-xs text-blue-gray-900 font-medium">{actualIndex}</p>
                          </td>
                          {
                            dataInfo.slice(1).map((i) => (
                              <td key={i.field + '_' + d._id} className="py-1 -ms-1">
                                <p className="w-11 truncate text-xs text-blue-gray-900 font-medium">{d[i.field]}</p>
                              </td>
                            ))
                          }
                          {
                            additionalField.map((field, index) => (
                              <td key={index} className="py-1 flex justify-center items-center cursor-pointer">
                                {field.elements(d)}
                              </td>
                            ))
                          }
                        </tr>
                      )
                    })
                  }
                </tbody>

              </table>
            ) : (
              <h5 className='mt-5 md:mt-24 text-amber-600 dark:text-darkModeTextColor
               text-center text-xl'>هیچ رکوردی یافت نشد..!</h5>
            )
          }
        </div>
      </div>

      {
        tableData.length ? (
          <div className="flex  mt-3 justify-center space-x-2 items-center text-mgreen">

            <button type="button" onClick={() => setCurrentPage(currentPage - 1)}
              className={`flex dark:bg-slate-300 cursor-pointer items-center justify-center me-2 w-8 h-8 py-0 border 
                  rounded-md shadow-sm shadow-mgreen ${currentPage === 1 ? "disabled" : ""}`}>

              <FaArrowRight />
            </button>

            {
              currentPage > pageRange ? (
                <button type="button" onClick={() => setCurrentPage(1)}
                  className="flex dark:bg-slate-300 cursor-pointer items-center justify-center me-2 w-8 h-8
                  py-0 border rounded-md shadow-sm shadow-mgreen">
                  1
                </button>
              ) : null
            }

            {
              currentPage > pageRange + 1 ? (
                <span className="text-gray-400">...</span>
              ) : null
            }

            {
              pages.map((page, index) => {
                return page < currentPage + pageRange && page > currentPage - pageRange ? (
                  <button key={index} onClick={() => setCurrentPage(page)} type="button"
                    className={`flex dark:bg-slate-300 items-center justify-center w-8 h-8 
                    text-sm border rounded shadow-sm shadow-mgreen 
                    ${currentPage === page ? 'bg-violet-200' : ''}`}>
                    <span>{page}</span>
                  </button>
                ) : null
              })
            }

            {
              currentPage < pageCount - pageRange - 1 ? (
                <span className="text-gray-400">...</span>
              ) : null
            }

            {
              currentPage <= pageCount - pageRange ? (
                <button type="button" onClick={() => setCurrentPage(pageCount)}
                  className="flex dark:bg-slate-300 cursor-pointer items-center justify-center me-2 w-8 h-8
                  py-0 border rounded-md shadow-sm shadow-mgreen">
                  {pageCount}
                </button>
              ) : null
            }

            <button type="button" onClick={() => setCurrentPage(currentPage + 1)}
              className={`flex dark:bg-slate-300 cursor-pointer items-center justify-center w-8 h-8 py-0 border
                rounded-md shadow-sm shadow-mgreen ${currentPage === pageCount ? "disabled" : ""}`}>

              <FaArrowLeft />
            </button>
          </div>
        ) : null
      }
    </>
  )
}

export default PaginatedTable
