import React, { Component } from 'react';
import axios from 'axios';

const SORTING_API = 'https://www.potterapi.com/v1/sortingHat'

class SortingHat extends Component {
  constructor() {
    super();
    this.state = {
      house: ''
    };
  }

  async getHouse() {
    try {
       const response = await axios.get(SORTING_API)
      console.log(response.data)
      this.setState({
        house: response.data
      })
    } catch (error) {
      console.log('error')
    }
  }

  handleButton = () => {
    this.getHouse()
  }

  render() {
    return (
      <>
        <div>
          <h1> SortingHat </h1>
        </div>
        <div className='hatbutton'>
          <button onClick={this.handleButton}>Get Chosen</button>
        </div>
        <div className='chosenhouse'>
          <p>{this.state.house}</p>
        </div>
      </>
    );
  }
}

export default SortingHat;
