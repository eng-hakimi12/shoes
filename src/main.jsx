import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Product from './Component/Product'
import ProductList from './Component/ProductList'
import Header from './Component/Header'
import Main from './Component/Main'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    {/* <Product /> */}
    <Header />
    <ProductList />
    <Main />
  </div>
  
)
