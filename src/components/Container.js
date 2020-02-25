import React, { Component } from 'react';
import axios from 'axios'
import HomePage from '../screens/HomePage'
import SortingHat from '../screens/SortingHat'
import Houses from '../screens/Houses'
import Gryffindor from '../screens/Gryffindor';
import HufflePuff from '../screens/HufflePuff';
import Slytherin from '../screens/Slytherin';
import RavenClaw from '../screens/RavenClaw';
import Organzations from '../screens/Organzations'
import { Switch, Route } from 'react-router-dom'

const Token_1 = process.env.REACT_APP_HARRY_POTTER_TOKEN_1
const Token_2 = process.env.REACT_APP_HARRY_POTTER_TOKEN_2
const Token_3 = process.env.REACT_APP_HARRY_POTTER_TOKEN_3

const HOUSES_API = `https://www.potterapi.com/v1/houses?key=$${Token_1}$${Token_2}$${Token_3}`;

const CHARACTER_API = `https://www.potterapi.com/v1/characters?key=$${Token_1}$${Token_2}$${Token_3}`

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gryffindor: {},
      hufflepuff: {},
      ravenclaw: {},
      slytherin: {},
      characters: [],
      isLoading: false
    };
  }

  componentDidMount() {
    this.getHouses()
    this.getCharacter()
  }

  async getHouses() {
    try {

      const response = await axios.get(HOUSES_API)

      this.setState({
        gryffindor: response.data[0],
        ravenclaw: response.data[1],
        slytherin: response.data[2],
        hufflepuff: response.data[3]
      })

    } catch (error) {

      console.log('Error')
    }
  }

  async getCharacter() {
    try {

      const response = await axios.get(CHARACTER_API)

      this.setState({
        characters: response.data,
        isLoading: true
      })

    } catch (error) {

      console.log('Error')
    }
  }

  render() {

    const { gryffindor, ravenclaw, slytherin, hufflepuff, characters, isLoading } = this.state

    return (
      <main>
        <Switch>
          <Route exact path={'/'} component={HomePage} />
          <Route path={'/sortingHat'} component={SortingHat} />
          <Route exact path={'/houses'} component={Houses} />

          {
            isLoading ?
              <Route
                path={'/houses/gryffindor'}
                render={() => <Gryffindor
                  data={gryffindor}
                  characters={characters}
                />}
              /> : null
          }

          {
            isLoading ?
              <Route
                path={'/houses/hufflepuff'}
                render={() => <HufflePuff
                  data={hufflepuff}
                  characters={characters} />}
              /> :
              null
          }

          {
            isLoading ?
              <Route
                path={'/houses/slytherin'}
                render={() => <Slytherin
                  data={slytherin}
                  characters={characters} />}
              /> :
              null
          }

          {
            isLoading ?
              <Route
                path={'/houses/ravenclaw'}
                render={() => <RavenClaw
                  data={ravenclaw}
                  characters={characters} />}
              /> :
              null
          }

          {
            isLoading ?
              <Route
                path={'/organizations'}
                render={() => <Organzations
                  characters={characters} />}
              /> :
              null
          }

        </Switch>
      </main>
    );
  }
}

export default Container;
