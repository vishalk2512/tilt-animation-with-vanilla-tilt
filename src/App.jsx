import VanillaTilt from 'vanilla-tilt'

import { useEffect, useRef } from 'react'

import './App.css'
import Shoe from './assets/shoe.jpg'

function App() {
  const tiltRef = useRef(null)

  useEffect(() => {
    const tiltElement = tiltRef.current

    const vanillaTiltOptions = {
      max: 15,
      speed: 800,
      glare: true,
      perspective: 500,
      scale: 1.05,
      'max-glare': 0.5,
    }

    VanillaTilt.init(tiltElement, vanillaTiltOptions)

    return () => tiltElement.vanillaTilt.destroy()
  }, [])

  return (
    <div className='center'>
      <img src={Shoe} alt='shoe' width={250} ref={tiltRef} />
    </div>
  )
}

export default App
