import React,{useState} from 'react'
'react-toastify'
import axios from 'axios'
import {Bounce, toast, ToastContainer} from 'react-toastify'
import {NavLink, useNavigate} from 'react-router-dom'

function Login() {
    
      const [formdata, setFormData] = useState({
        email:'',
        password:''
      })
    
      const navigate = useNavigate()
      const [error, setError] = useState();
    
      const {email, password} = formdata;
    
      const handleChange = (e)=>{
        setFormData({...formdata,[e.target.name]:e.target.value})
      }
    
      const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
          
          const res = await axios.post(`http://localhost:5000/admin/login`,{
            email,
            password
          }
        )
    
          console.log(res.data.Admin);
          localStorage.setItem("admin",JSON.stringify(res.data.admin));
          localStorage.setItem("token",res.data.token);
    
          toast.success('Login Succesfully',{
            position:"top-right",
            autoClose:2000,
            transition:Bounce
          })
          setError("")
    
          setTimeout(()=>{
            navigate("/")
          },2000)
    
        } catch (error) {
          console.log(error);
          const errMess = error.response?.data?.message;
          console.log(errMess);
          setError(errMess)
          toast.error(errMess,{
            position:"top-right",
            autoClose:2000,
            transition:Bounce
          })
        }
      }
  return (
    <>
   
    <ToastContainer/>
      <div className='flex items-center justify-center h-100 mt-21'>
        <div className='p-8 w-full max-w-md mt-20'>

          <form onSubmit={handleSubmit} action="" className='space-x-5' style={{ border: "2px solid red", padding: "40px", marginTop: "20px" ,borderRadius:"4px"}}>

            <h2 className='text-3xl font-semibold text-center text-gray-900'>Login</h2>
            <div className='mt-5'>
              <label className='block mb-2' htmlFor="">Email</label>
              <input
                type="email"
                placeholder='Enter Your Email'
                required
                name='email'
                value={email}
                onChange={handleChange}
                className='mt-1 block w-full px-4 py-2 border border-gray-900 rounded-lg  '
              />
            </div>
            <div className='mt-5'>
              <label className='block mb-2' htmlFor="">Password </label>
              <input
                type="password"
                placeholder='Enter Your Password'
                required
                name='password'
                value={password}
                onChange={handleChange}
                className='mt-1 block w-full px-4 py-2 border border-gray-900 rounded-lg  '
              />
            </div>
            
            <div>
              {error && <h6 className='text-center mt-1 text-red-500'>{error}</h6>}
              <button className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg mt-5 cursor-pointer' type='submit'>Login</button>
            </div>
          <p className='mt-3 text-center text-blue-600'>Create an New account ? <NavLink to={'/sign-up'}>Sign Up</NavLink></p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
