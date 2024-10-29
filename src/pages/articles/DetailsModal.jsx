import React from 'react'
import ModalContainer from '../../components/ModalContainer';
import { convertDateToJalali } from '../../utils/convertDate';
import { apiPath } from '../../services/httpService';

const DetailsModal = ({ setDetailsModal, reInitialValues, detailsModal }) => {

  const DetailItem = ({ label, value }) => (
    <p className='py-2'>
      <strong className='text-violet-500'>{label} : </strong>
      <span className='text-gray-600'>{value}</span>
    </p>
  );

  return (
    <ModalContainer
      open={detailsModal}
      onClose={() => setDetailsModal(false)}
      fullscreen={true}
      title={'جزئیات کلی مقاله'}
    >
      {reInitialValues && (
        <div className='flex flex-col container'>
          <div className='border-2 rounded-md p-5 shadow-lg bg-white'>
            <DetailItem label="شناسه (ID) مقاله" value={reInitialValues._id} />
            <DetailItem label="نام مقاله" value={reInitialValues.title} />

            {/* Scrollable Content Area with Enhanced Styles */}
            <div className='mb-5 p-4 text-sm md:text-base overflow-y-auto max-h-48 border-2 rounded-md bg-gray-50 shadow-inner'>
              <strong className='text-violet-700 text-lg'>محتوا:</strong>
              <p className='text-gray-700 mt-2'>{reInitialValues.content}</p>
            </div>
            <div className='text-sm md:text-base'>
              <DetailItem label="خلاصه" value={reInitialValues.excerpt} />
            </div>
          </div>

          <div className='container flex flex-col md:flex-row justify-center items-start
         md:justify-around md:items-center mt-5 border-2 rounded-md p-5 bg-white shadow-lg'>
            <div>
              <DetailItem label="دسته بندی" value={reInitialValues.categories} />
              <DetailItem label="زمان مطالعه" value={reInitialValues.readTime} />
            </div>
            <div>
              <DetailItem label="تعداد بازدید" value={reInitialValues.views} />
              <DetailItem label="تعداد لایک" value={reInitialValues.likes} />
            </div>
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

          <div className='container grid grid-cols-3 gap-4 mt-5 border-2 rounded-md 
        bg-white p-5 shadow-lg'>
            <div className='col-span-3 md:col-span-2'>
              <DetailItem label="نام نویسنده" value={reInitialValues.authorName} />
              <DetailItem label="بیوگرافی نویسنده" value={reInitialValues.authorBio} />
            </div>
            <div className='py-5 col-span-3 md:col-span-1 flex justify-center items-center'>
              {reInitialValues.authorProfileImage && (
                <img
                  src={`${apiPath}/${reInitialValues.authorProfileImage}`}
                  alt="Author Profile"
                  className="w-32 h-32 rounded-full border-2 border-mgreen shadow-lg"
                />
              )}
            </div>
          </div>

          {reInitialValues.imageUrl && (
            <div className='mt-5 pt-5 flex flex-col md:flex-row justify-between items-center'>
              <img
                src={`${apiPath}/${reInitialValues.imageUrl}`}
                alt="Article"
                className="mb-3 w-full h-auto md:w-1/4 border-2 rounded-lg shadow-lg"
              />
            </div>
          )}

          <div className='w-full my-10'>
            <button onClick={() => setDetailsModal(false)}
              className='w-full bg-rose-500 text-white py-2 rounded-md hover:bg-rose-600 transition duration-200'>خروج</button>
          </div>
        </div>
      )}
    </ModalContainer>
  )
}

export default DetailsModal
