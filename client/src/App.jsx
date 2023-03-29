import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './components/Home/Home.jsx'
import Sponsors from './components/Home/Sponsors.jsx'
import UpcomingEvents from './components/Events/UpcomingEvents.jsx'

import Titleholders from './components/Athletes/Titleholders'
import AllAthletes from './components/Athletes/AllAthletes.jsx'

import Connect from './components/Connect.jsx'
import Announcements from './components/Announcements.jsx'
import Login from './components/UserLogin/Login.jsx'
import Register from './components/UserLogin/Register.jsx'

import SearchResults from './components/SearchResults.jsx'
import Cookies from 'js-cookie'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const [user, setUser] = useState(null)
  const [search, setSearch ] = useState('');


  useEffect(() => {
    const loadUser = async () => {
      let req = await fetch("/me", {
        headers: {Authorization: Cookies.get('token')}
      })
      let res = await req.json()
      if (res.user) setUser(res.user)
    }
    if (Cookies.get('token')) loadUser()
  }, [])

  const logout = () => {
    Cookies.remove('token')
    setUser(null)
    console.log('logged out')
  }


  return (
    
      <BrowserRouter>
        <Header user={user} logout={logout} search={search} setSearch={setSearch} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/upcomingevents' element={<UpcomingEvents user={user} />} />
          {/* <Route path='/events/promotions' element={<EventDetailPage />} /> */}
          <Route path='/titleholders' element={<Titleholders />} />
          <Route path='/athletes' element={<AllAthletes user={user} />} />
          {/* <Route path='/newathlete' element={<NewAthleteForm />} /> */}
          <Route path='/connect' element={<Connect />} />
          <Route path='/announcements' element={<Announcements />} />
          <Route path='/login' element={<Login user={user} setUser={setUser} logout={logout} />} />
          <Route path='/register' element={<Register user={user} setUser={setUser} logout={logout} />} />
          <Route path='/search' element={<SearchResults/>} 
          />
        </Routes>
      <Sponsors />
      <Footer user={user} />
      </BrowserRouter>
 
  )
}

export default App