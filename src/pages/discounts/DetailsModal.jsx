import React from 'react'
import ModalContainer from '../../components/ModalContainer';
import { convertDateToJalali } from '../../utils/convertDate';

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
      title={'جزئیات کلی محصول'}
    >
      {reInitialValues && (
        <div className='flex flex-col container'>

          <div className='border-2 rounded-md p-5 shadow-lg bg-white'>
            <DetailItem label="شناسه (ID) محصول" value={reInitialValues._id} />
            <DetailItem label="کد تخفیف" value={reInitialValues.code} />
            <div>
              <DetailItem
                label="وضعیت"
                value={reInitialValues.percentage ? 'فعال' : 'غیرفعال'}
              />
            </div>
            <DetailItem label="تاریخ انقظا" value={reInitialValues.expiresAt} />

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

export default DetailsModal
