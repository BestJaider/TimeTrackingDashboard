import './TimeCard.css';

function TimeCard(props){

    return(
<div className='mt-1 mb-3 '>
<div className='card icon rounded-4' style={{ backgroundColor: `${props.fondo}`, backgroundImage: `${props.icon}`}}>
     
     </div>
     <div className="card text-endº rounded-4 blue" style={{zIndex: '4', marginTop:'-20px'}}>

          <p className='text-start pri'>{props.activity}</p>
          <h1 className='text-start'>{props.hours}</h1>
          <p className='text-start'>Last Week - {props.time}</p>
   </div>

  
      </div>
    )
}

export default TimeCard