import styled from 'styled-components'
import axios from 'axios';
import { useEffect,useState,useRef} from 'react';
import Videochild from './Videochild';
import Loader from 'react-loader-spinner'
import Swal from 'sweetalert2';
import {CloudinaryContext, Image, cloudinary} from 'cloudinary-react'
import Header from './Header'
import Ad from './Ad'





 const Videoui = (props) => {

 

    const [list3, setList3] = useState([]); 
    const myref = useRef();


    useEffect(() => {
      axios.get(process.env.REACT_APP_MOVIES_CATEGORY)
      .then(res => {
        setList3(res.data.message)
      })
      .catch(err => {
        console.log(err);
      })

    },[])
   


  
    return (
     <Container>
        <Header/>
        <Ad/>
            {list3.length > 0 ? (
              <Videochild  post={list3.length > 0 ? list3 : []}/>
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
          
        </Container>
      
    )
 }



const Container = styled.div`
height: 100vh;
width: 100%;

#loader{
width: 100px;
height: 100px;
margin-left: auto;
margin-right:auto;
margin-top:25%;
}

img{
height: 200px;
width: 200px;

}


@media(max-width:768px){
#loader{
margin-top:55%;
} 

/* img{
max-width: none ;
margin-top: calc((202px - 42px)/2) ;
transform: rotate(270deg);
} */
}
}
`;


 export default Videoui;


