import React from 'react'
import ModalContainer from '../../components/ModalContainer';
import { convertDateToJalali } from '../../utils/convertDate';

const DetailsModal = ({ reInitialValues, setDetailsModal, detailsModal }) => {

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
            title={'اطلاعات کلی کاربر'}
        >
            {reInitialValues && (
                <div className='flex flex-col container'>
                    <div className='border-2 rounded-md p-5 shadow-lg bg-white'>
                        <DetailItem label="شناسه (ID) کاربر" value={reInitialValues._id} />
                        <DetailItem label="نام کاربر" value={reInitialValues.name} />
                        <DetailItem label="ایمیل کاربر" value={reInitialValues.email} />
                        <DetailItem label="تلفن کاربر" value={reInitialValues.phone} />
                        <div className='mb-5 p-4 text-sm md:text-base overflow-y-auto
                            max-h-48 border-2 rounded-md bg-gray-50 shadow-inner'>
                            <strong className='text-violet-700 text-lg'>آدرس کاربر:</strong>
                            <p className='text-gray-700 mt-2'>{reInitialValues.address}</p>
                        </div>
                    </div>
                    <div className='container flex flex-col md:flex-row justify-center
                        items-start md:justify-around md:items-center mt-5 border-2
                        rounded-md p-5 bg-white shadow-lg text-xs md:text-base'>
                        <div>
                            <DetailItem label="وظیفه" value={reInitialValues.role} />
                            <DetailItem label="تاریخ تولد" value={reInitialValues.birthDate} />
                            <DetailItem label="وضعیت کاربر" value={reInitialValues.status} />
                        </div>
                        <div>
                            <DetailItem label="شهر کاربر" value={reInitialValues.city} />
                            <DetailItem label="کد پستی کاربر" value={reInitialValues.zipCode} />
                        </div>
                        <div>
                            <DetailItem
                                label="تاریخ ثبت نام"
                                value={convertDateToJalali(reInitialValues.createdAt)}
                            />
                            <DetailItem
                                label="تاریخ آپدیت اطلاعات"
                                value={convertDateToJalali(reInitialValues.updatedAt)}
                            />
                        </div>
                    </div>
                    <div className='w-full my-10'>
                        <button
                            onClick={() => setDetailsModal(false)}
                            className='w-full bg-rose-500
                            text-white py-2 rounded-md'>
                            خروج
                        </button>
                    </div>
                </div>
            )}
        </ModalContainer>
    )
}

export default DetailsModal
