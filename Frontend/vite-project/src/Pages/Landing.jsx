import React from 'react'
import "../App.css"
import { Link, useNavigate } from 'react-router-dom'

const Landing = () => {

  const router = useNavigate();
  return (
    <div className="LandingPageContainer">
      <nav>
        <div className="navHeader">
            <h2>Meetify</h2>
        </div>
        <div className="navList">
            <p onClick={() => router("/hii5678")}>Join as Guest</p>
            <p onClick={() => {
              router("/auth")
            }}>Register</p>
            <div onClick={() => {
              router("/auth")
            }} role="button">
                <p>Login</p>
            </div>
        </div>
      </nav>

      <div className="LandingMainContainer">
        <div>
            <h1><span style={{color : "#FF9"}}>Meet Smarter.</span>Connect faster.</h1>
            <p> Cover a distance by Meetify.</p>
            <div role="button">
                <Link to={"/auth"}>Get Started</Link>
            </div>
        </div>
        <div>
            <img src="/mobile.png" alt=""></img>
        </div>
      </div>
    </div>
  )
}

export default Landing
