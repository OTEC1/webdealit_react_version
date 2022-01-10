import styled  from "styled-components";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
import  {RiEyeFill, RiEyeLine, RiThumbUpFill, RiThumbUpLine, RiLiveFill, RiArrowLeftCircleLine, RiArrowRightCircleLine } from 'react-icons/ri';
import { useEffect, useRef, useState } from "react";
import { updatePostlikes, format } from "../actions";
import {CloudinaryContext, Image, Transformation} from 'cloudinary-react'
import  {MobileView, BrowserView}  from 'react-device-detect';






const Top = (props) => {
    
    var a  = 55; 

    const history = useNavigate();
    const [scrollPostion, setScrollPosition] = useState(0);
    const myref = useRef(null);
    const imgRef = useRef();
    

    const navigates = (val,em,doc,docB) =>{
      updatePostlikes(1,0,1,em,doc,docB);
      history('/explorecontent/'+val+"/"+em+"/"+docB);
    }


    const  onScroll  = () => {
      const scrollY = window.scrollY 
      const scrollTop = myref.current.scrollTop
      console.log(`onScrollY, ${scrollY} myRef: ${scrollTop}`)
    }


    const UserPage = () => {
       history("/UserPage")
    }

    useEffect(() => {
      handelScrollPosition();
      console.log("Call")
    },[])


  const handelScrollPosition = () => {
      const scroll = sessionStorage.getItem("scrollPoint");
      if(scroll){
        console.log(scroll,"SCR")
        window.scrollTo(0,parseInt(scroll));
        sessionStorage.removeItem("scrollPoint");
      }
    };
  

    const handleClick = e => {
      console.log(window.pageYOffset ,"SCP")
      sessionStorage.setItem("scrollPoint", window.pageYOffset);
    }



    return(<Container>
            <Leftside>
              <RiLiveFill id="live"  size={20}  color="red"/> <h4>Explore feeds</h4>
                    <Slider autoplay={1} previousButton={<RiArrowLeftCircleLine  color="red"/>} nextButton={<RiArrowRightCircleLine color="red"/>}>
                          {props.post.map((value, index) => 
                            value.UserPost.image ?
                             <div>
                              {value.User.user_img === "icons" ? <h1>{value.User.useremail.substring(0,1).toUpperCase()}</h1> : "" }
                               <img id="userImg" src={value.User.user_img !== "icons" ?  value.User.user_img : "images/customSignInbackground.png"} onClick={UserPage}/>
                               <h5 id="userName">{value.User.username}</h5>
                              
                              <MobileView>
                                 <CloudinaryContext cloudName="otecdealings">
                                    <div>
                                      <Image publicId={value.UserPost.cloudinaryPub} width="100%" height="400px">
                                        <Transformation  angle={value.UserPost.exifData} />
                                      </Image>
                                    </div>
                                  </CloudinaryContext>
                              </MobileView>

                                <BrowserView>
                                  <CloudinaryContext cloudName="otecdealings">
                                        <div>
                                          <Image publicId={value.UserPost.cloudinaryPub} width="100%" height="570px"/>
                                        </div>
                                  </CloudinaryContext>
                                </BrowserView>
                                

                                


                                 <label onClick={(e) => navigates("Pictureframe",value.User.useremail,value.UserPost.doc_id_a, value.UserPost.doc_id_b)}>{
                                    value.UserPost.writeup.length > a ?
                                    <div>{value.UserPost.writeup.toString().substring(0, a)} ...<span>Read more</span></div>
                                        :
                                     <div>{value.UserPost.writeup}  <span>See more &nbsp;</span></div>
                                     }
                                 </label>
                            
                            
                                <div  id="Like">
                                 <RiThumbUpFill size={20}/>&nbsp; {format(value.UserPost.likes)}
                                </div>

                                <div id="Views">
                                 <RiEyeFill   size={20}/>&nbsp; {format(value.UserPost.views)}
                                </div>
                                
                              </div>
                              :
                              value.UserPost.video ?
                              <div>
                                 {value.User.user_img === "icons" ? <h1>{value.User.useremail.substring(0,1).toUpperCase()}</h1> : "" }
                                <img id="userImg" src={value.User.user_img !== "icons" ?  value.User.user_img : "images/customSignInbackground.png"} onClick={UserPage}/>
                                <h5 id="userName">{value.User.username}</h5>
                                 
                                <MobileView>
                                  <CloudinaryContext cloudName="otecdealings">
                                      <div>
                                        <Image publicId={value.UserPost.cloudinaryPub} width="100%"  height="100%">
                                          <Transformation  angle={value.UserPost.exifData} />
                                        </Image>
                                      </div>
                                    </CloudinaryContext>
                                  </MobileView>

                                  <BrowserView>
                                    <CloudinaryContext cloudName="otecdealings">
                                        <div>
                                          <Image publicId={value.UserPost.cloudinaryPub} width="100%"  height="100%"/>
                                        </div>
                                      </CloudinaryContext>
                                    </BrowserView>


                                  

                                 
                                 <label   onClick={(e)=> navigates("Videoframe",value.User.useremail, value.UserPost.doc_id_a, value.UserPost.doc_id_b)}>{
                                   value.UserPost.writeup.length > a ?
                                    <div>{value.UserPost.writeup.toString().substring(0, a)} ...<span>Read more</span></div>
                                     :
                                     <div>{value.UserPost.writeup} <span>See more</span></div>
                                   }
                                 </label>


                                <h2>{value.UserPost.date_time}</h2>

                                <div  id="Like">
                                 <RiThumbUpFill size={20} />&nbsp;{format(value.UserPost.likes)}
                                </div>

                                <div id="Views">
                                 <RiEyeFill   size={20}/>&nbsp;{format(value.UserPost.views)}
                                </div>

                              </div>
                            :
                            value.UserPost.youtubeLink ?
                            <div>
                                {value.User.user_img === "icons" ? <h1>{value.User.useremail.substring(0,1).toUpperCase()}</h1> : "" }
                               <img id="userImg" src={value.User.user_img !== "icons" ?  value.User.user_img: "images/customSignInbackground.png"}  onClick={UserPage}/>
                               <h5 id="userName">{value.User.username}</h5>

                               <ReactPlayer  width="100%"  height="100%" url={value.UserPost.youtubeLink}  controls  />
                               <label  onClick={(e)=> navigates("Playerframe",value.User.useremail,value.UserPost.doc_id_a, value.UserPost.doc_id_b)}>{
                                value.UserPost.writeup.length > a ?
                                <div>{value.UserPost.writeup.toString().substring(0, a)} ...<span>Read more</span></div>
                                 :
                                 <div>{value.UserPost.writeup} <span>See more</span></div>
                                 }
                               </label>
                                

                               <div  id="Like">
                                 <RiThumbUpFill size={20}/>&nbsp;{format(value.UserPost.likes)}
                                </div>

                                <div id="Views">
                                 <RiEyeFill   size={20}/>&nbsp;{format(value.UserPost.views)}
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
               <RightMain    ref={myref}  onScroll={onScroll}>
                {props.post.map((value, index) => 
                 value.UserPost.image ? 
                    <div  id="RightHouse">

                       <div  id="Usercontainer">  
                          {value.User.user_img === "icons" ? <h1>{value.User.useremail.substring(0,1).toUpperCase()}</h1> : "" }
                          <img id="Img" src={value.User.user_img !== "icons" ?  value.User.user_img : "images/customSignInbackground.png"}  alt=""  onClick={UserPage} />  
                          <h5 id="userName">{value.User.username}</h5>
                       </div>  


                      <MobileView>
                          <CloudinaryContext cloudName="otecdealings">
                                        <div>
                                          <Image publicId={value.UserPost.cloudinaryPub} width="100%"  height="100%">
                                            <Transformation  angle={value.UserPost.exifData} />
                                          </Image>
                                        </div>
                          </CloudinaryContext> 
                       </MobileView>

                       <BrowserView>
                         <CloudinaryContext cloudName="otecdealings">
                                        <div>
                                          <Image publicId={value.UserPost.cloudinaryPub} width="100%"  height="100%"/>
                                        </div>
                          </CloudinaryContext> 
                        </BrowserView>

                            
                       

                       <div  id="React">
                         <div  id="Like">
                          <RiThumbUpFill size={20}/>&nbsp;{format(value.UserPost.likes)}
                         </div>

                         <div id="Views">
                         <RiEyeFill   size={20}/>&nbsp;{format(value.UserPost.views)}
                         </div>
                      </div>

                       <div  id="YO"   onClick={(e)=>navigates("Pictureframe",value.User.useremail, value.UserPost.doc_id_a, value.UserPost.doc_id_b)}>
                           {
                           value.UserPost.writeup.length > a ?
                           <div>{value.UserPost.writeup.toString().substring(0, a)} ...<span>Read more</span></div>
                           :
                           <div>{value.UserPost.writeup} <span>See more</span></div>
                            }
                        </div>
                    </div>                         
                     : value.UserPost.video ?
                      <div>

                        <div  id="Usercontainer"> 
                          {value.User.user_img === "icons" ? <h1>{value.User.useremail.substring(0,1).toUpperCase()}</h1> : "" } 
                          <img id="Img" src={value.User.user_img !== "icons" ?  value.User.user_img : "images/customSignInbackground.png"}  onClick={UserPage}/>
                          <h5 id="userName">{value.User.username}</h5>
                        </div>   

                          <MobileView>
                            <CloudinaryContext cloudName="otecdealings">
                                        <div>
                                          <Image publicId={value.UserPost.cloudinaryPub} width="100%"  height="100%">
                                            <Transformation  angle={value.UserPost.exifData} />
                                          </Image>
                                        </div>
                            </CloudinaryContext>
                            </MobileView>

                            <BrowserView>
                              <CloudinaryContext cloudName="otecdealings">
                                          <div>
                                            <Image publicId={value.UserPost.cloudinaryPub} width="100%"  height="100%"/>
                                          </div>
                              </CloudinaryContext>
                            </BrowserView>



                      <div  id="React">
                       <div  id="Like">
                        <RiThumbUpFill size={20}/>&nbsp;{format(value.UserPost.likes)}
                       </div>

                        <div id="Views">
                        <RiEyeFill   size={20}/>&nbsp;{format(value.UserPost.views)}
                        </div>
                       </div>
                      
                      <div  id="YO"  onClick={(e)=>navigates("Videoframe",value.User.useremail, value.UserPost.doc_id_a, value.UserPost.doc_id_b)}>
                          {
                          value.UserPost.writeup.length > a ?
                          <div>{value.UserPost.writeup.toString().substring(0, a)} ...<span>Read more</span></div>
                          :
                          <div>{value.UserPost.writeup} <span>See more</span></div>
                          }
                      </div>


                      <div  id="React">
                       <div  id="Like">
                        <RiThumbUpFill size={20}/>&nbsp;{format(value.UserPost.likes)}
                       </div>

                         <div id="Views">
                          <RiEyeFill   size={20}/>&nbsp;{format(value.UserPost.views)}
                         </div>
                      </div>

                    </div>
                     : value.UserPost.youtubeLink ?
                        <div>
                            <div  id="Usercontainer">  
                            {value.User.user_img === "icons" ? <h1>{value.User.useremail.substring(0,1).toUpperCase()}</h1> : "" }
                              <img id="Img" src={value.User.user_img !== "icons" ?  value.User.user_img : "images/customSignInbackground.png"} onClick={UserPage}/>
                              <h5 id="userName">{value.User.username}</h5>
                            </div>  

                            <div  id="ReactPayer">
                                <ReactPlayer   width="100%"  height="100%"  url={value.UserPost.youtubeLink} alt=""/>  
                            </div>
                          
                          
                          <div  id="YO"  onClick={(e)=>navigates("Playerframe",value.User.useremail, value.UserPost.doc_id_a, value.UserPost.doc_id_b)}>
                            {
                            value.UserPost.writeup.length > a ?
                            <div>{value.UserPost.writeup.toString().substring(0, a)} ...<span>Read more</span></div>
                            :
                            <div>{value.UserPost.writeup}<span>See more</span></div>
                            }
                          </div>


                          <div  id="React">
                            <div  id="Like">
                              <RiThumbUpFill size={20}/>&nbsp;{format(value.UserPost.likes)}
                            </div>

                            <div id="Views">
                              <RiEyeFill   size={20}/>&nbsp;{format(value.UserPost.views)}
                            </div>
                          </div>

                        </div>
                   : <div></div>           
                  )}
                </RightMain>
           

                <MobileAds/>
                  <h4 id="Week">Weekly lineup</h4>
                   <RightBottom onScroll={onScroll}  ref={myref}>
                    {props.post.map((value, index) =>  value.UserPost.image ? 
                      <BottomChild>

                        <img id="BottomUserImage" src={value.User.user_img !== "icons" ? value.User.user_img : "images/customSignInbackground.png"} onClick={UserPage} />
                        {value.User.user_img === "icons" ? <h1>{value.User.useremail.substring(0,1).toUpperCase()}</h1> : "" }


                        <label>{value.User.username}</label>
                          
                          
                          <MobileView>
                              <CloudinaryContext cloudName="otecdealings">
                                <Image  width="310" height="270" publicId={value.UserPost.cloudinaryPub}  alt=""  onClick={(e) => navigates("Pictureframe",value.User.useremail, value.UserPost.doc_id_a, value.UserPost.doc_id_b)}>
                                   <Transformation  angle={value.UserPost.exifData} />
                                </Image>
                              </CloudinaryContext>
                           </MobileView>
                           
                           <BrowserView>
                            <CloudinaryContext cloudName="otecdealings">
                                  <Image  width="220" height="250" publicId={value.UserPost.cloudinaryPub}  alt=""  onClick={(e) => navigates("Pictureframe",value.User.useremail, value.UserPost.doc_id_a, value.UserPost.doc_id_b)}/>
                              </CloudinaryContext>
                            </BrowserView>


                          <div  id="YO"  onClick={handleClick}>{
                            value.UserPost.writeup.length > a ?
                            <div>{value.UserPost.writeup.toString().substring(0, a)} ...<span>Read more</span></div>
                             :
                            <div>{value.UserPost.writeup} <span>See more</span></div>
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
height: 87.5vh;
margin-top:0px;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

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
cursor: pointer;
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
width: 100px;
font-size:9pt;
color: #828282;
background: #fff;
left: 0%;
align-items:center;
display: flex;
padding-left: 5px;
padding-bottom:5px;
justify-content: flex-start;
text-shadow:none;
}


#Views{
position: absolute;
bottom: 20px;
width: 95px;
height: 24px;
font-size:9pt;
color: #828282;
background: #fff;
left: 15%;
padding-left: 5px;
align-items:center;
display: flex;
text-shadow:none;
border-radius:0px 5px 5px 0px;
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
font-size:10pt;
}

h1{
position: absolute;
margin-left: 28.5px;
margin-top:22px;
font-weight:700;
font-size:10pt;
color:#fff;
font-family: "Poppins", sans-serif;
z-index:200;
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
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;



@media(max-width:768px){
width: 100%;
margin-top:10px;
}

`;


const RightMain = styled.div`
overflow-x:scroll;
height: 55%;
width: 100%;
position: relative;
margin-bottom:27px;




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
margin-right:6px;
align-items:left;
bottom: 0;
background-color:#fff;
border-radius:5px 0px 0px 5px;
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
padding-top:2px;
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
padding-top:2px;
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


span{
font-weight:400;
font-size:7pt;
}


#Img{
border-radius:50%;
height: 24px;
width:24px;
margin: 10px;
cursor: pointer;
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

h1{
position: absolute;
margin-left: 18.5px;
margin-top:12px;
font-weight:700;
font-size:10pt;
color:#fff;
font-family: "Poppins", sans-serif;
}

@media(max-width:768px){
margin-top:20px;
display: flex;
overflow: auto;
height: 65%;
margin-bottom:0px;


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

.imgID{
  margin: 5px;
}

#ReactPayer{
margin: 5px;
height: 300px;
width: 300px !important;
}


#React{
width: 41%;
background: #fff;
margin-right:4px;
margin-top: -35px;
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
height: 60%;
width: 100%;
overflow-y:scroll;
display: flex;
flex-wrap:nowrap;
align-items:center;



#Week{
top:70px;
}

::-webkit-scrollbar {
  display: none;
}
 
::-webkit-scrollbar-thumb {
  display: none;
}




@media(max-width:768px){
margin-top:0px;
}
`;



const BottomChild = styled.div`
width: auto;
height: auto;
position: relative;
text-align:left;
margin:10px;




#BottomUserImage{
position: absolute;
width: 20px;
height: 20px;
border-radius:50%;
margin-top: 10px;
margin-left:8px;
cursor: pointer;
}

label{
position: absolute;
margin-left:35px;
margin-top:12px;
font-size:9pt;
color: #fff;
}



span{
font-weight:400;
font-size:7pt;
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


h1{
position: absolute;
margin-left: 14px;
margin-top:10px;
font-weight:700;
font-size:10pt;
color:#fff;
font-family: "Poppins", sans-serif;
}



@media(max-width:768px){
#YO{
font-size:8pt;
}
}


`;





export default Top