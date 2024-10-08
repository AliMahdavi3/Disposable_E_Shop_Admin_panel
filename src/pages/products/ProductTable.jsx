import React, { useEffect, useState } from 'react'
import PaginatedTable from '../../components/PaginatedTable'
import { deleteProductService, getProductsService } from '../../services/product';
import AvailableProduct from './productAddition/AvailableProduct';
import ProductImages from './productAddition/ProductImages';
import Actions from './productAddition/Actions';
import AddProduct from './AddProduct';
import { Alert, Confirm } from '../../utils/alert';
import DetailsModal from './DetailsModal';
import DetailsModalButton from './productAddition/DetailsModalButton';


const ProductTable = () => {
  const [data, setData] = useState([]);
  const [reInitialValues, setReInitialValues] = useState(null);
  const [editId, setEditId] = useState(null);
  const [addProductModal, setAddProductModal] = useState(false);
  const [infoModal, setInfoModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [forceRender, setForceRender] = useState(0);

  const handleGetProducts = async () => {
    setLoading(true);
    try {
      const res = await getProductsService();
      if (res.status === 200) {
        setData(res.data.products);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }

  const handleDeleteProduct = async (rowData) => {
    if (await Confirm('حذف دسته بندی!', `آیا از حذف ${rowData.title} اطمینان دارید؟`)) {
      try {
        const res = await deleteProductService(rowData._id);
        console.log(res);
        if (res.status === 200) {
          setData(data.filter(d => d._id !== rowData._id));
          Alert('محصول حذف شد', 'عملیات موفقیت آمیز بود!', 'success');
        }
      } catch (error) {
        console.log(error);
        Alert('خطا در حذف محصول', error.message, 'error');
      }
    }
  }

  useEffect(() => {
    handleGetProducts();
  }, [forceRender])


  const dataInfo = [
    { field: 'index', title: '#' },
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
      elements: (rowData) => <DetailsModalButton
        setReInitialValues={setReInitialValues}
        setInfoModal={setInfoModal}
        rowData={rowData} />
    },
    {
      title: 'عملیات',
      elements: (rowData) => <Actions
        handleDeleteProduct={handleDeleteProduct}
        setEditId={setEditId}
        setAddProductModal={setAddProductModal}
        rowData={rowData} />
    },
  ]

  const searchParams = {
    placeholder: 'جستجو نام محصول',
    searchFiled: 'title',
  }


  return (
    <> 
      <PaginatedTable
        data={data}
        dataInfo={dataInfo}
        additionalField={additionalField}
        loading={loading}
        numOfPage={3}
        searchParams={searchParams}
      >
        <AddProduct
          setForceRender={setForceRender}
          setAddProductModal={setAddProductModal}
          addProductModal={addProductModal}
          reInitialValues={reInitialValues}
          setReInitialValues={setReInitialValues}
          editId={editId}
          setEditId={setEditId}
        />
      </PaginatedTable>

      <DetailsModal
        reInitialValues={reInitialValues}
        setInfoModal={setInfoModal}
        infoModal={infoModal}
      />
    </>
  )
}

export default ProductTable
