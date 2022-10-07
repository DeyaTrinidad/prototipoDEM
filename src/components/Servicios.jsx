import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import  '../styles/Servicios.css';


function Servicios(props) {
  return (
    <div className='container servicios-container'>
      <div className='card'>
        <div className="img-card">     
        </div>
        <div className="content">
        {props.servicio}       
       {props.texto}    
 </div>
  <div className="boton">
  <Button variant="primary">{props.boton}</Button>

        </div>
       
      </div>
    
    
    </div>
  );
}

export default Servicios;