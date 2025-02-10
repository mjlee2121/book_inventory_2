import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const navigateToHome = () => {
    navigate('/')
  }

  return (
    <div>
      <button onClick={navigateToHome}>Home</button>
    </div>
  )
}

export default Home