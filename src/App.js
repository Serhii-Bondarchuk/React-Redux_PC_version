import React, {useRef, useState} from 'react'
import {Provider, connect} from 'react-redux'

import State from './components/State'





function App(props) {

  return (
   
    <div className="mainBox" id='main'>

      <h1>Programm </h1>
           
         <br/>

         <State  />
    </div>
  
  );
}

export default connect(null, null) (App)
