import './UserCard.css';

function UserCard(props) {

  return (
    <div className="row">

      <div>
        <div class="card back azul" style={{ zIndex: "4" }}>
          <div className="img" style={{ backgroundImage: `${props.imagenes}` }}></div>
          <div class="card-body text-start">
            <p className='text-start'>Report for</p>
            <h1>{props.nombres}</h1>
          </div>
        </div>
        <div class="card text-start morado" style={{ marginTop: "-20px", }}>
          <p className='letra'>Daily</p>
          <p className='letra'>Weekly</p>
          <p className='letra'>Monthly</p>
        </div>

      </div>
    </div>



  )
}

export default UserCard