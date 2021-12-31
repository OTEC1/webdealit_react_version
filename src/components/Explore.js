import React from 'react';
import styled from 'styled-components'
import ReactPlayer from 'react-player';
import Loader from 'react-loader-spinner';
import WriteUp from './WriteUps';




const Explore  =  (props) => {

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
                                        <img src={process.env.REACT_APP_APP_S3_IMAGE_BUCKET+v.UserPost.image}/>
                                        <WriteUp val={v.UserPost}/>
                                    </div>
                                ):( 
                                    <div  className='spinner'>
                                    <Loader
                                    type="Oval"
                                    color="#4180FF"
                                    height={100}
                                    width={100}
                                /></div>)}
                                   
                                </div>  
                                ):props.val === "Videoframe" ? (
                                    <div className='frame'> 
                                    {v.UserPost !== undefined ? (
                                    <div>
                                         <ReactPlayer  width="100%"  height="400px"  controls url={process.env.REACT_APP_APP_S3_VIDEO_BUCKET+v.UserPost.video}   />
                                         <WriteUp val={v.UserPost}/>
                                    </div>
                                     
                                    ):( 
                                    <div  className='spinner'>
                                     <Loader
                                        type="Oval"
                                        color="#4180FF"
                                        height={100}
                                        width={100}
                                    />
                                    </div>)}
                                    </div>
                                ):props.val === "Playerframe" ? (
                                    <div className='frame'>  
                                     {v.UserPost !== undefined ? (
                                    <div>
                                        <ReactPlayer   width="100%"  height="400px" controls url={v.UserPost.youtubeLink} />
                                        <WriteUp val={v.UserPost}/>
                                    </div>
                                 
                                     ):( 
                                     <div  className='spinner'>
                                          <Loader
                                            type="Oval"
                                            color="#4180FF"
                                            height={100}
                                            width={100}
                                        />
                                     </div>
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

.spinner{
position:absolute;
margin-left: auto;
margin-right:auto;
width: 80%;
height: auto;
margin-top:15%;
text-align:center;
}


`;



const Content = styled.div`
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
width:80%;
margin:auto;
margin-top:20px;



.frame{
width: 70%;
height: auto;
margin-bottom:10px;
}

img{
height:500px;
width: 80%;
object-fit:cover;
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
}
`;


export default Explore;