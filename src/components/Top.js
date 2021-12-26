import styled  from "styled-components";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import ReactPlayer from "react-player";
import  {RiEyeFill, RiEyeLine, RiThumbUpFill, RiThumbUpLine, RiYoutubeLine } from 'react-icons/ri';

const Top = (props) => {
    
    var a  = 55; 
    return(<Container>


        
            <Leftside>
                    <Slider autoplay={1} previousButton="" nextButton="">
                       
                          {props.post.map((value, index) => 
                            value.UserPost.image ?
                             <div>
                               <img id="userImg" src={value.User.user_img}/>
                               <h5 id="userName">{value.User.username}</h5>
                               <img src={process.env.REACT_APP_APP_S3_IMAGE_BUCKET+value.UserPost.image} alt=""/>
                                 <label>{
                                    value.UserPost.writeup.length > a ?
                                    <div>{value.UserPost.writeup.toString().substring(0, a)} ...<span>Read more</span></div>
                                    :
                                     <div>{value.UserPost.writeup}</div>
                                     }
                                 </label>
                                <h2>{value.UserPost.date_time}</h2>

                                <div  id="Like">
                                 <RiThumbUpFill size={20}/>&nbsp;{value.UserPost.likes}
                                </div>

                                <div id="Views">
                                 <RiEyeFill   size={20}/>&nbsp;{value.UserPost.views}
                                </div>
                                
                              </div>
                              :
                              value.UserPost.video ?
                              <div>
                                <img id="userImg" src={value.User.user_img}/>
                                <h5 id="userName">{value.User.username}</h5>
                                 <img src={process.env.REACT_APP_APP_S3_THUMB_NAIL_BUCKET+value.UserPost.video.toString().replace(".mp4",".png")} alt=""/>
                                 <label>{
                                   value.UserPost.writeup.length > a ?
                                    <div>{value.UserPost.writeup.toString().substring(0, a)} ...<span>Read more</span></div>
                                     :
                                     <div>{value.UserPost.writeup}</div>
                                   }
                                 </label>
                                <h2>{value.UserPost.date_time}</h2>

                                <div  id="Like">
                                 <RiThumbUpFill size={20} />&nbsp;{value.UserPost.likes}
                                </div>

                                <div id="Views">
                                 <RiEyeFill   size={20}/>&nbsp;{value.UserPost.views}
                                </div>

                              </div>
                            :
                            value.UserPost.youtubeLink ?
                            <div>
                               <img id="userImg" src={value.User.user_img}/>
                               <h5 id="userName">{value.User.username}</h5>
                               <ReactPlayer  width="100%"  height="100%" url={value.UserPost.youtubeLink}  controls/>
                               <label>{
                                value.UserPost.writeup.length > a ?
                                <div>{value.UserPost.writeup.toString().substring(0, a)} ...<span>Read more</span></div>
                                 :
                                 <div>{value.UserPost.writeup}</div>
                                 }
                               </label>
                                <h2>{value.UserPost.date_time}</h2>

                               <div  id="Like">
                                 <RiThumbUpFill size={20}/>&nbsp;{value.UserPost.likes}
                                </div>

                                <div id="Views">
                                 <RiEyeFill   size={20}/>&nbsp;{value.UserPost.views}
                                </div>
                             </div>
                            :
                            <div></div>
                           )}
                       
                  </Slider>
            </Leftside>


            <Rightside>
               <RightMain>
                {props.post.map((value, index) => 
                 value.UserPost.image ? 
                    <div>
                       <div  id="Usercontainer">  
                         <img id="Img" src={value.User.user_img}/>
                          <h5 id="userName">{value.User.username}</h5>
                       </div>   
                    <img src={process.env.REACT_APP_APP_S3_IMAGE_BUCKET+value.UserPost.image} alt=""/>  

                    <div  id="React">
                       <div  id="Like">
                        <RiThumbUpFill size={20}/>&nbsp;{value.UserPost.likes}
                       </div>

                       <div id="Views">
                        <RiEyeFill   size={20}/>&nbsp;{value.UserPost.views}
                       </div>
                    </div>

                       <div  id="YO">
                           {
                           value.UserPost.writeup.length > a ?
                           <div>{value.UserPost.writeup.toString().substring(0, a)} ...<span>Read more</span></div>
                           :
                           <div>{value.UserPost.writeup}</div>
                            }
                        </div>
                    </div>                         
                     : value.UserPost.video ?
                     <div>
                       <div  id="Usercontainer">  
                         <img id="Img" src={value.User.user_img}/>
                          <h5 id="userName">{value.User.username}</h5>
                       </div>                      
                      <img src={process.env.REACT_APP_APP_S3_THUMB_NAIL_BUCKET+value.UserPost.video.toString().replace(".mp4",".png")} alt=""/>  
                      
                      <div  id="React">
                       <div  id="Like">
                        <RiThumbUpFill size={20}/>&nbsp;{value.UserPost.likes}
                       </div>

                        <div id="Views">
                        <RiEyeFill   size={20}/>&nbsp;{value.UserPost.views}
                        </div>
                      </div>
                      
                      <div  id="YO">
                          {
                          value.UserPost.writeup.length > a ?
                          <div>{value.UserPost.writeup.toString().substring(0, a)} ...<span>Read more</span></div>
                          :
                          <div>{value.UserPost.writeup}</div>
                          }

                      </div>


                      <div  id="React">
                      <div  id="Like">
                        <RiThumbUpFill size={20}/>&nbsp;{value.UserPost.likes}
                       </div>

                      <div id="Views">
                        <RiEyeFill   size={20}/>&nbsp;{value.UserPost.views}
                       </div>
                      </div>
                    </div>
                     : value.UserPost.youtubeLink ?
                   <div>
                      <div  id="Usercontainer">  
                        <img id="Img" src={value.User.user_img}/>
                         <h5 id="userName">{value.User.username}</h5>
                      </div>    
                     <ReactPlayer style={{marginLeft:"5px"}} width="97%"  height={300}  url={value.UserPost.youtubeLink} alt=""/>  
                     <div  id="YO">
                       {
                       value.UserPost.writeup.length > a ?
                       <div>{value.UserPost.writeup.toString().substring(0, a)} ...<span>Read more</span></div>
                       :
                       <div>{value.UserPost.writeup}</div>
                      }

                     </div>


                    <div  id="React">
                      <div  id="Like">
                        <RiThumbUpFill size={20}/>&nbsp;{value.UserPost.likes}
                      </div>

                      <div id="Views">
                        <RiEyeFill   size={20}/>&nbsp;{value.UserPost.views}
                      </div>
                    </div>
                   </div>
                   : <div></div>           
                  )}
                </RightMain>
           

             <RightBottom>
                 
                    {props.post.map((value, index) =>  value.UserPost.image ? 
                      <BottomChild>
                        <img id="BottomUserImage" src={value.User.user_img}/>
                        <label>{value.User.username}</label>
                        <img src={process.env.REACT_APP_APP_S3_IMAGE_BUCKET+value.UserPost.image} alt=""/>  
                      
                        <div  id="YO">{
                           value.UserPost.writeup.length > a ?
                           <div>{value.UserPost.writeup.toString().substring(0, a)} ...<span>Read more</span></div>
                           :
                           <div>{value.UserPost.writeup}</div>
                            }
                        </div>


                       <div  id="React">
                         <div  id="Like">
                        <RiThumbUpFill size={20}/>&nbsp;{value.UserPost.likes}
                         </div>

                        <div id="Views">
                          <RiEyeFill   size={20}/>&nbsp;{value.UserPost.views}
                         </div>
                      </div>
                      </BottomChild>                           
                     :
                    <div></div>      
                     )}
                  
                    
                </RightBottom>
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
text-shadow: 2px 2px #4180FF;

`;



const Leftside = styled.div`
width: 50%;
height: 70vh;
margin-top:0px;

#userName{
position: absolute;
left: 11%;
top: 5%;
color: #fff;
}


#userImg{
position: absolute;
border-radius:50%;
height: 24px;
width:24px;
margin:20px;
}


img{
width: 100%;
height: 100%;
object-fit: cover;
}

div{
width: 100%;
height: 100%;
text-align:left;
}


h2{
position: absolute;
bottom: 50px;
font-size:9pt;
color: #fff;
left: 2%;
text-shadow: 2px 2px #4180FF;
}

#Like{
position: absolute;
bottom: 20px;
height: 20px;
width: 200px;
font-size:9pt;
color: #fff;
left: 20%;
align-items:center;
display: flex;
margin:0;
text-shadow: 2px 2px #4180FF;
justify-content: flex-start;
}


#Views{
position: absolute;
bottom: 20px;
width: 200px;
height: 20px;
font-size:9pt;
color: #fff;
left: 2%;
margin-left: 0px;
align-items:center;
display: flex;
margin:0;
text-shadow: 2px 2px #4180FF;
justify-content: flex-start;
}


label{
text-align:left;
position: absolute;
bottom: 70px;
left: 2%;
max-width: 90%;
max-height:100px;
overflow: hidden;
font-weight:800;
color: #ffffff;
font-size:25px;
text-shadow: 2px 2px #4180FF;
}


span{
font-weight:400;
font-size:15pt;
}
@media(max-width:768px){
width: 100%;

}



@media(max-width:768px){
height: 50vh;
}
`;


const Rightside = styled.div`
width: 50%;
height: 70vh;
margin-top:0px;


@media(max-width:768px){
width: 100%;
margin-top:10px;
}

`;


const RightMain = styled.div`
overflow-x:scroll;
height: 50%;
width: 100%;
position: relative;

::-webkit-scrollbar {
  width: 7px;
  height: 100%;
  background: none;
}
 
::-webkit-scrollbar-thumb {
  background-color: #4180FF;
  outline: 1px solid slategrey;
  border-radius:12px;
}


#React{
position: relative;
margin-top: -30px;
width: 40%;
height: 20px;
font-size:10px;
float: right;
margin-right:15px;
align-items:left;
bottom: 0;
color:#fff;

}


#Like{
float: left;
display: flex;
margin:0;
align-items:center;
text-align:center;
justify-content: flex-start;
}

#Views{
float: right;
padding-right:10px;
display: flex;
margin:0;
align-items:center;
text-align:center;
justify-content: flex-start;
}

#YO{
position: relative;
margin-top: -60px;
float:left;
left: 15px;
width: 70%;
font-weight:800;
color: #ffffff;
font-size:15px;
text-shadow: 2px 2px #4180FF;
text-align:left;
}

#Usercontainer{
position: absolute;
height: auto;
width:150px;
margin:5px;
text-align:left;
}



label{
text-align:left;
width: 90%;
height: 150px;
max-height:100px;
overflow: hidden;
font-weight:200;
color: #ffffff;
font-size:20px;
text-shadow: 2px 2px #4180FF;
}



#Img{
border-radius:50%;
height: 24px;
width:24px;
margin: 10px;
}


img{
width: 97%;
height:300px;
object-fit:cover;
}




#userName{
position: absolute;
margin-left: 28%;
top: 27%;
color: #fff;
}


@media(max-width:768px){
#YO{
position: relative;
margin-top: -70px;
}
}


`;





const RightBottom = styled.div`
height: 50%;
width: 100%;
overflow-x:scroll;
top:7px;
text-align:left;


::-webkit-scrollbar {
  display: none;
}
 
::-webkit-scrollbar-thumb {
  display: none;
}


img{
width: 100%;
height: 100%;
object-fit:cover;
}
`;



const BottomChild = styled.div`
width: 250px;
height: 150px;
display: inline-block;
margin: 7px;
position: relative;



#BottomUserImage{
position: absolute;
width: 24px;
height: 24px;
border-radius:50%;
margin-top: 10px;
margin-left:10px;
}


label{
position: absolute;
margin-left:40px;
margin-top:15px;
font-size:9pt;
color: #fff;
}



#YO{
position: absolute;
width: 70%;
height: 10px;
bottom: 50px;
left: 10pt;
font-size:10pt;
color: #fff;
}




#React{
position: absolute;
width: 50%;
bottom: 0px;
right: 0px;
font-size:10pt;
color: #fff;


}



#Like{
float: left;
display: flex;
margin:0;
align-items:center;
text-align:center;
justify-content: flex-start;
}

#Views{
float: right;
padding-right:10px;
display: flex;
margin:0;
align-items:center;
text-align:center;
justify-content: flex-start;
}


@media(max-width:768px){
width: 45%;

#YO{
font-size:8pt;
}
}


`;





export default Top