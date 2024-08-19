import React from 'react'
import ModalContainer from '../../components/ModalContainer'

const MoreInfoModal = ({ selectedData, setOpen, open }) => {
    return (
        <ModalContainer open={open} onClose={() => setOpen(false)} fullscreen={true}>
            {selectedData && (
                <div className='flex flex-col container'>
                    <h1 className='text-center md:text-2xl font-semibold py-5 text-gray-600'>اطلاعات محصول</h1>
                    <div className='border-2 rounded-md container'>
                        <p className='py-3 text-xs md:text-base'>
                            <strong className='text-mgreen'>نام محصول :</strong> <span className='text-gray-600'>{selectedData.title}</span>
                        </p>
                        <p className='pb-3 text-xs md:text-base'>
                            <strong className='text-mgreen'>محتوا :</strong> <span className='text-gray-600'>{selectedData.content}</span>
                        </p>
                    </div>

                    <div className='container flex flex-col md:flex-row justify-center items-start
                     md:justify-around md:items-center mt-5 border-2 rounded-md text-xs md:text-base'>
                        <div>
                            <p className='py-3'><strong className='text-violet-500'>کد محصول :</strong> <span className='text-gray-600'>{selectedData.productCode}</span></p>
                            <p className='pb-3'><strong className='text-violet-500'>قیمت :</strong> <span className='text-gray-600'>{selectedData.price}</span></p>
                        </div>
                        <div>
                            <p className='py-3'><strong className='text-violet-500'>دسته بندی :</strong> <span className='text-gray-600'>{selectedData.category}</span></p>
                            <p className='pb-3'><strong className='text-violet-500'>رنگ :</strong> <span className='text-gray-600'>{selectedData.color}</span></p>
                        </div>
                        <div>
                            <p className='py-3'><strong className='text-violet-500'>اندازه :</strong> <span className='text-gray-600'>{selectedData.size}</span></p>
                            <p className='pb-3'><strong className='text-violet-500'>وزن :</strong> <span className='text-gray-600'>{selectedData.weight}</span></p>
                        </div>
                        <div>
                            <p className='py-3'><strong className='text-violet-500'>موجودی :</strong> <span className='text-gray-600'>{selectedData.available ? 'موجود' : 'ناموجود'}</span></p>
                            <p className='pb-3'><strong className='text-violet-500'>تگ :</strong> <span className='text-gray-600'>{selectedData.tag}</span></p>
                        </div>
                    </div>

                    {selectedData.imageUrl && (
                        <div className='mt-5 pt-5 flex flex-col md:flex-row justify-between items-center'>
                            <img src={selectedData.imageUrl.image1} alt="image1"
                                className="mb-3 w-[100%] h-[100%] md:w-[15%] md:h-[15%] md:mb-0 border-2 rounded-lg" />
                            <img src={selectedData.imageUrl.image2} alt="image2"
                                className="mb-3 w-[100%] h-[100%] md:w-[15%] md:h-[15%] md:mb-0 border-2 rounded-lg" />
                            <img src={selectedData.imageUrl.image3} alt="image3"
                                className="mb-3 w-[100%] h-[100%] md:w-[15%] md:h-[15%] md:mb-0 border-2 rounded-lg" />
                            <img src={selectedData.imageUrl.image4} alt="image4"
                                className="mb-3 w-[100%] h-[100%] md:w-[15%] md:h-[15%] md:mb-0 border-2 rounded-lg" />
                        </div>
                    )}
                </div>
            )}
        </ModalContainer>
    )
}

export default MoreInfoModal
