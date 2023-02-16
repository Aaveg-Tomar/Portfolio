import React from 'react';
import { useState } from "react";
import { BrowserRouter , Routes , Route , Link} from 'react-router-dom';
import Contact from './compotents/Contact'
import Home from './Home'


function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </BrowserRouter>
      </>

    );
 
}

export default App;