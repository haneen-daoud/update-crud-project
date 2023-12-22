import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from './assets/components/users/Index'
import Create from './assets/components/users/Create'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Details from './assets/components/users/Details';
import Edit from './assets/components/users/Edit';
export default function App() {

  return (
    <Routes>
      <Route path='/' element={<Create />} />
      <Route path='user/index' element={<Index />} />
      <Route path='user/Create' element={<Create />}/>
      <Route path='user/:id' element={<Details />}/>
      <Route path='user/edit/:id' element={<Edit />}/>


      
  

      <Route path='*' element={<h2>user not found</h2>} />
    </Routes>
  )
}
