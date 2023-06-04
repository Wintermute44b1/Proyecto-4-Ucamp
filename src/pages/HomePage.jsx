import React from 'react'
import './home.css'
const HomePage = () => {
  return (
  <>
  <h1 className='titulo'>Bienvenido a la pizzeria del Gato Feliz</h1>
  <div className='flex-container'>
  <div className='textbox'>Bienvenido a nuestro restaurante! Como hasta quedar de feliz 
    como el gato feliz!
  </div>
<img className='imagen' src="src/resources/images/gato.jpg" alt="gato feliz" />
</div>
  </>
  )
}

export default HomePage