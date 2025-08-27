import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Bounce, toast, ToastContainer } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom'


function EditStudentInfo() {

    const { id } = useParams();

    const [formData, setFormData] = useState({
        stuName: '',
        stuAge: '',
        stuAddress: '',
        stuContact: '',
        stuEmail: ''
    })

    const [error, setError] = useState("")
    const navigate = useNavigate('')

    const { stuName, stuAge, stuAddress, stuContact, stuEmail } = formData;

    const token = localStorage.getItem("token");

    useEffect(() => {
        const fetchData = async () => {
            try {
                
                const res = await axios.get(`http://localhost:5000/students/${id}`,{
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                })
                console.log(res.data.data);
                console.log(res.data.stuAddress)
                setFormData({
                    stuName:res.data.data.stuName,
                    stuAge:res.data.data.stuAge,
                    stuAddress:res.data.data.stuAddress,
                    stuContact:res.data.data.stuContact,
                    stuEmail:res.data.data.stuEmail,
                })
                
            } catch (error) {
                console.log(error);
                const errMess = error.response?.data?.message;
                setError(errMess)
                toast.error(errMess, {
                    position: "top-right",
                    autoClose: 2000,
                    transition: Bounce
                })
            }
        }
        fetchData();
    },[id,token])

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const res = await axios.put(`http://localhost:5000/students/${id}`, {
                stuName,
                stuAge,
                stuAddress,
                stuContact,
                stuEmail
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            console.log(res.data.editStudentInfo);
            setFormData({
                stuName:"",
                stuAge:"",
                stuAddress:"",
                stuContact:"",
                stuEmail:""
            })

            toast.success("Edit Student Info Succesfully", {
                position: "top-right",
                autoClose: 2000,
                transition: Bounce
            })

            setTimeout(() => {
                navigate("/Student-info")
            }, 2000)
            setError("")

        } catch (error) {
            console.log(error);
            const errMess = error.response?.data?.message;
            setError(errMess)
            toast.error(errMess, {
                position: "top-right",
                autoClose: 2000,
                transition: Bounce
            })
        }
    }

    return (
        <>
            <ToastContainer />
            <div className='flex items-center justify-center h-100 mt-21'>
                <div className='p-8 w-full max-w-2xl mt-20'>

                    <form onSubmit={handleSubmit} action="" className='space-x-5' style={{ border: "2px solid crimson", padding: "40px", marginTop: "20px", borderRadius: "4px" }}>

                        <h2 className='text-3xl font-semibold text-center text-blue-900 mb-5'>Edit Student Information</h2>

                        <div className='flex ml-20px'>
                            <div>
                                <label className='block mb-2 font-semibold' htmlFor="">Name</label>
                                <input
                                    type="text"
                                    placeholder='Enter Your Name'
                                    required
                                    name='stuName'
                                    value={formData.stuName}
                                    onChange={handleChange}
                                    className='mt-1 block w-full px-4 py-2 border border-gray-900 rounded-lg  '
                                />
                            </div>
                            <div className='ml-10'>
                                <label className='block mb-2 font-semibold' htmlFor="">Age</label>
                                <input
                                    type="number"
                                    placeholder='Enter Your Age'
                                    required
                                    name='stuAge'
                                    value={stuAge}
                                    onChange={handleChange}
                                    className='mt-1 block w-full px-4 py-2 border border-gray-900 rounded-lg  '
                                />
                            </div>

                        </div>

                        <div className='mt-3'>
                            <label className='block mb-2 font-semibold' htmlFor="">Address</label>
                            <textarea
                                type="text"
                                placeholder='Enter Your Address'
                                required
                                name='stuAddress'
                                value={stuAddress}
                                onChange={handleChange}
                                className='mt-1 block w-full px-4 py-2 border border-gray-900 rounded-lg  '
                            />
                        </div>

                        <div className='flex w-100px'>
                            <div className='mt-3'>
                                <label className='block mb-2 font-semibold' htmlFor="">Contact</label>
                                <input
                                    type="text"
                                    placeholder='Enter Your Contact'
                                    required
                                    name='stuContact'
                                    value={stuContact}
                                    onChange={handleChange}
                                    className='mt-1 block w-full px-4 py-2 border border-gray-900 rounded-lg  '
                                />
                            </div>

                            <div className='mt-3 ml-10'>
                                <label className='block mb-2 font-semibold' htmlFor="">Email</label>
                                <input
                                    type="email"
                                    placeholder='Enter Your Email'
                                    required
                                    name='stuEmail'
                                    value={stuEmail}
                                    onChange={handleChange}
                                    className='mt-1 block w-full px-4 py-2 border border-gray-900 rounded-lg  '
                                />
                            </div>

                        </div>

                        <div>
                            {error && <h6 className='text-center text-red-500'>{error}</h6>}
                            <button className='w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded-lg mt-5 cursor-pointer' type='submit'>Edit Student Information</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EditStudentInfo
