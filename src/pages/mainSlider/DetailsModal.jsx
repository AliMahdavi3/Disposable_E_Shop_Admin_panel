import React from 'react'
import ModalContainer from '../../components/ModalContainer';
import { convertDateToJalali } from '../../utils/convertDate';
import { apiPath } from '../../services/httpService';

const DetailsModal = ({ reInitialValues, setDetailsModal, detailsModal }) => {


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
            title={'جزئیات کلی اسلاید'}
        >
            {reInitialValues && (
                <div className='flex flex-col container'>

                    <div className='border-2 rounded-md p-5 shadow-lg bg-white'>
                        <DetailItem label="شناسه (ID) اسلاید" value={reInitialValues._id} />
                        <DetailItem label="عنوان اسلاید" value={reInitialValues.title} />

                        {/* Scrollable Content Area with Enhanced Styles */}
                        <div className='mb-5 p-4 text-sm md:text-base overflow-y-auto max-h-48 border-2 rounded-md bg-gray-50 shadow-inner'>
                            <strong className='text-violet-700 text-lg'>محتوا:</strong>
                            <p className='text-gray-700 mt-2'>{reInitialValues.content}</p>
                        </div>
                        <div className='text-sm md:text-base'>
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
                            <img
                                src={`${apiPath}/${reInitialValues.imageUrl}`}
                                alt="Slide"
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
