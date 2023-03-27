import { useState, useRef, useEffect } from 'react'
import Cookies from 'js-cookie'
import { useNavigate, Link } from "react-router-dom";
import ErrorPopUp from './ErrorPopUp';
import mojoFace from '../assets/mojo-face.png';

function Profile ({user}) {
  return (
    <h3 id="test">{user?.email}</h3>
  )
}

export default function Login({ user, setUser, logout }) {
  const form = useRef()
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let formData = new FormData(form.current);
      let req = await fetch("/login", {
        method: "POST",
        body: formData,
      });
      let res = await req.json();
      if (req.ok) {
        // console.log(res.user);
        Cookies.set("token", res.token);
        setUser(res.user);
        navigate("/home");
        // setIsLoading(true);
      }
    } catch (err) {
      setIsLoading(false);
      // alert("Invalid credentials");
      <ErrorPopUp />
    }
  };

  return (
    <div classNameName="login">
      {/* <>
        { user && <Profile user={user} /> }
      </> */}
    <section className="bg-gray-50 dark:bg-gray-900">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        <img 
          className="w-8 h-8 mr-2" 
          src={mojoFace}
          alt="logo"/>
          Mojo Jojo Dojo    
      </div>
      <div className="w-full bg-white text rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit} ref={form}>
            <div>
              <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Email
                </label>
                <input 
                  type="email" name="email" 
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500" 
                  required=""
                  />
              </div>
              <div>
                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                  </label>
                <input 
                  type="password" name="password" 
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500" 
                  required=""
                  />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input aria-describedby="remember" type="checkbox" 
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" 
                      required=""
                      />
                    </div>
                  <div className="ml-3 text-sm">
                    <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                  </div>
                  </div>
              {/* <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a> */}
                </div>
              <button 
                type="submit" 
                className="w-full text-white bg-purple-600 hover:bg-lime-600 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Sign in
                </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet? 
                <Link  
                  to="/register"
                  className="font-medium text-purple-600 hover:underline">
                  Sign up
                  </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}