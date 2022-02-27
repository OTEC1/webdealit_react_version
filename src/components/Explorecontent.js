import  styled  from 'styled-components'
import Header from './Header'
import Ad from './Ad'
import { useParams } from 'react-router-dom'
import Loader from 'react-loader-spinner'
import axios from 'axios'
import { useEffect , useState } from 'react'
import Explore  from './Explore'
import TwoTone from './TwoTone'
import {formation} from '../actions'






 const Explorecontent = (props) => {
   
    let {frame,useremail,views,caller,doc_id_b} = useParams();
      
    const [doc_id_bs, setdoc_id_bs] = useState('');
    const [doc_id_a, setdoc_id_a] = useState('');
    const [title, settitle] = useState('');
    const [exifData, setexifData] = useState('');
    const [media, setMedia]= useState('');
    const [writeup , setwriteup] = useState('');
    const [likes, setlikes] = useState('');
    const [date_time, setdate_time]= useState('');
    const [cloud, setcloud] = useState('');
    const [viewer, setviewer] = useState(0);

    useEffect(()=>{
      window.scrollTo(0,0);

  
   
      if(caller === "p")
            axios.post(process.env.REACT_APP_GET_POST_LINK,{User:{useremail:useremail},UserPost:{doc_id_b:doc_id_b}})
                  .then(res => {
               
                     setdoc_id_bs(res.data.message.UserPost.doc_id_b)
                     setdoc_id_a(res.data.message.UserPost.doc_id_a)
                     settitle(res.data.message.UserPost.title);
                     setexifData(res.data.message.UserPost.exifData)
                     setMedia(res.data.message.UserPost.video ? res.data.message.UserPost.video : res.data.message.UserPost.image)
                     setwriteup(res.data.message.UserPost.writeup);
                     setlikes(res.data.message.UserPost.likes);
                     setdate_time(res.data.message.UserPost.date_time);
                     setviewer(res.data.message.UserPost.views)
                     setcloud(res.data.message.UserPost.cloudinaryPub);
                    
                  })
                  .catch(err => {
                     console.log(err);
                  })
    },[])
    return (
       <>
       <TwoTone/>
        <Container>
            <Navs/>
            <>
            {caller === "o" ?
           
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
                      cloud={sessionStorage.getItem("cloud")}
                      views={views}/> 
                    
                :(
                      <Explore frame={formation(frame.toLowerCase())} 
                              useremail={useremail}
                              doc_id_a={doc_id_a}
                              doc_id_b={doc_id_bs}
                              title={title}
                              exifData={exifData}
                              media={media}
                              writeup={writeup}
                              likes={likes}
                              date_time={date_time} 
                              cloud={cloud}
                              views={viewer}/> 
                )   
                }
                </>    
                 
        </Container>
        </>
     
    )
 }



 const Container = styled.div`
 position: relative;
 background-image: linear-gradient(to top right,#1f505f, #07091C);
 
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


