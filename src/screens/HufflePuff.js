import React from 'react'

function HufflePuff(props) {

  const { name, founder, headOfHouse, houseGhost, mascot } = props.data

  return (
    <div>
      <h1>Welcome to: House {name}</h1>
      <h3>Founder: {founder}</h3>
      <h3>Head of House: {headOfHouse}</h3>
      <h3>House Ghost: {houseGhost}</h3>
      <h3>Mascot: {mascot}</h3>
    </div>
  )
}

export default HufflePuff;