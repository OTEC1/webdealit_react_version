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
      <>
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
        </>
    )
 }



const Container = styled.div`
width: 100%;
background-image: linear-gradient(to top right,#D0DAf9, #f5f5f5);

#loader{
width: 100px;
height: 100px;
margin-left: auto;
margin-right:auto;
margin-top:25%;
}

@media(max-width:768px){
#loader{
margin-top:55%;
} 
}
}
`;


 export default Videoui;


