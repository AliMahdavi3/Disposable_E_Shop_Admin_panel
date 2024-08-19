import React, { useState } from 'react'
import PaginatedTable from '../../components/PaginatedTable'
import MoreInfoModal from './MoreInfoModal';
import { FaArrowLeft, FaEdit, FaTrash } from 'react-icons/fa';

const ProductTable = () => {

  const [open, setOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const data = [
    {
      id: '1',
      title: 'produtc_1',
      content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
      imageUrl: {
        image1: '/assets/images/slide (1).png',
        image2: '/assets/images/slide (2).png',
        image3: '/assets/images/slide (3).png',
        image4: '/assets/images/slide (4).png',
      },
      price: 230000,
      productCode: 'GHT-340',
      category: 'یکبارمصرف',
      color: 'آبی',
      size: '3*4',
      weight: '5kg',
      available: true,
      tag: 'بشقاب',
    },
    {
      id: '2',
      title: 'produtc_2',
      content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
      imageUrl: {
        image1: '/assets/images/slide (2).png',
        image2: '/assets/images/slide (1).png',
        image3: '/assets/images/slide (3).png',
        image4: '/assets/images/slide (4).png',
      },
      price: 430000,
      productCode: 'GHT-440',
      category: 'یکبارمصرف',
      color: 'آبی',
      size: '4*4',
      weight: '5kg',
      available: false,
      tag: 'بشقاب',
    },
    {
      id: '3',
      title: 'produtc_3',
      content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
      imageUrl: {
        image1: '/assets/images/slide (3).png',
        image2: '/assets/images/slide (2).png',
        image3: '/assets/images/slide (1).png',
        image4: '/assets/images/slide (4).png',
      },
      price: 530000,
      productCode: 'GHT-540',
      category: 'یکبارمصرف',
      color: 'آبی',
      size: '5*4',
      weight: '5kg',
      available: true,
      tag: 'بشقاب',
    },
  ]

  const dataInfo = [
    { field: 'id', title: '#' },
    { field: 'title', title: 'نام محصول' },
    { field: 'productCode', title: 'کد محصول' },
    { field: 'price', title: 'قیمت' },
    { field: 'category', title: 'دسته بندی' },
  ]

  const additionalElements = (itemId) => {
    console.log(itemId);
    return (
      <>
        <FaTrash className='me-2 text-rose-600 hover:text-mgreen' />
        <FaEdit className='text-amber-500 hover:text-mgreen' />
      </>
    )
  }

  const additionalField = [
    {
      title: 'موجودی',
      elements: (rowData) => (
        <p className={`text-xs font-medium text-white py-2 px-3 rounded-full ${rowData.available ? 'bg-teal-600' : 'bg-rose-500'}`}>
          {rowData.available === true ? 'موجود' : 'ناموجود'}
        </p>
      ),
    },
    {
      title: 'تصاویر',
      elements: (rowData) => (
        rowData.imageUrl && rowData.imageUrl.image1 ? (
          <div className='py-2 -me-5'>
            <img src={rowData.imageUrl.image1} alt="image1"
              className="object-center rounded-full w-12 h-12 border-2
            border-mgreen object-contain" />
          </div>
        ) : null
      )
    },
    {
      title: 'جزئیات',
      elements: (rowData) => (
        <button
          onClick={() => {
            setSelectedData(rowData);
            setOpen(true);
          }}
          className='py-2 -me-3 hover:bg-violet-500 cursor-pointer bg-orange-400 text-gray-100 rounded-full px-2 flex justify-center items-center text-xs text-blue-gray-900 font-medium'
        >
          <span>بیشتر</span>
          <FaArrowLeft />
        </button>
      ),
    },
    {
      title: 'عملیات',
      elements: (itemId) => additionalElements(itemId)
    },
  ]

  return (
    <>
      <PaginatedTable
        data={data}
        dataInfo={dataInfo}
        additionalField={additionalField}
      />
      <MoreInfoModal
        selectedData={selectedData}
        setSelectedData={setSelectedData}
        setOpen={setOpen}
        open={open}
      />
    </>
  )
}

export default ProductTable
