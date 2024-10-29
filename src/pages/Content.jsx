import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard'
import Product from './products/Product';
import Orders from './orders/Orders';
import Article from './articles/Article';
import Questions from './questions/Questions';
import Banner from './banner/Banner';
import Discount from './discounts/Discount';
import Comments from './comments/Comments';
import Feedback from './feedbacks/Feedback';
import MainSlider from './mainSlider/MainSlider';

const Content = () => {
  return (
    <Routes>
      <Route path='/' element={ <Dashboard/>}/>
      <Route path='/product' element={ <Product/>} />
      <Route path='/orders' element={ <Orders/>} />
      <Route path='/blog' element={ <Article/>} />
      <Route path='/questions' element={ <Questions/>} />
      <Route path='/banners' element={ <Banner/>} />
      <Route path='/main-slider' element={ <MainSlider/>} />
      <Route path='/discount' element={ <Discount/>} />
      <Route path='/comments' element={ <Comments/>} />
      <Route path='/feedback' element={ <Feedback/>} />

      <Route path='*' element={ <Dashboard/>}/>
    </Routes>
  )
}

export default Content
