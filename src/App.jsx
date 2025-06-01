import React from 'react'
import './App.css'
import TextInputFormContainer from './Components/TextInputFormContainer';

function App() {

  return (
    <div>
       <center><h1 className='font-semibold text-3xl'>Welcome to HangMan</h1></center>
       <TextInputFormContainer onSubmit={(value) => (console.log('value from ' , value))}/>
    </div>
  
  )
}

export default App;
