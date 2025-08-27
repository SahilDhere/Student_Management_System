import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Layout from './components/Layout'
import AddStudent from './Pages/AddStudent'
import StudentInfo from './Pages/StudentInfo'
import SignUp from './Pages/SignUp'
import Home from './Pages/Home'
import Login from './Pages/Login'
import EditStudentInfo from './Pages/EditStudentInfo'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/Add-Student' element={<AddStudent />} />
            <Route path='/Student-info' element={<StudentInfo />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
            <Route path='/edit-studentinfo/:id' element={<EditStudentInfo/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
