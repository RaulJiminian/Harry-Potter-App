import React from 'react';
import './App.css';
import Container from './components/Container'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>


      <main>
        <div className='header'>
          <h1>Harry Potter</h1>
          <div className='nav'>
            <Link to={'/'}>Home </Link>
            <Link to={'/sortingHat'}>Sorting Hat </Link>
            <Link to={'/houses'}>Houses </Link>
            <Link to={'/organizations'}>Organizations </Link>
          </div>
        </div>
        <Container />
      </main>

      {/* <footer>
        <h1>Thanks for Visting</h1>
      </footer> */}
    </>
  );
}

export default App;
