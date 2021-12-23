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
