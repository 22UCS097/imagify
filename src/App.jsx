import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import BuyCredit from './pages/BuyCredit'
import Result from './pages/Result'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div className=' bg-slate-500 px-4 sm:px-10 md:px-14 lg:px-28
      min-h-screen'>
       <Navbar/>
      <Routes>
         <Route path="/"  element={<Home/>} />
         <Route path="/buy"  element={<BuyCredit/>} />
         <Route path="/result"  element={<Result/>} />
      </Routes>

    </div>
  )
}
