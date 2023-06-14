import React, { useState } from 'react'
import TareaFormulario from './TareaFormulario'
import Tarea from './Tarea'

function ListaDeTareas() {

    const [tareas, setTareas] = useState ([]);

    function agregarTarea(tarea) {
        console.log('tarea agregada');
        console.log(tarea);
    }

  return (
    <div>
      <>
        <TareaFormulario/>
        {
            tareas.map( tarea =>{
                <Tarea 
                tarea={tarea.tarea}
                completada={tarea.completada}/>
            })
        }
      </>
    </div>
  )
}

export default ListaDeTareas
