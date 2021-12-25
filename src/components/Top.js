import styled  from "styled-components";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import ReactPlayer from "react-player";


const Top = (props) => {
     console.log(props.post)
    
    return(<Container>


        
            <Leftside>
                    <Slider autoplay={1} previousButton="" nextButton="">
                       
                          {props.post.map((value, index) => 
                            value.UserPost.image ?
                            <img src={process.env.REACT_APP_APP_S3_IMAGE_BUCKET+value.UserPost.image} alt=""/>
                            :
                            value.UserPost.video ?
                            <img src={process.env.REACT_APP_APP_S3_THUMB_NAIL_BUCKET+value.UserPost.video.toString().replace(".mp4",".png")} alt=""/>
                            :
                            value.UserPost.youtubeLink ?
                            <div>
                            <ReactPlayer  style={{width:"100%"}}  height="100%" url={value.UserPost.youtubeLink}  controls/>
                            </div>
                            :
                            <div></div>
                           )}
                       
                  </Slider>
            </Leftside>


            <Rightside>



            </Rightside>
        </Container>
    )
}



const Container = styled.div`
height: auto;
width: 100%;
text-align:center;
display: flex;
flex-wrap: wrap;
`;



const Leftside = styled.div`
width: 50%;
height: 70vh;


img{
width: 100%;
height: 100%;
object-fit: cover;
}

div{
width: 100%;
height: 100%;
object-fit: cover;
}
@media(max-width:768px){
width: 100%;

}
`;


const Rightside = styled.div`
width: 50%;
height: 70vh;
background: blue;

@media(max-width:768px){
width: 100%;
}

`;





export default Top