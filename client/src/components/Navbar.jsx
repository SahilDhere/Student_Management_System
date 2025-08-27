import React, { useEffect, useState } from 'react'
import { assests } from '../assets/assests'
import { NavLink, useNavigate ,useLocation} from 'react-router-dom'

function Navbar() {

  const navigate = useNavigate()
  const [isLogin, setIsLogin] = useState(false);
  const [login, setLogin] = useState(null);
  const location = useLocation();

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
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem("admin");
    localStorage.removeItem("token");
    setIsLogin(false);
    setLogin(null);
    navigate("/sign-up")
  }

  return (
    <>

      <nav className='bg-white dark:bg-gray-800 shadow-md px-4 py-3'>
        <div>
          <div className='flex'>
            <img className='h-8 rounded-xl' src={assests.logo} alt="" />
            <h2 className='text-white ml-5 mt-1 font-semibold'>Student Management System</h2>

            <div className='ml-40 space-x-30 mt-1 text-white'>

              <NavLink to={isLogin ? "/" : "/"} className={({ isActive }) => isActive ? "text-green-500" : "text-white"}>Home</NavLink>

              <NavLink to={!isLogin ? "/sign-up" : '/Student-info'} className={({ isActive }) => isActive ? "text-green-500 " : "text-white"}>Student Info</NavLink>

              <NavLink to={!isLogin ? "/sign-up" : '/Add-Student'} className={({ isActive }) => isActive ? "text-green-500 " : "text-white"}>Add Students</NavLink>
            </div>

            <div className="absolute top-2 right-6">
              {!isLogin ? (
                <button
                  onClick={() => navigate("/sign-up")}
                  className="bg-blue-700 px-4 py-2 text-white font-semibold rounded-md cursor-pointer hover:bg-blue-800"
                >
                  Sign Up
                </button>
              ) : (
                <div className="relative group">
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-400 rounded-md bg-emerald-700 text-white font-semibold hover:bg-emerald-800 cursor-pointer">
                    {login?.name || "Admin"}
                  </button>

                  <div className="hidden group-hover:block absolute right-2 mt-0 w-40 bg-white rounded-lg shadow-lg border z-10">
                    <button
                      onClick={handleLogout}
                      className="w-full text-center px-4 py-3 text-red-600 font-medium hover:bg-gray-100 rounded-lg mt-0.5 cursor-pointer"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar
