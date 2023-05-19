import React from'react';
import './App.css';
import { Route, Routes }  from 'react-router-dom';


import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import Dialogs from './components/Dialogs/Dialogs';


function App() {
  return (
    
    <div className='app-wrapper'> 
     <Header /> 
     <Navbar/>
     <div className='app-wrapper-content'>
         
      <Routes>
      <Route path="/dialogs"  element={<Dialogs/>}  />
      <Route path="/content" element={<Content/>} />
      </Routes>
    </div>
  </div>
 
  );
}
export default App;
