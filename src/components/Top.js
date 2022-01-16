import styled  from "styled-components";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
import  {RiEyeFill, RiEyeLine, RiThumbUpFill, RiThumbUpLine, RiLiveFill, RiArrowLeftCircleLine, RiArrowRightCircleLine, RiTv2Line, RiCodeView, RiSendPlaneLine, RiSendPlane2Line, RiSendPlaneFill } from 'react-icons/ri';
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
    

    const UserPage = () => {
      history("/UserPage")
   }

   useEffect(() => {
     handelScrollPosition();
     console.log("Call")
   },[])



   const  onScrollRecoder  = () => {
    //const scrollY = window.scrollY 
    const scrollTop = myref.current.scrollTop
    sessionStorage.setItem("scrollPoint", scrollTop);
    console.log(`OnScrollY: ${scrollTop}`)
  }

    const navigates = (val,em,doc,docB) =>{
      updatePostlikes(1,0,1,em,doc,docB);
      history('/explorecontent/'+val+"/"+em+"/"+docB);
      console.log(sessionStorage.getItem("scrollPoint"));
    }


  const handelScrollPosition = () => {
      const scroll = sessionStorage.getItem("scrollPoint");
      if(scroll){
        console.log(scroll,"Got scroll Point")
        window.scrollTo(0,parseInt(scroll));
        sessionStorage.removeItem("scrollPoint");
      }
    };
  

 



    return(<Container>
             <TopSection>
                <TopLeftinnerDiv>
                  <SectionTab>
                    <RiLiveFill   size={20}  color="red"/> <h4>Explore feeds</h4>
                  </SectionTab>
                  
                  <Slider autoplay={1} 
                          previousButton={<RiArrowLeftCircleLine
                          color="red"/>} nextButton={<RiArrowRightCircleLine color="red"/>}>
                          {props.post.map((value, index) => 
                            value.UserPost.image ?
                            <div>
                              <PosterDetails>
                                 <img id="userImg" src={value.User.user_img !== "icons" ?  
                                    value.User.user_img : "images/customSignInbackground.png"} onClick={UserPage}/>
                                &nbsp;&nbsp;
                                {value.User.useremail}
                              </PosterDetails>


                                    <BrowserView>
                                        <CloudinaryContext cloudName="otecdealings">
                                              <div>
                                                <Image height="500"  width="500" publicId={value.UserPost.cloudinaryPub}/>
                                              </div>
                                        </CloudinaryContext>
                                    </BrowserView>

                                    <MobileView>
                                         <CloudinaryContext cloudName="otecdealings">
                                                <Image height="500"  width="100%" publicId={value.UserPost.cloudinaryPub}>
                                                   <Transformation  angle={value.UserPost.exifData} />
                                                 </Image>
                                        </CloudinaryContext>
                                    </MobileView>
                                     
                                 

                                    <WriteUp onClick={(e)=> navigates("Pictureframe",value.User.useremail,value.UserPost.doc_id_a, value.UserPost.doc_id_b)}>
                                        {
                                        value.UserPost.writeup.length > a ?
                                        <div>{value.UserPost.writeup.toString().substring(0, a)} ...<span>Read more</span></div>
                                        :
                                        <div>{value.UserPost.writeup} <RiSendPlaneFill/></div>
                                        }
                                    </WriteUp>

                                    <Reactions>
                                     <RiThumbUpFill size={20}/>&nbsp;{format(value.UserPost.likes)}
                                     <RiEyeFill   size={20}/>&nbsp;{format(value.UserPost.views)}
                                    </Reactions>
                            </div>
                              :
                            value.UserPost.video ?
                            <div>

                              <PosterDetails>
                                 <img id="userImg" src={value.User.user_img !== "icons" ?  
                                    value.User.user_img : "images/customSignInbackground.png"} onClick={UserPage}/>
                                &nbsp;&nbsp;
                                {value.User.useremail}
                              </PosterDetails>

                                <BrowserView>
                                      <CloudinaryContext cloudName="otecdealings">
                                              <Image height="500"  width="500" publicId={value.UserPost.cloudinaryPub}/>
                                      </CloudinaryContext>
                                </BrowserView>


                                <MobileView>
                                     <CloudinaryContext cloudName="otecdealings">
                                              <Image height="500"  width="100%" publicId={value.UserPost.cloudinaryPub}>
                                                  <Transformation  angle={value.UserPost.exifData} />
                                              </Image>
                                      </CloudinaryContext>
                                </MobileView>
                                     
                                 

                                    <WriteUp onClick={(e)=> navigates("Videoframe",value.User.useremail,value.UserPost.doc_id_a, value.UserPost.doc_id_b)}>
                                        {
                                        value.UserPost.writeup.length > a ?
                                        <div>{value.UserPost.writeup.toString().substring(0, a)} ...<span>Read more</span></div>
                                        :
                                        <div>{value.UserPost.writeup} <RiSendPlaneFill/></div>
                                        }
                                    </WriteUp>

                                    <Reactions>
                                     <RiThumbUpFill size={20}/>&nbsp;{format(value.UserPost.likes)}
                                     <RiEyeFill   size={20}/>&nbsp;{format(value.UserPost.views)}
                                    </Reactions>

                            </div>
                              :
                            value.UserPost.youtubeLink ?
                            <div>

                              <PosterDetails>
                                 <img id="userImg" src={value.User.user_img !== "icons" ?  
                                    value.User.user_img : "images/customSignInbackground.png"} onClick={UserPage}/>
                                &nbsp;&nbsp;
                                {value.User.useremail}
                              </PosterDetails>

                                  <ReactPlayer  width="100%"  height="100%" url={value.UserPost.youtubeLink}  controls  />

                                    <WriteUp onClick={(e)=> navigates("Playerframe",value.User.useremail,value.UserPost.doc_id_a, value.UserPost.doc_id_b)}>
                                        {
                                        value.UserPost.writeup.length > a ?
                                        <div>{value.UserPost.writeup.toString().substring(0, a)} ...<span>Read more</span></div>
                                        :
                                        <div>{value.UserPost.writeup} <span>See more</span></div>
                                        }
                                    </WriteUp>

                                    <Reactions>
                                     <RiThumbUpFill size={20}/>&nbsp;{format(value.UserPost.likes)}
                                     <RiEyeFill   size={20}/>&nbsp;{format(value.UserPost.views)}
                                    </Reactions>

                            </div>
                              :
                            <p></p>
                          )}
                  </Slider>
                </TopLeftinnerDiv>

                <AdRunner>

                </AdRunner>



                 <TopOuterDiv onScroll={onScrollRecoder} ref={myref}>      
                    <SectionTab>
                      <RiTv2Line   size={20}  color="red"/> <h4>Gist feed</h4>
                    </SectionTab>
                    <TopRightinnerDiv>
                      
                      {props.post.map((value, index) => 
                        value.UserPost.image ?
                                   <Locals>   
                                     <BrowserView>
                                        <CloudinaryContext cloudName="otecdealings">
                                              <div>
                                                <Image  width="100%"  height="200" publicId={value.UserPost.cloudinaryPub}/>
                                              </div>
                                        </CloudinaryContext>
                                      </BrowserView>

                                      <MobileView>
                                        <CloudinaryContext cloudName="otecdealings">
                                                <Image  width="100%"  height="300" publicId={value.UserPost.cloudinaryPub}>
                                                  <Transformation  angle={value.UserPost.exifData} />
                                                </Image>
                                        </CloudinaryContext>
                                      </MobileView>

                                    <RightSideWriteUp  
                                         onClick={(e)=> navigates("Pictureframe",value.User.useremail,value.UserPost.doc_id_a, value.UserPost.doc_id_b)}>
                                      {
                                        value.UserPost.writeup.length > a ?
                                        <div>{value.UserPost.writeup.toString().substring(0, a)} ...<span>Read more</span></div>
                                        :
                                        <div>{value.UserPost.writeup} <RiSendPlaneFill/></div>
                                      }
                                    </RightSideWriteUp>
                                  </Locals>
                                 :
                             value.UserPost.video ?
                         
                                <Locals>
                                  <BrowserView>
                                  <CloudinaryContext cloudName="otecdealings">
                                          <div>
                                            <Image   width="100%"  height="200" publicId={value.UserPost.cloudinaryPub}/>
                                          </div>
                                    </CloudinaryContext>

                                  </BrowserView>
                                   


                                    <MobileView>
                                        <CloudinaryContext cloudName="otecdealings">
                                                <Image  width="100%"  height="300" publicId={value.UserPost.cloudinaryPub}>
                                                   <Transformation  angle={value.UserPost.exifData} />
                                                </Image>
                                        </CloudinaryContext>
                                     </MobileView>


                                      <RightSideWriteUp  
                                          onClick={(e)=> navigates("Videoframe",value.User.useremail,value.UserPost.doc_id_a, value.UserPost.doc_id_b)}>
                                        {
                                        value.UserPost.writeup.length > a ?
                                        <div>{value.UserPost.writeup.toString().substring(0, a)} ...<span>Read more</span></div>
                                        :
                                        <div>{value.UserPost.writeup} <RiSendPlaneFill/></div>
                                         }
                                      </RightSideWriteUp>
                          
                                  </Locals>
                          :
                        value.UserPost.youtubeLink  ?
                        <Locals>
                          <ReactPlayer  width="100%"  height="100%" url={value.UserPost.youtubeLink}  controls  />

                          <RightSideWriteUpYoutube   
                            onClick={(e)=> navigates("Playerframe",value.User.useremail,value.UserPost.doc_id_a, value.UserPost.doc_id_b)}>
                             {
                              value.UserPost.writeup.length > a ?
                              <div>{value.UserPost.writeup.toString().substring(0, a)} ...<span>Read more</span></div>
                              :
                              <div>{value.UserPost.writeup} <RiSendPlaneFill/></div>
                             }
                          </RightSideWriteUpYoutube>
                        </Locals>
                        :
                      <p></p>
                      )}

                    </TopRightinnerDiv>
                </TopOuterDiv> 
              </TopSection>



        <BottomSection>

        </BottomSection>
         
        </Container>
    )
}



const Container = styled.div`
height: 80vh;
width: 98%;
text-align:center;
display: flex;
flex-wrap: wrap;
box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
padding: 10px;
@media(max-width:768px){
height: 58vh;
width: 100%;
padding: 0px;
}


`;



const TopSection = styled.div`
display: flex;
flex-wrap:wrap;
height: 65vh;
width: 100%;
text-shadow: 2px 2px #4180FF;
margin-top:0px;


@media(max-width:768px){
height: 75vh;
}

`;


const TopLeftinnerDiv = styled.div`
height: 100%;
width: 50%;

@media(max-width:768px){
width: 100%;
height: 60%;
}
`;

const SectionTab = styled.div`
text-align:left;
width: 45%;
height: 25px;
display: flex;
`;




const AdRunner = styled.div`
display: none;

@media(max-width:768px){
display: block;
box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
height: 220px;
width: 100%;
margin-left:auto;
margin-right:auto;
margin-top:100px;
}

`;






const PosterDetails = styled.div`
position: absolute;
padding:10px;
width: 20%;
height: 15px;
top: 0;
left:0;
color:#fff;
display: flex;


#userImg{
border-radius:50%;
height: 24px;
width:24px;
cursor: pointer;
}

`;



const WriteUp = styled.div`
position: absolute;
width: 80%;
height: 100px;
bottom: 0;
left:0;
margin-bottom:50px;
text-align:left;
padding: 5px;
color:#fff;
font-weight:900;
display: flex;
justify-content:space-between;
`;


const Reactions = styled.div`
position: absolute;
background: #fff;
border-radius: 0px 10px 10px 0px;
padding:5px;
width: 20%;
bottom: 0;
left:0;
display: flex;
justify-content:space-between;
color: #828282;
margin-bottom:10px;


@media(max-width:768px){
width: 30%; 
}
`;



const TopOuterDiv = styled.div`
height: 99%;
width: 50%;
justify-content:center;
overflow-y:scroll;
overflow-x:hidden;


::-webkit-scrollbar {
display: none;
}

@media(max-width:768px){
width: 100%;
height: 120%;
overflow-x:hidden;
}

`;


const TopRightinnerDiv = styled.div`
display: flex;
flex-wrap:wrap;
justify-content:center;


& > *:first-of-type{
width: 100%;
height: 250px;
margin: 5px;
}

`;



const Locals = styled.div`
width: 48%;
height: 200px;
margin: 2px;
font-size:10pt;
color:#fff;

@media(max-width:768px){
width: 100%;
height: 300px;

}


`;






const RightSideWriteUp = styled.div`
height: 100px;
width: 95%;
left: 0;
bottom: 0;
text-align:left;
padding:10px;
display: flex;
margin:2px;
margin-top:-100px;



`;





const RightSideWriteUpYoutube = styled.div`
position: relative;
height: 30%;
width: 100%;
left: 0;
bottom: 0;
margin-top:-100px;
color:#fff;
text-align:left;
padding:5px;
font-weight:800;
display: flex;
line-height:1.99;


div{
width: 80%;
}

@media(max-width:768px){
position:none;
height: 80px;
}
`;




const BottomSection = styled.div`


`;





export default Top