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

  houseImage = () => {
    if (this.state.house === 'Hufflepuff') {
      return (
        <div>
          <h3>You've been by HufflePuff</h3>

          <img src='https://vignette.wikia.nocookie.net/harrypotter/images/6/62/Download_%289%29.jpg/revision/latest?cb=20160729145653'
            height='200px'
            width='200px'
            alt='HufflePuff' />

        </div>
      )
    } else if (this.state.house === 'Ravenclaw') {
      return (
        <div>
          <h3>You've been by RavenClaw</h3>

          <img src='https://vignette.wikia.nocookie.net/harrypotter/images/2/28/Download_%284%29.jpg/revision/latest?cb=20160729145945'
            height='200px'
            width='200px'
            alt='Ravenclaw' />

        </div>
      )
    } else if (this.state.house === 'Gryffindor') {
      return (
        <div>
          <h3>You've been by Gryffindor</h3>

          <img src='https://vignette.wikia.nocookie.net/harrypotter/images/e/ee/Gryffindor_Crest-0.jpg/revision/latest?cb=20160729145529'
            height='200px'
            width='200px'
            alt='Gryffindor' />

        </div>
      )
    } else if (this.state.house === 'Slytherin') {
      return (
        <div>
          <h3>You've been by Slytherin</h3>

          <img src='https://vignette.wikia.nocookie.net/harrypotter/images/7/72/Ccd53034-c798-452a-8032-f28e06250d8f.jpg/revision/latest?cb=20160729150848'
            height='200px'
            width='200px'
            alt='Slytherin' />

        </div>
      )
    }
  }

  render() {

    const { house } = this.state
    const { handleButton, houseImage } = this

    return (
      <>
        <div>
          <h2> SortingHat </h2>
        </div>
        <div className='hatbutton'>
          <button onClick={handleButton}>Get Chosen</button>
        </div>
        <div className='chosenhouse'>
          {houseImage()}
        </div>
      </>
    );
  }
}

export default SortingHat;
