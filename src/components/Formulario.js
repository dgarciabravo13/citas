import React, {useState} from "react";

const Formulario = () => {

  const [cita, setCita] = useState({
    mascota:"",
    propietario:"",
    fecha:"",
    hora:"",
    sintomas:""
  })

  //
  const handleChange = (e)=>{
    setCita({
      ...cita,
      [e.target.name]: e.target.value
    })
  }
  return (
    <>
      <h2>Crear Cita</h2>
      <form>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={handleChange}
        />
        <label>Nombre Dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre Dueño de la Mascota"
          onChange={handleChange}
        />
        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={handleChange}
        />
        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={handleChange}
        />
        <label>Sintomas</label>
        <textarea
          name="sintomas"
          className="u-full-width"
          onChange={handleChange}
        ></textarea>
        <button
          type="submit" 
          className="u-full-width button-primary"
        >Agregar Cita</button>
      </form>
    </>
  );
};

export default Formulario;
