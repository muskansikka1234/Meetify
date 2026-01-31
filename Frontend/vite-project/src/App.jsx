import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Landing from './Pages/Landing'
import Authentication from './Pages/Authentication'
import { AuthProvider } from './contexts/AuthContext'
import VideoMeet from './Pages/VideoMeet'
import Home from './Pages/Home'
import History from './Pages/History'

function App() {
  return (
    <div className="App">
    <Router>
      <AuthProvider>
      <Routes>
        <Route path='/' element = {<Landing/>} />
        <Route path='/auth' element = {<Authentication/>} />
        <Route path='/home' element = {<Home/>} />
        <Route path='/:url' element={<VideoMeet/>} />
        <Route path='/history' element={<History/>} />
      </Routes>
      </AuthProvider>
    </Router>
    </div>
  )
}

export default App
