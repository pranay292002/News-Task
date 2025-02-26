import { useState } from 'react'

import Header from './commonComponents/Header'
import { headerData } from './data/headerData'
import Home from './pages/Home'
import { Route, Routes } from 'react-router'
import ArticleDetails from './pages/ArticleDetails'


function App() {


  return (
    <>
      <Header headerData={headerData}/>
      <Routes> 
        <Route path='/' element={<Home/>}></Route>
        <Route path='/:id' element={<ArticleDetails/>}></Route>
      </Routes>
      
    </>
  )
}

export default App
