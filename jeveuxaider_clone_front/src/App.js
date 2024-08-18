import React from 'react'
import {Routes, Route } from "react-router-dom"
import { BrowserRouter } from 'react-router-dom';
import Accueil from './components/accueil';
function App() {
  return (
    // <>
    //   <Mynavbar/>
    //   <Banner/>
    ////<Route  path ="*" element = { <Page_404 /> } />
    // </>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Accueil />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
