import React from 'react'
import ModalContainer from '../../components/ModalContainer'
import { convertDateToJalali } from '../../utils/convertDate';
import { apiPath } from '../../services/httpService';

const DetailsModal = ({ reInitialValues, setInfoModal, infoModal }) => {

    const DetailItem = ({ label, value }) => (
        <p className='py-3'>
            <strong className='text-violet-500'>{label} :</strong>
            <span className='text-gray-600'>{value}</span>
        </p>
    );

    return (
        <ModalContainer
            open={infoModal}
            onClose={() => setInfoModal(false)}
            fullscreen={true}
            title={'جزئیات کلی محصول'}
        >
            {reInitialValues && (
                <div className='flex flex-col container'>
                    <div className='border-2 rounded-md container'>
                        <DetailItem label="شناسه (ID) محصول" value={reInitialValues._id} />
                        <DetailItem label="نام محصول" value={reInitialValues.title} />
                        <p className='pb-3 mb-5 text-xs md:text-base hide_scrollbar line-clamp-6 overflow-hidden overflow-y-auto'>
                            <strong className='text-violet-500'>محتوا :</strong>
                            <span className='text-gray-600'>{reInitialValues.content}</span>
                        </p>
                    </div>

                    <div className='container flex flex-col md:flex-row justify-center items-start md:justify-around md:items-center mt-5 border-2 rounded-md text-xs md:text-base'>
                        <div>
                            <DetailItem label="کد محصول" value={reInitialValues.productCode} />
                            <DetailItem label="قیمت به تومان" value={reInitialValues.price} />
                        </div>
                        <div>
                            <DetailItem label="دسته بندی" value={reInitialValues.category} />
                            <DetailItem label="رنگ" value={reInitialValues.color} />
                        </div>
                        <div>
                            <DetailItem label="اندازه" value={reInitialValues.size} />
                            <DetailItem label="وزن" value={reInitialValues.weight} />
                        </div>
                        <div>
                            <DetailItem
                                label="موجودی"
                                value={reInitialValues.available ? 'موجود' : 'ناموجود'}
                            />
                            <DetailItem label="تگ" value={reInitialValues.tag} />
                        </div>
                    </div>

                    <div className='container flex flex-col md:flex-row justify-center items-start md:justify-around md:items-center mt-5 border-2 rounded-md text-xs md:text-base'>
                        <div>
                            <DetailItem label="تعداد بازدید" value={reInitialValues.views} />
                            <DetailItem label="تعداد فروش" value={reInitialValues.salesCount} />
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

                    {reInitialValues.imageUrl && (
                        <div className='mt-5 pt-5 flex flex-col md:flex-row justify-between items-center'>
                            {reInitialValues.imageUrl.map((url, index) => (
                                <img
                                    key={index}
                                    src={`${apiPath}/${url}`}
                                    alt={`Product ${index + 1}`}
                                    className="mb-3 w-[100%] h-[100%] md:w-[15%] md:h-[15%] md:mb-0 border-2 rounded-lg"
                                />
                            ))}
                        </div>
                    )}

                    <div className='w-full my-10'>
                        <button onClick={() => setInfoModal(false)} className='w-full bg-rose-500 text-white py-2 rounded-md'>خروج</button>
                    </div>
                </div>
            )}
        </ModalContainer>

    )
}

export default DetailsModal
