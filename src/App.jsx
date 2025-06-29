import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import TextInputFormContainer from './Components/TextInputFormContainer';
import StartGame from './Components/Pages/startGame/startGame';
import PlayGames from './Components/Pages/playGames/playGames';

function App() {

  return (
    <div>
       {/* <center><h1 className='font-semibold text-3xl'>Welcome to HangMan</h1></center>
       <TextInputFormContainer onSubmit={(value) => (console.log('value from ' , value))}/> */}

       <Routes>
        <Route path="/" element={ <div>Hello welcome</div>} />
        <Route path="/start" element={<StartGame />} />
        <Route path="/play" element={<PlayGames />} />
       </Routes>
    </div>
  
  )
}

export default App;
