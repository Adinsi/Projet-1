import React from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import About from './pages/About';
import Accueil from './pages/Accueil';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Notfound from './pages/Notfound';
import './styles/App.css'




function App() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Accueil/>}/>
          <Route  path='/blog' element={<Blog />}/>
          <Route  path='/about' element={<About/>}/>
          <Route  path='/contact' element={<Contact />} />
          <Route path='/*' element={<Notfound/> }/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
