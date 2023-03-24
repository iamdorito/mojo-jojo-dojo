import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './components/Home/Home.jsx'
import Events from './components/Events/AllEvents.jsx'

import Titleholders from './components/Athletes/Titleholders'
import AllAthletes from './components/Athletes/AllAthletes.jsx'

import Connect from './components/Connect.jsx'
import Announcements from './components/Announcements.jsx'
import Login from './components/Login.jsx'
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
      let req = await fetch("http://localhost:3000/me", {
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
          <Route path='/home' element={<Home />} />
          <Route path='/events' element={<Events />} />
          {/* <Route path='/events/promotions' element={<EventDetailPage />} /> */}
          <Route path='/titleholders' element={<Titleholders />} />
          <Route path='/athletes' element={<AllAthletes user={user} />} />
          {/* <Route path='/newathlete' element={<NewAthleteForm />} /> */}
          <Route path='/connect' element={<Connect />} />
          <Route path='/announcements' element={<Announcements />} />
          <Route path='/login' element={<Login user={user} setUser={setUser} logout={logout} />} />
          <Route path='/search' element={<SearchResults/>} 
          />
        </Routes>
      <Footer user={user} />
      </BrowserRouter>
 
  )
}

export default App