import styled  from "styled-components";
import Top from './Top'
import Bottom from "./Bottom";
import Ad from "./Ad";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from 'react-loader-spinner';


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
        <Container>

          <AdRunner>

          </AdRunner>

             <Contain>
             {list.length > 0 ? (
              <Top  post={list.length > 0 ? list : []}/>
              ):
              (
                <div  id="loader">
                 <Loader
                  type="Oval"
                  color="#4180FF"
                  height={100}
                  width={100} 
                 />
                </div>
              )}
              <Bottom/>
             </Contain>
             <Ad/>  
            </Container>        
    )
}
 


const Container = styled.div`
width: 100%;
height: 100vh;


#loader{
margin-right: auto;
margin-left:auto;
height: 200px;
margin-top:25%;
width: 200px;
text-align:center;
}

@media(max-width:768px){
#loader{
margin-top:90%;
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


export default Home