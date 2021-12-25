import styled  from "styled-components";
import Top from './Top'
import Bottom from "./Bottom";
import Ad from "./Ad";
import axios from "axios";
import { useEffect, useState } from "react";


const Home = (props) => {



const [list, setList] = useState([]);


useEffect(() => {
  axios.get('https://us-central1-grelot-c7a70.cloudfunctions.net/webdealitGetAllPost')
  .then(res => {
     // console.log(res.data.message);
      setList(res.data.message);
  }).catch(err => {
     console.log(err.message)
  });
  
},[])


        return(
        <Container>
             <Ad/>  
              <Contain>
                <Top  post={list.length > 0 ? list : []}/>
                <Bottom/>
              </Contain>
            </Container>
            
        )
}
 


const Container = styled.div`
width: 100%;
height: 100vh;
`;

const Contain = styled.div`
width: 80%;
margin:auto;
margin-top:151px;


@media(max-width:768px){
width: 100%;
}
`;


export default Home