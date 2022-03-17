import styled  from "styled-components";
import Top from './Top'
import Bottom from "./Bottom";
import Ad from "./Ad";
import axios from "axios";
import { useEffect, useState } from "react";
import Load from './Load';
import Marquee from 'react-fast-marquee';
import {RiAmazonLine, RiBitCoinLine, RiCoinLine, RiPlug2Line, RiStore2Line} from 'react-icons/ri'
import {BiCreditCard} from 'react-icons/bi'
import {FaSyncAlt} from 'react-icons/fa'
import TwoTone from "./TwoTone";
import { useNavigate } from "react-router-dom";
import Helmet from 'react-helmet';


const Home = (props) => {

let list = [];
const history =  useNavigate();
const [L1, setL1] = useState([]);
const [L2, setL2] = useState([]);
const [L3, setL3] = useState([]);

useEffect(() => {
  axios.get(process.env.REACT_APP_GET_ALL_POST)
  .then(res => {
      list = (res.data.message);
      if(list.length>0)
        format(list); 
  }).catch(err => {
     console.log(err.message)
  });

  axios.get(process.env.REACT_APP_GET_HOMEPAGETOP_LIST)
      .then(res=>{
        setL3(res.data.message);
      })
      .catch(err=> {
        console.log(err);
      })


},[])



function format(list){
  let size = list.length/2;
  setL1(list.slice(0,size));
  setL2(list.slice(size,list.length));
}




const runner = (e) => {
  history("/model/"+e)

}

        return(
          <>
             <Helmet>
              <title>Home page</title>
              <meta name="description" content="Home page" />
              <meta name="robots" content="INDEX,FOLLOW" />
           </Helmet>

          <TwoTone/>  
          <Container>
            <TopHouseContainer>
                <div id="Online">
                    <span>Online Marchant </span>&nbsp; <BiCreditCard id="icon" /> 
                </div>

                <AdRunner>
                    <Marquee speed={100} gradient={false}>
                      {L3.map((v,i) => 
                      <Contains onClick={(e) => runner(v)}>
                      <FaSyncAlt/> &nbsp; {v} 
                      </Contains>
                      )}
                        
                    </Marquee> 
              </AdRunner>

          </TopHouseContainer>
          
             <Contain>
              {L1.length > 0 ? (
                <Top  post={L1}/>
                  ):
                  (
                    <div  id="loader">
                    <Load/>
                    </div>
                )}
             </Contain>
             <Ad/>  
            </Container>
            {L2.length > 0 ? ( 
            <Bottom data={L2}/>            
            ):<p></p>
           }
          
           
           </>    
    )
}
 


const Container = styled.div`
position: relative;
width: 100%;

::-webkit-scrollbar {
display: none;
}


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

const TopHouseContainer = styled.div`
width: 70%;
display: flex;
margin-right:auto;
margin-left:auto;
margin-top:141px;
height: 50px;

#Online{
display: flex;
justify-content:center;
align-items:center;
text-align:center;
font-size:10pt;
font-weight:700;
color: #f5f5f5;
font-family: "Poppins", sans-serif;
}

#icon{
font-size:20pt;
}
@media(max-width:768px){
width: 100%;
height: 40px;

span{
display: none;
}

#Online{
margin-left:-2px;
}

#icon{
font-size:40pt;

}

}

`;


const AdRunner = styled.div`
box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
width: 80%;
margin-left:auto;
display: flex;


@media(max-width:768px){
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
cursor: pointer;
`;




export default Home