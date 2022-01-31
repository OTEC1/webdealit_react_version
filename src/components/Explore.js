import React from 'react';
import styled from 'styled-components'
import ReactPlayer from 'react-player';
import Loader from 'react-loader-spinner';
import WriteUp from './WriteUps';
import { RiThumbUpFill, RiThumbUpLine } from 'react-icons/ri';
import { useState, useRef,useEffect} from 'react';
import Load from './Load';
import {updatePostlikes,format} from '../actions'
import {CloudinaryContext, Image, Transformation} from 'cloudinary-react'
import  {MobileView, BrowserView}  from 'react-device-detect';




const Explore  =  (props) => {

    document.title = props.title

    useEffect(()=>{
        window.scrollTo(0,0);
      },[])

    const [react, setReact] = useState(false);
    const [update, setUpdate] = useState(false);
    const imgRef = useRef();


    const reset =  (email, docA, docB) =>  {
        console.log(email, docA, docB);
        if(react){
            setReact(false);  setUpdate(false);
        }else{
            setReact(true); updatePostlikes(1,1,0,email,docA,docB); setUpdate(true);
        }
    } 

   

    return(
      <Container>

       <Content>
                           {props.frame === "Pictureframe" ? (
                                <div className='frame'>  
                                   <div>  


                                       <div  id='soap'>
                                           <table>
                                               <tr>
                                                   <td   onClick={() => reset(props.useremail,props.doc_id_a, props.doc_id_b)}>
                                                    {!react ?  <RiThumbUpLine  id='thumb'/> :  <RiThumbUpFill color='#4180FF'  id='thumb'/>}
                                                   </td>
                                               </tr>

                                               <tr>
                                                   <td>
                                                   <span>{update ?  parseInt(format(props.likes))+1 : format(props.likes)}</span>
                                                   </td>
                                               </tr>
                                           </table>
                                       </div>

                                    

                                        <MobileView>
                                            <CloudinaryContext cloudName="otecdealings">
                                                            <div>
                                                            <Image alt={props.title}  publicId={sessionStorage.getItem("cloud")} width="100%"  height="100%">
                                                                <Transformation  angle={props.exifData} />
                                                            </Image>
                                                            </div>
                                            </CloudinaryContext> 
                                        </MobileView>

                                        
                                        <BrowserView>
                                            <CloudinaryContext cloudName="otecdealings">
                                              <Image alt={props.title}  publicId={sessionStorage.getItem("cloud")} width="100%"  height="100%"/>
                                            </CloudinaryContext> 
                                        </BrowserView>

                                        <WriteUp title={props.title}  date_time={props.date_time}  writeup={props.writeup} User={props.useremail}/>
                                    </div>
                                </div>  
                                ):props.frame === "Videoframe" ? (
                                    <div className='frame'> 
                                     <div>

                                        <div  id='soap'>
                                            <table>
                                                <tr>
                                                    <td   onClick={() => reset(props.useremail,props.doc_id_a, props.doc_id_b)}>
                                                        {!react ?  <RiThumbUpLine  id='thumb'/> :  <RiThumbUpFill color='#4180FF'  id='thumb'/>}
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                    <span>{update ?  parseInt(props.likes)+1 : format(props.likes)}</span>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>

                                            <ReactPlayer  alt={props.title}   width="100%"  height="400px"  controls url={process.env.REACT_APP_APP_S3_VIDEO_BUCKET+props.media}  autoPlay />
                                            <WriteUp title={props.title}  date_time={props.date_time}  writeup={props.writeup} User={props.useremail}/>
                                     </div>
                                    </div>
                                  ):props.frame === "Playerframe" ? (
                                    <div className='frame'>  
                                      <div>
                                        <div  id='soap'>
                                            <table>
                                                <tr>
                                                    <td   onClick={() => reset(props.useremail,props.doc_id_a, props.doc_id_b)}>
                                                        {!react ?  <RiThumbUpLine  id='thumb'/> :  <RiThumbUpFill color='#4180FF'  id='thumb'/>}
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                    <span>{update ?  parseInt(format(props.likes))+1 : format(props.likes)}</span>
                                                    </td>
                                                </tr>
                                            </table>
                                         </div>

                                        <ReactPlayer  alt={props.title}   width="100%"  height="400px" controls url={props.media}  autoPlay/>
                                        <WriteUp title={props.title}  date_time={props.date_time}  writeup={props.writeup}  User={props.useremail}/>
                                      </div>
                                    </div>
                                ):(<p></p>)

                           }
        </Content>
        </Container>
      
    
    )

  
    
}


const Container = styled.div`
width: 100%;
margin-bottom:100px;
`;



const Content = styled.div`
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
width:80%;
margin:auto;
margin-top:40px;


img{
height: 400px;
width: 600px;
object-fit:cover;
}

.frame{
width: 60%;
height: auto;
margin-bottom:10px;
position: relative;
}



#soap{
position: absolute;
height: 70px;
width: 70px;
border-radius:50%;
background: #fff;
display: flex;
right:0;
margin-right:20px;
margin-top:-35px;
text-align:left;
justify-content:center;
align-items:center;
}

#thumb{
font-size:25pt;
cursor: pointer;
}



span{
display: flex;
text-align:center;
justify-content:center;
align-items:center;
}




@media(max-width:768px){
width: 100%;

.frame{
width: 100%;
margin: none;
}

img{
height: 300px;
width: 100%;
}


#soap{
height: 70px;
width: 70px;
margin-right:5px;
margin-top:-35px;
}
#thumb{
font-size:19pt;
}



span{
font-size:10pt;
}
}
`;


export default Explore;