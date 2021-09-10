import React from 'react';
//style
import {GlobalStyle} from './GlobalStyle'
//Header
import Header from './components/Header/';
//Home
import Home from './components/Home';
//Router
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Movie from './components/Movie'
import NotFound from './components/NotFound'


function App() {
  return (
    <Router>

      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:movieId' element={<Movie/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
     
       <GlobalStyle/>
    </Router>
    
       
   
  );
}

export default App;
