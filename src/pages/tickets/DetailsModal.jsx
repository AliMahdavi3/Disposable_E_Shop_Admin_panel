import React from 'react'
import ModalContainer from '../../components/ModalContainer';
import { convertDateToJalali } from '../../utils/convertDate';
import { apiPath } from '../../services/httpService';

const DetailsModal = ({ detailsModal, setDetailsModal, reInitialValues }) => {

  const DetailItem = ({ label, value }) => (
    <p className='py-3'>
      <strong className='text-violet-500'>{label} : </strong>
      <span className='text-gray-600'>{value}</span>
    </p>
  );

  return (
    <ModalContainer
      open={detailsModal}
      onClose={() => setDetailsModal(false)}
      fullscreen={true}
      title={'اطلاعات کلی تیکت'}
    >
      {reInitialValues && (
        <div className='flex flex-col container'>

          <div className='border-2 rounded-md p-5 shadow-lg bg-white'>
            <DetailItem label="شناسه (ID) محصول" value={reInitialValues._id} />
            <DetailItem label="نام کاربر" value={reInitialValues.name} />
            <DetailItem label="ایمیل" value={reInitialValues.email} />
            <DetailItem label="تلفن" value={reInitialValues.phone} />
            <div className='mb-5 p-4 text-sm md:text-base h-fit 
              border-2 rounded-md bg-gray-50 shadow-inner'>
              <strong className='text-violet-700 text-lg'>موضوع:</strong>
              <p className='text-gray-700 mt-2'>{reInitialValues.subject}</p>
            </div>
            <div className='mb-5 p-4 text-sm md:text-base overflow-y-auto max-h-48 
              border-2 rounded-md bg-gray-50 shadow-inner'>
              <strong className='text-violet-700 text-lg'>توضیحات:</strong>
              <p className='text-gray-700 mt-2'>{reInitialValues.description}</p>
            </div>
          </div>

          <div className='container flex flex-col md:flex-row justify-center items-start md:justify-around
            md:items-center mt-5 border-2 rounded-md p-5 bg-white shadow-lg text-xs md:text-base'>
            <DetailItem label="وضعیت" value={reInitialValues.status} />
          </div>

          <div className='container flex flex-col md:flex-row justify-center items-start md:justify-around 
            md:items-center mt-5 border-2 rounded-md text-xs md:text-base p-5 bg-white shadow-lg'>
            <div>
              <DetailItem
                label="تاریخ ساخت"
                value={convertDateToJalali(reInitialValues.createdAt)}
              />
              <DetailItem
                label="تاریخ آپدیت"
                value={convertDateToJalali(reInitialValues.updatedAt)}
              />
            </div>
          </div>

          {reInitialValues.imageUrl && (
            <div className='mt-5 pt-5 flex flex-col md:flex-row justify-between items-center'>
              {reInitialValues.imageUrl.map((url, index) => (
                <img
                  key={index}
                  src={`${apiPath}/${url}`}
                  alt={`Ticket ${index + 1}`}
                  className="mb-3 w-[100%] h-[100%] md:w-[15%] md:h-[15%] md:mb-0 border-2
                  shadow-lg rounded-lg"
                />
              ))}
            </div>
          )}

          <div className='w-full my-10'>
            <button onClick={() => setDetailsModal(false)} className='w-full bg-rose-500
            text-white py-2 rounded-md'>خروج</button>
          </div>
        </div>
      )}


    </ModalContainer>
  )
}

export default DetailsModal
