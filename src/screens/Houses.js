import React, { Component } from 'react';
import axios from 'axios'
import HousesContainer from '../components/HousesContainer'
import Gryffindor from './Gryffindor';

const Token_1 = process.env.REACT_APP_HARRY_POTTER_TOKEN_1
const Token_2 = process.env.REACT_APP_HARRY_POTTER_TOKEN_2
const Token_3 = process.env.REACT_APP_HARRY_POTTER_TOKEN_3
const HOUSES_API = `https://www.potterapi.com/v1/houses?key=$${Token_1}$${Token_2}$${Token_3}`;

class Houses extends Component {
  constructor() {
    super();
    this.state = {
      houses: [],
      gryffindor: [],
      hufflepuff: [],
      ravenclaw: [],
      slytherin: []
    };
  }

  async componentDidMount() {
    try {
      const response = await axios.get(HOUSES_API)
      this.setState({
        houses: response.data,
        gryffindor: response.data[0],
        ravenclaw: response.data[1],
        slytherin: response.data[2],
        hufflepuff: response.data[3]
      })
    } catch (error) {
      console.log('Error')
    }
  }
    
    render() {
      const { houses, gryffindor, ravenclaw, hufflepuff, slytherin } = this.state

    return (
      <div>
        <h1>The Four Great Houses </h1>
        {/* {this.sortHouses()} */}
        <HousesContainer />
      </div>
    );
  }
}

export default Houses;