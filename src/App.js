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
import Dropshipping from './components/Dropshipping';
import Explorecontent from './components/Explorecontent'
import Usercontentpage from './components/UsercontentPage'
import Player from './components/Player'

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
           <Route  path="/" element={<Home/>}/>
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
           <Route  path="/Streaming" element={<Videoui/>}/>
          </Routes>



          <Routes>
           <Route  path="/Music" element={<Music/>}/>
          </Routes>

          <Routes>
           <Route  path="/dropshipping" element={<Dropshipping/>}/>
          </Routes>

          <Routes>
            <Route  path='/explorecontent/:val/:em/:doc'  element={<Explorecontent/>}/>
          </Routes>

          <Routes>
            <Route  path='/UserPage'  element={<Usercontentpage/>}></Route>
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
