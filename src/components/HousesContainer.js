import React from 'react'
import { Link } from 'react-router-dom'

function HousesContainer(props) {
  const { name, founder, headOfHouse, houseGhost, mascot } = props

  return (
    <div className='houseBox'>

      <Link to='/houses/hufflepuff'>
        <div className='houseBox'>
          <img src='https://vignette.wikia.nocookie.net/harrypotter/images/6/62/Download_%289%29.jpg/revision/latest?cb=20160729145653'
            height='20%'
            width='20%'
            alt='HufflePuff' />
        </div>
      </Link>

      <Link to='/houses/ravenclaw'>
        <div className='houseBox'>
          <img src='https://vignette.wikia.nocookie.net/harrypotter/images/2/28/Download_%284%29.jpg/revision/latest?cb=20160729145945'
            height='20%'
            width='20%'
            alt='Ravenclaw' />
        </div>
      </Link>

      <Link to='/houses/gryffindor'>
        <div className='houseBox'>
          <img src='https://vignette.wikia.nocookie.net/harrypotter/images/e/ee/Gryffindor_Crest-0.jpg/revision/latest?cb=20160729145529'
            height='20%'
            width='20%'
            alt='Gryffindor' />
        </div>
      </Link>

      <Link to='/houses/slytherin'>
        <div className='houseBox'>
          <img src='https://vignette.wikia.nocookie.net/harrypotter/images/7/72/Ccd53034-c798-452a-8032-f28e06250d8f.jpg/revision/latest?cb=20160729150848'
            height='20%'
            width='20%'
            alt='Slytherin' />
        </div>
      </Link>

    </div>
  )
}

export default HousesContainer