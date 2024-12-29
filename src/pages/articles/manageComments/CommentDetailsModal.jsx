import React from 'react'
import ModalContainer from '../../../components/ModalContainer';
import { convertDateToJalali } from '../../../utils/convertDate';

const CommentDetailsModal = ({detailsModal, reInitialValues, setDetailsModal}) => {

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
      title={'جزئیات کلی نظر کاربر'}
    >
      {reInitialValues && (
        <div className='flex flex-col container'>

          <div className='border-2 rounded-md p-5 shadow-lg bg-white'>
            <DetailItem label="شناسه (ID) نظر" value={reInitialValues._id} />
            <DetailItem label="شناسه (ID) مقاله" value={reInitialValues.article} />
            <DetailItem label="امتیاز" value={reInitialValues.rating} />
            <DetailItem label="نام کاربر" value={reInitialValues.userName} />
            <div className='mb-5 p-4 text-sm md:text-base overflow-y-auto max-h-48 border-2 rounded-md
                bg-gray-50 shadow-inner'>
              <strong className='text-violet-700 text-lg'>محتوا:</strong>
              <p className='text-gray-700 mt-2'>{reInitialValues.content}</p>
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

          <div className='w-full my-10'>
            <button onClick={() => setDetailsModal(false)} className='w-full bg-rose-500
                text-white py-2 rounded-md'>خروج</button>
          </div>
        </div>
      )}


    </ModalContainer>
  )
}

export default CommentDetailsModal
