import React from 'react'
import '../stylesheets/Tarea.css'

function Tarea({id, tarea, completada, completarTarea, eliminarTarea}) {
  return (
    <> 
    <div 
    className='card my-3 p-2'
    onClick={ () => completarTarea(id)}
    >
      <div className="d-flex justify-content-between align-items-center">
        <p className={completada ? 'mb-0 tachado' : 'mb-0'}>{tarea}</p>
        <button 
        className='btn btn-danger'
        onClick={ () => eliminarTarea(id)}
        >Delete</button>
      </div>
    </div>
    </>
  )
}

export default Tarea
