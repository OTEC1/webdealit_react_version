import styled from 'styled-components'
import axios from 'axios';
import { useEffect,useState,useRef} from 'react';
import Videochild from './Videochild';
import Loader from 'react-loader-spinner'
import Swal from 'sweetalert2';
import {CloudinaryContext, Image, cloudinary} from 'cloudinary-react'
import Header from './Header'
import Ad from './Ad'
import Load from './Load';
import TwoTone from './TwoTone';





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
     <TwoTone/>
     <Container>
            {list3.length > 0 ? (
              <Videochild  post={list3.length > 0 ? list3 : []}/>
                ):
                (
                  <div  id="loader">
                  <Load/>
                  </div>
                )}  
           
        </Container>
       
        </>
    )
 }



const Container = styled.div`
position: relative;
width: 100%;
top: 0;



#loader{
width: 100px;
height: 100px;
height: 200px;
margin-top:20%;
text-align:center;
margin-left:auto;
margin-right:auto;
}

@media(max-width:768px){
#loader{
margin-top:55%;
} 
}
}
`;





 export default Videoui;


