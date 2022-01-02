import React from 'react';
import styled from 'styled-components'
import ReactPlayer from 'react-player';
import Loader from 'react-loader-spinner';
import WriteUp from './WriteUps';
import { RiThumbUpFill, RiThumbUpLine } from 'react-icons/ri';
import { useState } from 'react';
import Load from './Load';
import {updatePostlikes,format} from '../actions'




const Explore  =  (props) => {


    const [react, setReact] = useState(false);
    const [update, setUpdate] = useState(false);
    


    const reset =  (email, docA, docB) =>  {
        
        if(react){
            setReact(false);  setUpdate(false);
        }else{
            setReact(true); updatePostlikes(1,1,0,email,docA,docB); setUpdate(true);
        }
    } 

    let lists = [];
    lists.push(props.post);
    return(
      <Container>
     
      {lists.length > 0 ? (  
       <Content>
           {lists.map((v,i) => (
                              props.val === "Pictureframe" ? (
                                <div className='frame'>  
                                {v.UserPost !== undefined ? (
                                   <div>  


                                       <div  id='soap'>
                                           <table>
                                               <tr>
                                                   <td   onClick={() => reset(v.User.useremail,v.UserPost.doc_id_a, v.UserPost.doc_id_b)}>
                                                    {!react ?  <RiThumbUpLine  id='thumb'/> :  <RiThumbUpFill color='#4180FF'  id='thumb'/>}
                                                   </td>
                                               </tr>

                                               <tr>
                                                   <td>
                                                   <span>{update ?  parseInt(format(v.UserPost.likes))+1 : format(v.UserPost.likes)}</span>
                                                   </td>
                                               </tr>
                                           </table>
                                       </div>


                                        <img src={process.env.REACT_APP_APP_S3_IMAGE_BUCKET+v.UserPost.image}/>
                                        <WriteUp val={v.UserPost}/>
                                    </div>
                                     ):( 
                                     <Load/>
                                     )}
                                </div>  
                                ):props.val === "Videoframe" ? (
                                    <div className='frame'> 
                                    {v.UserPost !== undefined ? (
                                     <div>

                                        <div  id='soap'>
                                            <table>
                                                <tr>
                                                    <td   onClick={() => reset(v.User.useremail,v.UserPost.doc_id_a, v.UserPost.doc_id_b)}>
                                                        {!react ?  <RiThumbUpLine  id='thumb'/> :  <RiThumbUpFill color='#4180FF'  id='thumb'/>}
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                    <span>{update ?  parseInt(v.UserPost.likes)+1 : format(v.UserPost.likes)}</span>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>

                                            <ReactPlayer  width="100%"  height="400px"  controls url={process.env.REACT_APP_APP_S3_VIDEO_BUCKET+v.UserPost.video}   />
                                            <WriteUp val={v.UserPost}/>
                                     </div>
                                    ):( 
                                     <Load/>
                                    )}
                                    </div>
                                ):props.val === "Playerframe" ? (
                                    <div className='frame'>  
                                     {v.UserPost !== undefined ? (
                                      <div>
                                        <div  id='soap'>
                                            <table>
                                                <tr>
                                                    <td   onClick={() => reset(v.User.useremail,v.UserPost.doc_id_a, v.UserPost.doc_id_b)}>
                                                        {!react ?  <RiThumbUpLine  id='thumb'/> :  <RiThumbUpFill color='#4180FF'  id='thumb'/>}
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                    <span>{update ?  parseInt(format(v.UserPost.likes))+1 : format(v.UserPost.likes)}</span>
                                                    </td>
                                                </tr>
                                            </table>
                                         </div>

                                        <ReactPlayer   width="100%"  height="400px" controls url={v.UserPost.youtubeLink} />
                                        <WriteUp val={v.UserPost}/>
                                      </div>
                                     ):( 
                                      <Load/>
                                    )}
                                    </div>
                                ):(<p></p>)
                    
                        )
                 )
            }
        </Content>):(<div></div>)
       }
        </Container>
      
    
    )

  
    
}


const Container = styled.div`
width: 100%;
height: 100vh;
margin-bottom:100px;





`;



const Content = styled.div`
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
width:80%;
margin:auto;
margin-top:40px;



.frame{
width: 60%;
height: auto;
margin-bottom:10px;
position: relative;
}



#soap{
position: absolute;
height: 100px;
width: 100px;
border-radius:50%;
background: #fff;
display: flex;
right:0;
margin-right:105px;
margin-top:-35px;
text-align:left;
justify-content:center;
align-items:center;
}

#thumb{
font-size:25pt;
cursor: pointer;
}

img{
height:500px;
width: 80%;
object-fit:cover;
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