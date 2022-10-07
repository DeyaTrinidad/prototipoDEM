import React from 'react'
import Button from 'react-bootstrap/Button';
import '../styles/Home.css'

const Home = () => {
  return (
    <>
    <header className="main-header"> 

      <div className='main-title'> 
        <h1>DesarrollArte Efecto Mariposa</h1>     
        <p>Renovando mentes, transformando vidas.</p>  
       
         <Button variant="success">SABER MÁS</Button>
         </div>

        
</header>
 <p>¿Estrés, burnout, ansiedad, depresión?</p>
 </>
  )
}

export default Home