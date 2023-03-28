import { useState, useRef, useEffect } from 'react'
import Cookies from 'js-cookie'
import { useNavigate, Link } from "react-router-dom";
import mojoFace from '../../assets/mojo-face.png';
import Success from '../SuccessPopup';

export default function Register({ user, setUser }) {
    const form = useRef()
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const createUser = async (e) => {
        e.preventDefault();
        // try {
        let formData = new FormData(form.current);
        let req = await fetch("/register", {
            method: "POST",
            body: formData,
        });
        let res = await req.json();
        if (req.ok) {
            console.log(res.user);
            Cookies.set("token", res.token);
            setUser(res.user);
            navigate("/login");
        } else {
            alert("Error: Username/email already exists! Please try again!")
        }
    };

    // useEffect(() => {
    //     if (user) {
    //     setTimeout(() => {
    //         navigate("/");
    //         <Success />
    //     }, 3000);
    //         }
    // }, [user, navigate]);

    return(
    <>
    <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                <img className="w-8 h-8 mr-2" 
                    src={mojoFace} alt="logo"/>
                    Mojo Jojo Dojo    
                </div>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Create and account
                    </h1>
                <form className="space-y-4 md:space-y-6" onSubmit={createUser} ref={form}>
                    <div>
                    <label for="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Username
                        </label>
                        <input 
                            type="username" name="username"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500" 
                            required 
                            />
                    </div>
                    <div>
                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Email
                        </label>
                        <input 
                            type="email" name="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500" 
                            required 
                            />
                    </div>
                    <div>
                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Password
                            </label>
                        <input 
                            type="password" name="password"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500" 
                            required 
                            />
                    </div>
                        <button type="submit" 
                            className="w-full text-white bg-purple-600 hover:bg-lime-600 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            Create an account
                            </button>
                        <p className="text-sm font-light text-gray-500">
                            Already have an account? 
                            <Link to="/login" 
                                className="font-medium text-purple-600 hover:underline">
                                Login here
                                </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
    </>
    )
}