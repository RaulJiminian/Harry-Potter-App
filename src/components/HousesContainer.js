import React from 'react'
import {Link} from 'react-router-dom'

function HousesContainer() {
  return (

    <>
      <Link to='/houses/gryffindor'>
        <div className='box3'>
          <img src='https://vignette.wikia.nocookie.net/jspotter/images/e/e2/Gryffindor_House_Crest.png/revision/latest/scale-to-width-down/220?cb=20140720030308'
            height='100%'
            width='100%'
            alt='Gryffindor' />
        </div>
      </Link>


      <Link to='/houses/slytherin'>
        <div className='box4'>
          <img src='https://vignette.wikia.nocookie.net/jspotter/images/e/ef/Slytherin™_Crest_%28Painting%29.png/revision/latest?cb=20140721052815'
            height='100%'
            width='100%'
            alt='Slytherin' />
        </div>
      </Link>

      <Link to='/houses/hufflepuff'>
        <div className='box1'>
          <img src='https://vignette.wikia.nocookie.net/jspotter/images/3/30/Hufflepuff™_Crest_%28Painting%29.png/revision/latest/scale-to-width-down/220?cb=20140721054747'
            height='100%'
            width='100%'
            alt='HufflePuff' />
        </div>
      </Link>

      <Link to='/houses/ravenclaw'>
        <div className='box2'>
          <img src='https://vignette.wikia.nocookie.net/jspotter/images/e/e6/Ravenclaw_Crest_Painting.png/revision/latest/scale-to-width-down/220?cb=20140721054550'
            height='100%'
            width='100%'
            alt='Ravenclaw' />
        </div>
      </Link>
    </>
  )
}

export default HousesContainer