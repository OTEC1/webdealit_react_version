import  styled  from 'styled-components'
import Header from './Header'
import Ad from './Ad'
import { useParams } from 'react-router-dom'
import Loader from 'react-loader-spinner'
import axios from 'axios'
import { useEffect , useState } from 'react'
import Explore  from './Explore'




 const Explorecontent = (props) => {


   
    let {frame,useremail,doc_id_a,doc_id_b,title,exifData,image,writeup} = useParams();
      
    return (
       <>
        <Container>
            <Navs/>
            <Explore  frame={frame} 
                      useremail={useremail}
                      doc_id_a={sessionStorage.getItem("doc_id_a")}
                      doc_id_b={sessionStorage.getItem("doc_id_b")}
                      title={sessionStorage.getItem("title")}
                      exifData={sessionStorage.getItem("exifData")}
                      media={sessionStorage.getItem("media")}
                      writeup={sessionStorage.getItem("writeup")}
                      likes={sessionStorage.getItem("likes")}
                      date_time={sessionStorage.getItem("date_time")}
                      cloud={sessionStorage.getItem("cloud")}/>    
        </Container>
        </>
    )
 }



 const Container = styled.div`
 
 
 
 `;

const Navs = styled.div`
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
height:10vh;
width:80%;
margin:auto;
margin-top:170px;



@media(max-width:768px){
width: 100%;
margin: none;
overflow: hidden;
}

`;


 export default Explorecontent;


