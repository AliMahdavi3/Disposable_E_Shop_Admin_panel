import React, { useEffect, useState } from 'react'
import PaginatedTable from '../../components/PaginatedTable'
import MoreInfoModal from './MoreInfoModal';
import { getProductsService } from '../../services/product';
import AvailableProduct from './productAddition/AvailableProduct';
import ProductImages from './productAddition/ProductImages';
import ModalButton from './productAddition/ModalButton';
import Actions from './productAddition/Actions';


const ProductTable = () => {

  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const handleGetProducts = async () => {
    try {
      const res = await getProductsService();
      if (res.status === 200) {
        setData(res.data.products);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    handleGetProducts();
  }, [])


  const dataInfo = [
    { field: 'id', title: '#' },
    { field: 'title', title: 'نام محصول' },
    { field: 'productCode', title: 'کد محصول' },
    { field: 'price', title: 'قیمت' },
    { field: 'category', title: 'دسته بندی' },
  ]


  const additionalField = [
    {
      title: 'موجودی',
      elements: (rowData) => <AvailableProduct rowData={rowData} />,
    },
    {
      title: 'تصاویر',
      elements: (rowData) => <ProductImages rowData={rowData} />,
    },
    {
      title: 'جزئیات',
      elements: (rowData) => <ModalButton
        setSelectedData={setSelectedData} setOpen={setOpen} rowData={rowData} />,
    },
    {
      title: 'عملیات',
      elements: (rowData) => <Actions rowData={rowData} />
    },
  ]

  return (
    <>
      {
        data.length ? (
          <>
            <PaginatedTable
              data={data}
              dataInfo={dataInfo}
              additionalField={additionalField}
            >
            </PaginatedTable>
            <MoreInfoModal
              selectedData={selectedData}
              setSelectedData={setSelectedData}
              setOpen={setOpen}
              open={open}
            />
          </>
        ) : (
          <h5 className='mt-5 md:mt-24 text-amber-600 text-center text-xl'>هیچ محصولی یافت نشد..!</h5>
        )
      }
    </>
  )
}

export default ProductTable
