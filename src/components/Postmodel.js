import React, { Component, useEffect }  from 'react';
import styled from "styled-components";
import AWS from 'aws-sdk';
import {postArticleAPI} from '../actions';
import {useState,useRef} from "react";
import {connect} from "react-redux";
import axios from 'axios';
import swal from 'sweetalert2'
import ReactPlayer from 'react-player'
import { RiAlbumLine, RiCamera2Line, RiGalleryFill, RiGalleryLine, RiPictureInPicture2Line, RiVideoAddLine, RiVideoUploadLine, RiYoutubeFill, RiYoutubeLine } from 'react-icons/ri';




 AWS.config.update({
    accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_SECRET_KEY
});


const bucket = new AWS.S3({
    apiVersion: process.env.REACT_APP_API_VERSION,
    httpOptions: {timeout: 0},
    params: {Bucket: process.env.REACT_APP_S3_BUCKET},
    region: process.env.REACT_APP_REGION, 
});








const Postmodel = (props) => {

    const [editorText1, setEditorText1] = useState("");
    const [editorText2, setEditorText2] = useState("");
    const [shareImage, setShareImage] = useState('');
    const [videofile, setVideofile] = useState('');
    const [youtube, setYoutube] = useState('');
    const [progress , setProgress] = useState(0);
    const [space, setSpace] = useState('Pic');
    const [respones, setRespones] = useState('');
    const videoElem = useRef();
    let img_format,vid_format;


    const  handle = (e) => {
          var count = 0;
          const file = e.target.files[0];
          const size = e.target.files[0].size;
           /** make this env variable */    count = size/1048576;
           setProgress(0);
           if(file === '' || file === undefined){
           alert('The file is  a  ${typeof image}');
            return;
            }else if(Math.round(count) > 150){
               swal.fire({title:"File too large ", text:`Sorry file is ${Math.round(count)}mb.. allowed size is below 150mb`, icon:'warning'})
        
            }else{

                 if(file.type === "image/png" || file.type === "image/jpeg" || file.type === "image/jpg"  || file.type === "image/webp"){
                    console.log("Piture");
                    setShareImage(file);
                }else if(file.type === "video/mp4"){
                        console.log("Video");
                        setVideofile(file);
                }  
            }   
         
    }




    const PostData = (e) => {

        e.preventDefault();
        if(e.target !== e.currentTarget){
            return;
        }

        
        let filestoupload = [];
        let m1,m2;
        var ts=Math.floor(Date.now()/1000);
        
        
        const file1 = shareImage;
        const file2 = videofile;
        const file3 = editorText1;
        const file4 = editorText2;
        const file5 = youtube;

            if(file1 !== ''){    

              m1 = new Map();
              m1.set("id",file1.name);
              m1.set("ext",".png");
              m1.set("data",file1);
              filestoupload.push(m1);
              for(var x= 0; x < filestoupload.length; x++){
                m1 = filestoupload[x];
                img_format = addextension(m1.get("id"),ts,m1.get("ext"));
                img_format = img_format.replace(/ /g, '')
                SEND_TO_S3(img_format,m1.get("data"),1);
              }
         }
         
         if(file2 !== ''){
              m2 = new Map();
              m2.set("id",file2.name);
              m2.set("ext",".mp4");
              m2.set("data",file2);
              filestoupload.push(m2);
            for(var x= 0; x < filestoupload.length; x++){
                m2 = filestoupload[x];
                vid_format = addextension(m2.get("id"),ts,m2.get("ext"));
                vid_format = vid_format.replace(/ /g, '')
                SEND_THUMBNAIL(vid_format,m2.get("data"),2);
            }
        }
        sendDB(file3,file4,file5); 
    }




    const sendDB = (file3,file4,file5) => {

        
        const payload = {
            User:{
                username: props.user.displayName,
                user_img:props.user.photoURL,
                useremail: props.user.email
            },
            UserPost:{
            image: img_format ? img_format: '',
            video: vid_format ? vid_format : '',
            title: file3 ? file3 : '',
            writeup: file4 ? file4 : '',
            youtubeLink: file5 ? file5 : '',
            timestamp: new Date().getTime(),
            date_time: new Date().toLocaleString(),
            views: 0,
            likes:0,
            approved: false,
            }
        };

       axios.post(process.env.REACT_APP_POST_END_POINT,payload)
       .then(res => { 
           if(res.data.message == "Ok 200") {
            myFunction();
            setRespones("Write up uploaded...")    
           }
       }).catch(err => {
           console.log(err); 
       })
       

     }


     function myFunction() {
        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      }


     const SEND_TO_S3 = (args,data, section) => {
      
          const   params = {
                ACL: process.env.REACT_APP_READ_RULE,
                Body: data,
                Bucket: process.env.REACT_APP_S3_BUCKET,
                Key: section === 1 ? process.env.REACT_APP_S3_PICTURE_SECTION+args.trim() : process.env.REACT_APP_S3_VIDEO_SECTION+args.toString().replace("png","mp4").trim()
            };
    

        bucket.putObject(params)
                .on('httpUploadProgress', (e) => {
                        setProgress(Math.round((e.loaded / e.total) * 100));
                })
                .on('httpDone',(e)=>{
                    swal.fire({text:"Posted", icon: 'success'})
                })
                .send((err) => {
                    if(err) {
                        alert("Snap error occurred");
                        setProgress(0);
                        console.log(err);
                    }
                });  
     }


     function datatoBlob(dataurl){
         let array, binary,i,len;
         binary = atob(dataurl.split(',')[1]);
         array =  [];
         i = 0;
         len = binary.length;
         while(i < len){
             array.push(binary.charCodeAt(i));
             i++;
         }
         return new Blob([new Uint8Array(array)], {
             type: "image/png"
         });
     };


     const SEND_THUMBNAIL =  (args,data, section)  => {
       
        if(args.length > 0){
         let file = args.toString().replace(".mp4",".png");
             const canvas = document.createElement("canvas");
             canvas.width = videoElem.current.videoWidth;
             canvas.height = videoElem.current.videoHeight;
             canvas.getContext("2d").drawImage(videoElem.current,0,0,videoElem.current.videoWidth,videoElem.current.videoHeight);
             SEND_TO_S3_THUMBNAIL(file,datatoBlob(canvas.toDataURL()),data,section);
        }
      }



     const SEND_TO_S3_THUMBNAIL = (args,data,dataVideo,section) => {
      
        const   params = {
              ACL: process.env.REACT_APP_READ_RULE,
              Body: data,
              Bucket: process.env.REACT_APP_S3_BUCKET,
              Key:  process.env.REACT_APP_S3_THUMB_SECTION+args.trim()
          };
  

      bucket.putObject(params)
              .on('httpUploadProgress', (e) => {
                      //setProgress(Math.round((e.loaded / e.total) * 100));
              })
              .on('httpDone', (e) => {
                    SEND_TO_S3(args,dataVideo,section);
              })
              .send((err) => {
                  if(err) {
                      alert("Snap error occurred");
                      setProgress(0);
                      console.log(err);
                  }
              });  
   }  



    const addextension = (data,stamp,extension) => {
        var  formated = data.substring(0,data.indexOf("."));
        formated = formated+"_"+stamp+""+extension;
        return formated;
    }



    const reset =  (e) => {
        setEditorText1("");
        setEditorText2("");
        setShareImage("");
        setVideofile("");
        setProgress(0);
        props.redirectUser(e);
    };
   


    const  Value = (e) => {
        setSpace(e);
        setVideofile('');
        setShareImage('');
        setProgress(0)
    } 



    
    return(
        <>  
        {props.showModel === "open" &&(
            <Container>
                <Content>

                    <Header>
                    <h2>Create a Post</h2>
                    <button  onClick={(event) => reset(event)}>X</button>
                    </Header>

                        <SharedContent>
                                <UserInfo>
                                    {props.user ?  <img src={props.user.photoURL} alt=""/> : <img src="/images/user.svg" alt=""/> }
                                    <span>{props.user ? props.user.displayName : "Name"}</span>
                                </UserInfo>

                                <Editor>
                                <input type="text" placeholder="Post  title (Optional)"  value={editorText1}  onChange={(e) => setEditorText1(e.target.value)}  autoFocus={true}/>
                                <textarea  placeholder="Write up (Optional)" value={editorText2}  onChange={(e) => setEditorText2(e.target.value)} />
                                    {space === "Pic" &&
                                        (
                                        <UploadImage>
                                        <input type="file"   name="image" id="file" style={{display: "none"}}  onChange={handle}  accept="image/png, image/gif, image/jpeg, image/jpg" />
                                        <p><label  htmlFor="file">{"Choose  image + "}</label></p>
                                        {shareImage && <img src={URL.createObjectURL(shareImage)}/>}
                                        </UploadImage>
                                       )}
                                       {space === "Vid" && (
                                        <UploadImage>
                                            <input  type="file"   name="image" id="file-input" style={{display: "none"}}  onChange={handle}  accept="video/mp4,video/x-m4v,video/*"/>
                                            <p><label  htmlFor="file-input">Choose Video + </label></p>
                                            <video 
                                            id="video"
                                            ref={videoElem}
                                            src={videofile &&  !progress ? URL.createObjectURL(videofile):''}
                                            type="video/mp4"
                                            width="100%"
                                            height="100%"
                                            controls
                                            />
                                        </UploadImage>
                                    )}
                                    {space === "You" && (
                                        <UploadImage>
                                            <input  type="text"   value={youtube} placeholder='Youtube video link' onChange={(e) => setYoutube(e.target.value)}/>
                                             <ReactPlayer id="reactP"  url={youtube} width="100%"/>
                                        </UploadImage>
                                    )}
                                    
                                </Editor>  
                                
                            </SharedContent>

                            <ShareCreation>
                                <Attach>
                                  <RiCamera2Line size={20} id='pic'  onClick={(e) => Value("Pic")} />
                                  <RiVideoUploadLine size={20} id='vid' onClick={(e) => Value("Vid")}/>
                                  <RiYoutubeFill size={20} id='vid' onClick={(e) => Value("You")}/>
                                </Attach>
                            <PostButton  disabled={!editorText1 && !editorText2  ? true : false}  onClick={PostData}>
                                Post: {progress}%
                            </PostButton>
                        </ShareCreation>
                        <div id="snackbar">{respones}</div>
                </Content>
        </Container>
        )}
        </>
    )       
}






const Container = styled.div `
position:fixed;
top:0;
left:0;
bottom:0;
color:black;
width:100%;
z-index:999;
background-color: rgba(0,0,0,0.8);



#snackbar {

  visibility: hidden; 
  min-width: 250px;
  margin-left: -125px; 
  background-color: #333; 
  color: #fff; 
  text-align: center; 
  border-radius: 2px; 
  padding: 16px;
  position: fixed; 
  z-index: 9999; 
  border-radius:10px;
  left: 50%;  
  margin-top: 20px;
}
#snackbar.show {
  visibility: visible; 
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

@-webkit-keyframes fadein {
  from {top: 0; opacity: 0;}
  to {top: 30px; opacity: 1;}
}

@keyframes fadein {
  from {top: 0; opacity: 0;}
  to {top: 30px; opacity: 1;}
}

@-webkit-keyframes fadeout {
  from {top: 30px; opacity: 1;}
  to {top: 0; opacity: 0;}
}

@keyframes fadeout {
  from {top: 30px; opacity: 1;}
  to {top: 0; opacity: 0;}
}

`;



const Content  =  styled.div`
max-width:35%;
background-color: white;
max-height:90%;
overflow:initial;
border-radius: 5px;
position: relative;
display: flex;
flex-direction: column;
top:32px;
margin: 0 auto;


@media(max-width: 768px){
top:10%;
max-width:100%;
}

`;




const Header  =  styled.div`
display:  block;
padding : 16px 20px;
border-bottom: 1px solid rgba(0,0,0,0.15);
font-size:16px;
line-height: 1.5;
color: rgba(0,0,0,0.6);
font-weight: 400;
display:flex;
justify-content: space-between;
align-items:center;
button{
height:40px;
width:40px;
min-width:auto;
}
`;



const SharedContent = styled.div`
display:flex;
flex-direction: column;
flex-grow:1;
overflow-y:auto;
vertical-align: baseline;
background: transparent;
padding: 8px 12px;

::-webkit-scrollbar {
display: none;
}
`;



const UserInfo = styled.div`
display: flex;
align-items: center;
padding: 12px 24px;
svg,img{
width:48px;
height:48px;
background-clip: content-box;
border:2px solid  transparent;
border-radius:50%;
padding:5px;
}
span{
font-weight:600;
font-size:16px;
line-height:1.5px;
}
`;



const ShareCreation = styled.div`
display:flex;
justify-content: space-between;
padding: 12px 24px 12px 16px;
`;


const Attach = styled.div`
display:flex;
height:40px;
width: 30%;
min-width: auto;
color: rgba(0,0,0,0.5);
justify-content:space-between;
cursor:pointer;


#pic{
margin: 10px;
color: #000;
}

#vid{
margin: 10px;
color: #000;
}
`;





const PostButton = styled.button`
min-width:60px;
border-radius: 20px;
padding-left: 16px;
padding-right: 16px;
height: 35px;
right:2px;
background: ${(props) => (props.disabled ?  "rgba(0,0,0,0.8)" : "#0a66c2")};
color: ${(props) => (props.disabled ? "rgba(1,1,1,0.2)": "white")};
&:hover{
background: ${(props) => (props.disabled ? "rgba(0,0,0,0.08)" : "#004162")};
}
`;


const Editor = styled.div`

padding:5px 24px;

textarea{
width:98%;
min-height:150px;
resize: none;
padding:5px;
margin-bottom:10px;
border: 3px solid #ccc;
:focus{
border: 3px solid #ccc;
}
}

input{
width:98%;
height: 35px;
font-size:16px;
margin-bottom: 10px;
padding:5px;
border: 3px solid #ccc;
:focus{
    border: 3px solid #ccc;
}
}

`;








const UploadImage = styled.div`
text-align: center;
line-height: 30px;
img{
width:100%;
max-height: 50%;
padding-top:20px;
}
label{
padding: 10px;
border-radius:4px;
background: #f5f5f5;
box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
}
video{
padding-top:20px;
}


#reactP{
padding-top:20px;
}
`;




const  mapStateToProps = (state)  => {
    return {
        user: state.userState.user,
    };
};

const mapDistpachToProps = (dispatch) => ({
   
});

export default  connect(mapStateToProps,mapDistpachToProps)(Postmodel);

