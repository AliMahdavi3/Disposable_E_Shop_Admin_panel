import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard'
import Product from './products/Product';
import Orders from './orders/Orders';
import Article from './articles/Article';
import Questions from './questions/Questions';
import Banner from './banner/Banner';
import Discount from './discounts/Discount';
import MainSlider from './mainSlider/MainSlider';
import ProductComments from './products/manageComments/ProductComments';
import ArticleComments from './articles/manageComments/ArticleComments';
import Tickets from './tickets/Tickets';


const Content = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/product' element={<Product />} />
      <Route path='/product/:productId' element={<ProductComments />} />
      <Route path='/orders' element={<Orders />} />
      <Route path='/blog' element={<Article />} />
      <Route path='/blog/:articleId' element={<ArticleComments />} />
      <Route path='/questions' element={<Questions />} />
      <Route path='/banners' element={<Banner />} />
      <Route path='/main-slider' element={<MainSlider />} />
      <Route path='/discount' element={<Discount />} />
      <Route path='/tickets' element={<Tickets />} />

      <Route path='*' element={<Dashboard />} />
    </Routes>
  )
}

export default Content
