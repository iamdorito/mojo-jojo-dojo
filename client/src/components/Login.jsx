import { useState, useRef, useEffect } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from "react-router-dom";
import ErrorPopUp from './ErrorPopUp';


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

  //   useEffect(() => {
  //   if (user) {
  //     setTimeout(() => {
  //       navigate("/home");
  //       setIsLoading(false);
  //     }, 3000);
  //   }
  // }, [user, navigate]);

  return (
    <div className="App">
      <>
        { user && <Profile user={user} /> }
      </>

      <form onSubmit={handleSubmit} ref={form}>
        <input name='email' type='email' placeholder="email" />
        <input name='password' type='text' placeholder="password" />
        <button>
        LOGIN
        </button>
      </form>
      <br /> 
      <button onClick={logout}>LOGOUT</button>
    </div>
  )
}