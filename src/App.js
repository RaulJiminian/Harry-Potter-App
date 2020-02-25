import React from 'react';
import './App.css';
import HomePage from './screens/HomePage'
import SortingHat from './screens/SortingHat'
import Houses from './screens/Houses'
import Gryffindor from './screens/Gryffindor';
import HufflePuff from './screens/HufflePuff';
import Slytherin from './screens/Slytherin';
import RavenClaw from './screens/RavenClaw';
import {Switch, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">

      <div className='header'>
        <h1>Harry Potter</h1>
        <div className='nav'>
          <Link to={'/'}>Home </Link>
          <Link to= {'/sortingHat'}>Sorting Hat </Link>
          <Link to= {'/houses'}>Houses </Link>
        </div>
      </div>

      <main>
        <Switch>
          <Route exact path={'/'} component={HomePage} />
          <Route path={'/sortingHat'} component={SortingHat} />
          <Route exact path={'/houses'} component={Houses} />
          <Route path={'/houses/gryffindor'} component={Gryffindor} />
          <Route path={'/houses/ravenclaw'} component={RavenClaw} />
          <Route path={'/houses/slytherin'} component={Slytherin} />
          <Route path={'/houses/hufflepuff'} component={HufflePuff} />
        </Switch>
      </main>

      {/* <footer>
        <h1>Thanks for Visting</h1>
      </footer> */}
    </div>
  );
}

export default App;
