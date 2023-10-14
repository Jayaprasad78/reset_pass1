import React from 'react';

import  Resetpassword from './components/reset-pass';
import Error from './components/error';

import { Routes, Route } from 'react-router-dom';
import './App.css';



const App=()=>{
  return(
    <>


  

    <Routes>
        <Route path="/" element={<Resetpassword />} />
        <Route path="*"element={<Error/>} />
    </Routes>

   

    </>
    


  )
    
}


export default  App;