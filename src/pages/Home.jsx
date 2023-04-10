import React from 'react'
import heroImg from '../assets/images/hero.png'

const Home = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h3>Easy way to make an order</h3>
        <h1><span className='active'>HUNGRY?</span> Just wait food <br/> at <span className='active'> your door</span></h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

      </div>

      <div className="hero-img">
        <img src={heroImg} alt='hero'></img>
      </div>
    </div>
  )
}

export default Home