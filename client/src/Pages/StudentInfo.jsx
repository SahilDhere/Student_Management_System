import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Bounce, toast, ToastContainer } from 'react-toastify'
import { CiEdit } from "react-icons/ci";
import { FaTrash } from "react-icons/fa";

function StudentInfo() {

  const [data, setData] = useState([]);

  const navigate = useNavigate('');

  const [isLogin, setIsLogin] = useState(false);
  const [login, setLogin] = useState(null);

  useEffect(() => {
    const admin = localStorage.getItem("admin");
    const token = localStorage.getItem("token");

    if (token) {
      setIsLogin(true);
      setLogin(JSON.parse(admin));
    } else {
      setIsLogin(false);
      setLogin(null);
    }
  }, []);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {

        const res = await axios.get(`http://localhost:5000/students/`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        console.log(res.data.Students);
        setData(res.data.Students)

      } catch (error) {
        console.log(error);
        const errMess = error.response?.data?.message;
        console.log(errMess);
        toast.error(errMess, {
          position: "top-right",
          autoClose: 2000,
          transition: Bounce
        })
      }
    }
    fetchData();
  }, [])

  const handleDelete = async (id) => {
    try {

      const res = await axios.delete(`http://localhost:5000/students/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      console.log(res.data.deleteStudent);

      setData((prev)=>prev.filter((item)=>item._id !== id))
      toast.success("Remove Student Info Succesfully", {
        position: "top-right",
        autoClose: 2000,
        transition: Bounce
      })
      

    } catch (error) {
      console.log(error);
      const errMess = error.response?.data?.message;
      toast.error(errMess, {
        position: "top-right",
        autoClose: 2000,
        transition: Bounce
      })
    }
  }

  return (
    <>
    <ToastContainer/>
      <div className='p-6 bg-white shadow-md rounded-lg mb-58'>
        <div className='flex justify-between items-center mb-4'>
          <h2>Students Information</h2>
        </div>

        <div className='overflow-x-auto'>
          <table className='min-w-full table-auto border border-gray-200'>
            <thead className='bg-gray-800 text-white'>
              <tr>
                <th className='px-4 py-2 border'>Sr No.</th>
                <th className='px-4 py-2 border'>Name</th>
                <th className='px-4 py-2 border'>Age</th>
                <th className='px-4 py-2 border'>Address</th>
                <th className='px-4 py-2 border'>Contact</th>
                <th className='px-4 py-2 border'>Email</th>
                <th className='px-4 py-2 border'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                data.length > 0 ? (
                  data.map((item, index) => {
                    return (
                      <>
                        <tr key={index}>
                          <td className='px-4 py-2 border text-center font-semibold'>{index + 1}</td>
                          <td className='px-4 py-2 border text-center font-semibold'>{item.stuName}</td>
                          <td className='px-4 py-2 border text-center font-semibold'>{item.stuAge}</td>
                          <td className='px-4 py-2 border text-center font-semibold'>{item.stuAddress}</td>
                          <td className='px-4 py-2 border text-center font-semibold'>{item.stuContact}</td>
                          <td className='px-4 py-2 border text-center font-semibold'>{item.stuEmail}</td>
                          <td className='flex justify-around px-4 py-2 border space-x-2'>
                            <Link className='inline-flex px-2 py-2  bg-yellow-500 text-white rounded hover:bg-yellow-800 cursor-pointer' to={`/edit-studentinfo/${item._id}`}>
                              {<CiEdit />}
                            </Link>
                            <Link>
                              <button onClick={() => handleDelete(item._id)} className='inline-block px-2 py-2 bg-red-600 text-white rounded hover:bg-red-600 cursor-pointer'>{<FaTrash />}</button>
                            </Link>
                          </td>
                        </tr>
                      </>
                    )
                  })
                ) : (
                  <tr>
                    <td colSpan={"6"} className='text-center'>
                      No Students Information are Available
                    </td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default StudentInfo
