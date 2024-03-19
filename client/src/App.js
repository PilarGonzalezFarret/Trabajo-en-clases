import React, {useEffect} from 'react';
import {Route, Routes, BrowserRouter, useNavigate } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio></Inicio>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
