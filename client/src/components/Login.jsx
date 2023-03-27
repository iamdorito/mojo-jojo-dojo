import { useState, useRef, useEffect } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from "react-router-dom";
import ErrorPopUp from './ErrorPopUp';
import mojoFace from '../assets/mojo-face.png';
import { Link } from 'react-router-dom';

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
      let req = await fetch("http://localhost:3000/login", {
        method: "POST",
        body: formData,
      });
      let res = await req.json();
      if (req.ok) {
        // console.log(res.user);
        Cookies.set("token", res.token);
        setUser(res.user);
        navigate("/home");
        setIsLoading(true);
      }
    } catch (err) {
      setIsLoading(false);
      // alert("Invalid credentials");
      <ErrorPopUp />
    }
  };

  return (
    <div className="login">
      {/* <>
        { user && <Profile user={user} /> }
      </> */}
    <section class="bg-gray-50 dark:bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img 
          class="w-8 h-8 mr-2" 
          src={mojoFace}
          alt="logo"/>
          Mojo Jojo Dojo    
      </div>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in
          </h1>
          <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit} ref={form}>
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input 
                  type="email" name="email" 
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500" 
                  required=""
                  />
              </div>
              <div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input 
                  type="password" name="password" 
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500" 
                  required=""
                  />
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input aria-describedby="remember" type="checkbox" 
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" 
                      required=""
                      />
                    </div>
                  <div class="ml-3 text-sm">
                    <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                  </div>
                  </div>
              {/* <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a> */}
                </div>
              <button 
                type="submit" 
                class="w-full text-white bg-purple-600 hover:bg-lime-600 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Sign in
                </button>
              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet? 
                <br/>
                <Link  
                  to="/register"
                  class="font-medium text-purple-600 hover:underline">
                  Sign up
                  </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>

      {/* <form onSubmit={handleSubmit} ref={form}>
        <input name='email' type='email' placeholder="email" />
        <input name='password' type='text' placeholder="password" />
        <button>
        LOGIN
        </button>
      </form>
      <br /> 
      <button onClick={logout}>LOGOUT</button> */}
    </div>
  )
}