
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/welcome';
import Message from './components/Message';
import Hello from './components/Hello';
import Counter from './components/Counter';
import React from 'react';

function App() {
  // With JSX
   return (
   <div className="App" >

      <Counter />
      {/* <Greet name="Bruce" heroName="Batman">
        <p>the first Greet method</p>
      </Greet>
      <Greet name="clark" heroName="superman">
        <button>Action</button>
      </Greet>
      <Greet name="Diana" heroName="wonder women"/>

       <Welcome name="Bruce" heroName="Batman"/>
       <Welcome name="clark" heroName="superman"/>
       <Welcome name="Diana" heroName="wonder women"/> */}

       {/* <Message /> */}

      {/* <Hello /> */} 
    </div>
   );

  //Without JSX
  return React.createElement('div', null, React.createElement('h1', null, 'Hello Leena'))
}

export default App;
