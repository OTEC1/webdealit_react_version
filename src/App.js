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
import SearchbyArtistsName from './components/SearchbyArtistsName';
import MusicResult from './components/MusicResult';
import Footer from './components/Footer';
import About  from './components/About'
import Connect  from './components/Connect'
import ETH from './components/ETH'


function App(props) {

useEffect(()=>{
props.getUserAuth();
},[]);

  return (
    <div className="App">
      <Router>

          <Routes>
          <Route  path="/musicquery/:query"  element={<Header/>}/>
          </Routes>

          <Routes>
           <Route  path="/musicquery/:query"  element={<Ad/>}/>
          </Routes>

          <Routes>
            <Route    path="/musicquery/:query" element={<SearchbyArtistsName/>}/>
          </Routes>

          <Routes>
            <Route    path="/musicquery/:query" element={<Footer/>}/>
          </Routes>

      





          <Routes>
            <Route  path="/musicquerylink/:query"  element={<Header/>}/>
          </Routes>

          <Routes>
            <Route  path="/musicquerylink/:query"  element={<Ad/>}/>
          </Routes>
          
          <Routes>
           <Route  path="/musicquerylink/:query" element={<MusicResult/>}/>
          </Routes>

          <Routes>
            <Route    path="/musicquerylink/:query" element={<Footer/>}/>
          </Routes>
     



          <Routes>
          <Route  path="/"  element={<Header/>}/>
          </Routes>


          <Routes>
          <Route  path="/"  element={<Ad/>}/>
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
           <Route  path="/user" element={<Footer/>}/>
          </Routes>
          





          <Routes>
           <Route   path="/auth" element={<Signin/>}/>
          </Routes>

          <Routes>
           <Route  path="/register" element={<Register/>}/>
          </Routes>




          <Routes>
          <Route  path="/streaming"  element={<Header/>}/>
          </Routes>

          <Routes>
          <Route  path="/streaming"  element={<Ad/>}/>
          </Routes>

          <Routes>
           <Route  path="/streaming" element={<Videoui/>}/>
          </Routes>


          <Routes>
           <Route  path="/streaming" element={<Footer/>}/>
          </Routes>





          <Routes>
          <Route  path="/music"  element={<Header/>}/>
          </Routes>

          <Routes>
          <Route  path="/music"  element={<Ad/>}/>
          </Routes>

          <Routes>
           <Route  path="/music" element={<Music/>}/>
          </Routes>

          <Routes>
           <Route  path="/music" element={<Footer/>}/>
          </Routes>



          <Routes>
          <Route  path="/about/:index1/:index2"  element={<Header/>}/>
          </Routes>

          <Routes>
          <Route  path="/about/:index1/:index2"  element={<Ad/>}/>
          </Routes>

          <Routes>
           <Route  path="/about/:index1/:index2" element={<About/>}/>
          </Routes>


          <Routes>
          <Route  path="/contact/:index1/:index2"  element={<Header/>}/>
          </Routes>

          <Routes>
          <Route  path="/contact/:index1/:index2"  element={<Ad/>}/>
          </Routes>

          <Routes>
           <Route  path="/contact/:index1/:index2" element={<Connect/>}/>
          </Routes>

          


          <Routes>
          <Route  path='/explorecontent/:frame/:useremail/:views/:caller/:doc_id_b'  element={<Header/>}/>
          </Routes>

          <Routes>
          <Route   path="/explorecontent/:frame/:useremail/:views/:caller/:doc_id_b"  element={<Ad/>}/>
          </Routes>

          <Routes>
            <Route   path="/explorecontent/:frame/:useremail/:views/:caller/:doc_id_b"  element={<Explorecontent/>}/>
          </Routes>

          <Routes>
            <Route   path="/explorecontent/:frame/:useremail/:views/:caller/:doc_id_b"  element={<Footer/>}/>
          </Routes>


          <Routes>
            <Route   path="/model/:mode"  element={<Header/>}/>
          </Routes>

          
          <Routes>
            <Route  path="/model/:mode"    element={<Ad/>}/>
          </Routes>

          
          <Routes>
            <Route   path="/model/:mode"   element={<ETH/>}/>
          </Routes>
          
          <Routes>
            <Route   path="/model/:mode"   element={<Footer/>}/>
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
  getUserAuth: () => dispatch(getUserAuth(window.sessionStorage.getItem("fbuser"), window.sessionStorage.getItem("SignInUser"))),
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
