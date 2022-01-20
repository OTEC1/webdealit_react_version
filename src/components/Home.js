import styled  from "styled-components";
import Top from './Top'
import Bottom from "./Bottom";
import Ad from "./Ad";
import axios from "axios";
import { useEffect, useState } from "react";
import Load from './Load';
import Marquee from 'react-fast-marquee';
import {RiAmazonLine, RiBitCoinLine, RiCoinLine, RiPlug2Line, RiStore2Line} from 'react-icons/ri'
import TwoTone from "./TwoTone";


const Home = (props) => {

const [list, setList] = useState([]);

useEffect(() => {
  axios.get(process.env.REACT_APP_GET_ALL_POST)
  .then(res => {
      setList(res.data.message);
  }).catch(err => {
     console.log(err.message)
  });
  
},[])


        return(
          <>
        <TwoTone/>  
        <Container>

          <AdRunner>
             <Marquee speed={100}>
                <Contains>
                  <RiBitCoinLine/> Bitcoin rate  
                </Contains>

                <Contains>
                  <RiStore2Line/> Exchange merchant 
                </Contains>

                <Contains>
                  <RiCoinLine/> NFT trends 
                </Contains>

                <Contains>
                  <RiAmazonLine/> Gift card 
                </Contains>
            </Marquee>  
          </AdRunner>

             <Contain>
             {list.length > 0 ? (
              <Top  post={list.length > 0 ? list : []}/>
              ):
              (
                <div  id="loader">
                 <Load/>
                </div>
              )}
              <Bottom/>
             </Contain>
             <Ad/>  
            </Container>  
            </>      
    )
}
 


const Container = styled.div`
position: relative;
width: 100%;



#loader{
margin-right: auto;
margin-left:auto;
height: 200px;
margin-top:10%;
width: 200px;
text-align:center;
}

@media(max-width:768px){
#loader{
margin-top:50%;
height: auto;
} 
}


@media(max-width:768px){
overflow-y: scroll;
}
`;



const AdRunner = styled.div`
box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
height: 70px;
width: 70%;
margin-top:141px;
margin-left:auto;
margin-right:auto;

@media(max-width:768px){
width: 100%;
}

`;


const Contain = styled.div`
width: 70%;
margin:auto;
margin-top:10px;

@media(max-width:768px){
width: 100%;
}
`;




const Contains = styled.div`
font-size:1em;
display: flex;
justify-content:center;
align-items:center;
text-align:center;
background: #f5f5f5;
border-radius:5px;
padding: 5px;
margin:10px;
font-family: "Poppins", sans-serif;
`;


export default Home