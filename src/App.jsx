import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Home from './pages/Home'
import Servicios from './components/Servicios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {  
  return (
    <>    
    <Home/>

      
      <Servicios
      foto='academico'
      servicio='ACADÉMICO'
      texto='Tareas,Exámenes,Pendientes,Asesorías'
      boton='Me Interesa'
      />
      <Servicios
      foto='academico'
      servicio='ACADÉMICO'
      texto='Tareas,Exámenes,Pendientes,Asesorías'
      boton='Me Interesa'
      />
      <Servicios
      foto='academico'
      servicio='ACADÉMICO'
      texto='Tareas,Exámenes,Pendientes,Asesorías'
      boton='Me Interesa'
      />

    </>

  )
}
export default App
