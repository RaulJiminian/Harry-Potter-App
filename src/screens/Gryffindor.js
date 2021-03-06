import React from 'react'

function Gryffindor(props) {

  console.log(props.characters)

  const { name, founder, headOfHouse, houseGhost, mascot } = props.data
  const { characters } = props

  const sort = () => {
    return characters.map((character) => {
      if (character.house === 'Gryffindor') {
        return (
          <li key={character._id}>
            {character.name}
          </li>
        )
      }
    })
  }

  return (
    <div>
      <h1>Welcome to: House {name}</h1>
      <h3>Founder: {founder}</h3>
      <h3>Head of House: {headOfHouse}</h3>
      <h3>House Ghost: {houseGhost}</h3>
      <h3>Mascot: {mascot}</h3>

      <div>
        <h3>Fellow Members:</h3>
        <ul className='characters'>{sort()}</ul>
      </div>
    </div>
  )
}
export default Gryffindor;