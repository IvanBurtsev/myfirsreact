import React from'react';
import './App.css';
import { Route, Routes }  from 'react-router-dom';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

function App() {
  return (
    
    <div className='app-wrapper'> 
     <Header /> 
     <Navbar/>
     <div className='app-wrapper-content'>         
      <Routes>
      <Route path="/dialogs/*"  element={<Dialogs/>}  />
      <Route path="/content" element={<Content/>} />
      <Route path="/news" element={<News/>} />
      <Route path="/music" element={<Music/>} />
      <Route path="/settings" element={<Settings/>} />
      </Routes>
    </div>
  </div> 
  );
}

export default App;
