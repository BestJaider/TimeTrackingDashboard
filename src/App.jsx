import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TimeCard from './TimeCard'
import UserCard from './UserCard'
import Game from "./Game"
import App2 from './App2'

const App = () => {


  const [numero , setNumero] = useState(0);

  function cambiarNumero()
  {
    if(numero > 0){
    setNumero(numero - 1);
    console.log(numero);
  }
  }
  function cambiarnumeroMas()
  {
    if(numero < 20){

      setNumero(numero + 1);
      console.log(numero);
    }
  }

  return (
    
    <div>
      <h1 className='text-black'>Numero: {numero}</h1>
      <button onClick={cambiarnumeroMas}>Incrementar</button>
      <button onClick={cambiarNumero}>decrementar</button>
      <Game/>
      <App2/>
    </div>
    // <div>
    //   <div className="container mt-5">
    //     <div className="row">
    //       <div className="col-3">
    //         <UserCard nombres="Jeremy Robson" imagenes="url(../imagenes/collage.jpg)"/>

    //       </div>
    //       <div className="col-9">
    //         <div className="row">
    //           <div className="col-4">
    //             <TimeCard activity="Work" hours="32hrs" fondo="hsl(15, 100%, 70%)" time="36hrs" icon="url(../imagenes/icon-work.svg)" />

    //           </div>

    //           <div className="col-4">
    //             <TimeCard activity="Play" hours="10hrs" fondo="hsl(195, 74%, 62%)" time="8hrs" icon="url(../imagenes/icon-play.svg)" />

    //           </div>
    //           <div className="col-4">
    //             <TimeCard activity="Study" hours="4hrs" fondo="hsl(348, 100%, 68%)" time="7hrs" icon="url(../imagenes/icon-study.svg)" />
    //           </div>

    //           <div className="col-4">
    //             <TimeCard activity="Exercise" hours="4hrs" fondo="hsl(145, 58%, 55%)" time="5hrs" icon="url(../imagenes/icon-exercise.svg)" />

    //           </div>
    //           <div className="col-4">
    //             <TimeCard activity="Social" hours="5hrs" fondo="hsl(264, 64%, 52%)" time="10hrs" icon="url(../imagenes/icon-social.svg)" />

    //           </div>
    //           <div className="col-4">
    //             <TimeCard activity="Self Care" hours="2hrs" fondo="hsl(43, 84%, 65%)" time="2hrs" icon="url(../imagenes/icon-self-care.svg)" />

    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

  )
}

export default App
