import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Pages
import Home from '../pages/home'
import LandingPage from '../pages/landingPage'

const Router = () => <BrowserRouter>
{/* navbar */}
    <Routes>
        <Route path='/' component={() => <LandingPage/>}/>
        <Route path='/home' component={() => <Home/>}/>
    </Routes>
</BrowserRouter>

export default Router