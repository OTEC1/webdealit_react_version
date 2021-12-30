import React from 'react';
import styled from 'styled-components'
import ReactPlayer from 'react-player';
import Loader from 'react-loader-spinner';



const Explore  =  (props) => {

    let lists = [];
    lists.push(props.post);
    return(
      <>
     
      {lists.length > 0 ? (  
       <Content>
           {lists.map((v,i) => (
                  
                              props.val === "Pictureframe" ? (
                                <div className='frame'>  
                                {v.UserPost !== undefined ? (
                                 <img src={process.env.REACT_APP_APP_S3_IMAGE_BUCKET+v.UserPost.image}/>
                                ):(<p></p>)}
                                   
                                </div>  
                                ):props.val === "Videoframe" ? (
                                    <div className='frame'>  
                                    <ReactPlayer url={process.env.REACT_APP_APP_S3_VIDEO_BUCKET}/>
                                    </div>
                                ):props.val === "Reactframe" ? (
                                    <div className='frame'>  
                                    <ReactPlayer url=""/>
                                    </div>
                                ):(<p></p>)
                    
                        )
                 )
            }
        </Content>):(<div></div>)
       }
     </>
    )
}



const Content = styled.div`
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
width:80%;
margin:auto;
margin-top:20px;


.frame{
width: 70%;
height: 400px;
margin-bottom:10px;
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