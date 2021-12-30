import styled  from "styled-components";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
import  {RiEyeFill, RiEyeLine, RiThumbUpFill, RiThumbUpLine, RiLiveFill } from 'react-icons/ri';

const Top = (props) => {
    
    var a  = 55; 

    const history = useNavigate();

    const navigates = (val,em,doc) =>{
      history('/explorecontent/'+val+"/"+em+"/"+doc)
    }
    return(<Container>
            <Leftside>
              <RiLiveFill id="live"  size={20}  color="red"/> <h4>Video feeds</h4>
                    <Slider autoplay={1} previousButton="" nextButton="">
                          {props.post.map((value, index) => 
                            value.UserPost.image ?
                             <div onClick={(e) => navigates("Pictureframe",value.User.useremail, value.UserPost.doc_id_b)}>
                               <img id="userImg" src={value.User.user_img} />
                               <h5 id="userName">{value.User.username}</h5>
                               <img src={process.env.REACT_APP_APP_S3_IMAGE_BUCKET+value.UserPost.image} alt=""/>
                                 <label>{
                                    value.UserPost.writeup.length > a ?
                                    <div>{value.UserPost.writeup.toString().substring(0, a)} ...<span>Read more</span></div>
                                        :
                                     <div>{value.UserPost.writeup}</div>
                                     }
                                 </label>
                            
                            
                                <div  id="Like">
                                 <RiThumbUpFill size={20}/>&nbsp;{value.UserPost.likes}
                                </div>

                                <div id="Views">
                                 <RiEyeFill   size={20}/>&nbsp;{value.UserPost.views}
                                </div>
                                
                              </div>
                              :
                              value.UserPost.video ?
                              <div onClick={(e) => navigates("Videoframe",value.User.useremail, value.UserPost.doc_id_b)}>
                                <img id="userImg" src={value.User.user_img}/>
                                <h5 id="userName">{value.User.username}</h5>
                                 <img src={process.env.REACT_APP_APP_S3_THUMB_NAIL_BUCKET+value.UserPost.video.toString().replace(".mp4",".png")} alt=""  />
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
                            <div onClick={(e) => navigates("Playerframe",value.User.useremail, value.UserPost.doc_id_b)}>
                               <img id="userImg" src={value.User.user_img}/>
                               <h5 id="userName">{value.User.username}</h5>
                               <ReactPlayer  width="100%"  height="100%" url={value.UserPost.youtubeLink}  controls  />
                               <label>{
                                value.UserPost.writeup.length > a ?
                                <div>{value.UserPost.writeup.toString().substring(0, a)} ...<span>Read more</span></div>
                                 :
                                 <div>{value.UserPost.writeup}</div>
                                 }
                               </label>
                                

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
              <MobileAds/>
              <h4>Gist feed</h4>
               <RightMain>
                {props.post.map((value, index) => 
                 value.UserPost.image ? 
                    <div  id="RightHouse">
                       <div  id="Usercontainer">  
                         <img id="Img" src={value.User.user_img}  alt=""/>
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
                     <div  id="ReactPayer">
                        <ReactPlayer  style={{marginLeft:"5px"}} width="100%"  height="100%"  url={value.UserPost.youtubeLink} alt=""/>  
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
                   : <div></div>           
                  )}
                </RightMain>
           

                <MobileAds/>
                <h4>Week line up</h4>
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

h4{
float: left;
margin: 5px;
font-weight:600;

}

#live{
margin:5px;
float: left;
}
`;



const Leftside = styled.div`
width: 50%;
height: 65vh;
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



#Like{
position: absolute;
bottom: 20px;
height: 24px;
width: 70px;
font-size:9pt;
color: #828282;
background: #fff;
left: 20%;
align-items:center;
display: flex;
padding-left: 5px;
padding-bottom:5px;
justify-content: flex-start;
text-shadow:none;
border-radius:5px 5px 0px 0px;

}


#Views{
position: absolute;
bottom: 20px;
width: 95px;
height: 24px;
font-size:9pt;
color: #828282;
background: #fff;
left: 2%;
padding-left: 5px;
align-items:center;
display: flex;
text-shadow:none;
border-radius:0px 0px 5px 5px;
justify-content: flex-start;
padding-bottom:5px;
}


label{
text-align:left;
position: absolute;
bottom: 55px;
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
height: 40vh;
margin-bottom:20px;

#userName{
left: 14%;
top: 6.5%;
}

#Like{
width: 70px;
}

#Views{
width: 70px;
}

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
width: 22%;
height: 24px;
font-size:10px;
float: right;
margin-right:15px;
align-items:left;
bottom: 0;
background-color:#fff;
border-radius:5px 0px 5px 0px;


}


#Like{
float: left;
display: flex;
margin:0;
align-items:center;
text-align:center;
justify-content: flex-start;
padding-bottom:3px;
padding-left:5px;
color: #828282;
text-shadow:none;
width: 52px;
}

#Views{
float: right;
display: flex;
margin:0;
align-items:center;
text-align:center;
justify-content: flex-start;
padding-left:10px;
color: #828282;
width: 50px;
text-shadow:none;
padding-bottom:3px;
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
height:220px;
object-fit:cover;
}



#ReactPayer{
height: 300px;
width: 97%;
}

#userName{
position: absolute;
margin-left: 28%;
top: 27%;
color: #fff;
}


@media(max-width:768px){
margin-top:20px;
display: flex;
overflow: auto;
height: 65%;


::-webkit-scrollbar {
display: none;
}
#RightHouse{
flex-wrap: nowrap;  
margin-left:15px;
}

img{
width: 300px;
height: 300px;
}


#ReactPayer{
height: 300px;
width: 300px !important;
}


#React{
width: 40.3%;
background: #fff;
}

#Like{
width: 55.5px;
}

#YO{
position: relative;
margin-top: -80px;
}
}
`;




const MobileAds = styled.div`
display: none;
height: 200px;
width: 100%;
margin-top:15px;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

@media(max-width:768px){
display: block;
}

`;




const RightBottom = styled.div`
height: 37.5%;
width: 100%;
overflow-x:scroll;
display: flex;
flex-wrap:wrap;
align-items:center;


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


@media(max-width:768px){
height: 50%;
}
`;



const BottomChild = styled.div`
width: 47%;
height: 170px;
margin: 6px;
position: relative;
text-align:left;



#BottomUserImage{
position: absolute;
width: 20px;
height: 20px;
border-radius:50%;
margin-top: 10px;
margin-left:8px;
}


label{
position: absolute;
margin-left:35px;
margin-top:12px;
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





@media(max-width:768px){
width:44%;
margin: 10px;

#YO{
font-size:8pt;
}
}


`;





export default Top