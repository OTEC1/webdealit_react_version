import React,{Component, useEffect} from 'react';
import './App.css';
import { getUserAuth } from './actions';
import {BrowserRouter as  Router,Route, Routes}  from 'react-router-dom';
import Header from './components/Header';
import User from './components/User'
import Home from './components/Home';
import Signin from './components/Signin';
import Register from './components/Register';
import { connect } from 'react-redux';
import Videoui from './components/Videosui';
import Music from './components/Music'
import Explorecontent from './components/Explorecontent'
import Player from './components/Player'
import Ad from './components/Ad';

function App(props) {

useEffect(()=>{
props.getUserAuth();
},[]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route  path="/"  element={<Header/>}/>
          </Routes>
          <Routes>
          <Route  path="/user"  element={<Ad/>}/>
          </Routes>
          
          <Routes>
           <Route  path="/" element={<Home/>}/>
          </Routes>



          <Routes>
          <Route  path="/user"  element={<Header/>}/>
          </Routes>
          <Routes>
          <Route  path="/user"  element={<Ad/>}/>
          </Routes>
          <Routes>
           <Route  path="/user" element={<User/>}/>
          </Routes>





          <Routes>
           <Route   path="/auth" element={<Signin/>}/>
          </Routes>

          <Routes>
           <Route  path="/register" element={<Register/>}/>
          </Routes>


          <Routes>
          <Route  path="/Streaming"  element={<Header/>}/>
          </Routes>
          <Routes>
          <Route  path="/Streaming"  element={<Ad/>}/>
          </Routes>
          <Routes>
           <Route  path="/Streaming" element={<Videoui/>}/>
          </Routes>





          <Routes>
          <Route  path="/Music"  element={<Header/>}/>
          </Routes>
          <Routes>
          <Route  path="/Music"  element={<Ad/>}/>
          </Routes>
          <Routes>
           <Route  path="/Music" element={<Music/>}/>
          </Routes>




          <Routes>
          <Route  path='/explorecontent/:frame/:useremail'  element={<Header/>}/>
          </Routes>
          <Routes>
          <Route   path="/explorecontent/:frame/:useremail"  element={<Ad/>}/>
          </Routes>
          <Routes>
            <Route   path="/explorecontent/:frame/:useremail/"  element={<Explorecontent/>}/>
          </Routes>

        

     


          <Routes>
            <Route  path='/player/:url'  element={<Player/>}></Route>
          </Routes>
      </Router>
    </div>
  );
}



const mapStateToProps = (dispatch) => {
  return {};
};



const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
