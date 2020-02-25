import React from 'react'

function Organzations(props) {

  const { characters } = props

  console.log(characters)

  const sortArmy = () => {
    return characters.map((character) => {
      if (character.dumbledoresArmy === true) {
        return (
          <li key={character._id}>
            {character.name}
          </li>
        )
      } else {
        return null
      }
    })
  }

  const sortOrder = () => {
    return characters.map((character) => {
      if (character.orderOfThePhoenix === true) {
        return (
          <li key={character._id}>
            {character.name}
          </li>
        )
      } else {
        return null
      }
    })
  }

  const sortMinistry = () => {
    return characters.map((character) => {
      if (character.ministryOfMagic === true) {
        return (
          <li key={character._id}>
            {character.name}
          </li>
        )
      } else {
        return null
      }
    })
  }

  const sortDeath = () => {
    return characters.map((character) => {
      if (character.deathEater === true) {
        return (
          <li key={character._id}>
            {character.name}
          </li>
        )
      } else {
        return null
      }
    })
  }

  const display = (event) => {
    // console.log(event.target.name)
    document.querySelector(`.${event.target.name}`).style.display = 'block';
  }

  
  return (
    <div>

      <button name='army' onClick={display}>
        <h1>Dumbledore's Army</h1>

        <p>"Every great wizard in history has started out as nothing more
            than what we are now: students. If they can do it, why not us?"
            <br />
            —Harry Potter
        </p>
      </button>

      <ul className='army'>
        {sortArmy()}
      </ul>

      <button name='order' onClick={display}>
        <h1>Order of The Phoenix</h1>
        <p>"Time is short, and unless the few of us who know the truth stand united,
            there is no hope for any of us."
          <br />
          —Albus Dumbledore
        </p>
      </button>

      <ul className='order'>
        {sortOrder()}
      </ul>

      <button name='ministry' onClick={display}>
        <h1>Ministry of Magic</h1>
        <p>Wizarding Government</p>
      </button>

      <ul className='ministry'>
        {sortMinistry()}
      </ul>

      <button name='death' onClick={display}>
        <h1>Death Eater's</h1>
        <p>Voldemort Army</p>
      </button>

      <ul className='death'>
        {sortDeath()}
      </ul>

    </div>
  )
}

export default Organzations