import React, {useState} from 'react';
import Formulario from './components/Formulario';

function App() {

  const [citas, setCitas] = useState([]);

  const agregarCita = (cita) => {
    setCitas([...citas, cita])
  }
  return (
    <>
        <h1>Administrador de Pacientes</h1>
        <div className="container">
          <div className="row">
            <div className="one-half column">
              <Formulario
                agregarCita={agregarCita}
              />
            </div>
            <div className="one-half column">
              2
              </div>
          </div>
        </div>
        
    </>
  );
}

export default App;
