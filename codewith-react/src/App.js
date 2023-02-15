
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/welcome';
import Message from './components/Message';
import Hello from './components/Hello';
import Counter from './components/Counter';
import React from 'react';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Person from './components/Person';
import KeyExample from './components/KeyExample';
import Stylesheets from './components/Stylesheets';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';


function App() {
  // With JSX
   return (
   <div className="App" >

      <Form />
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <Inline /> */}
      {/* <Stylesheets primary={true}/> */}
      {/* <KeyExample /> */}
      {/* <Person />
      <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <ClassClick /> */}
      {/* <FunctionClick /> */}
      {/* <Counter /> */}
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
