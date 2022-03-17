import React,{useState , useEffect} from 'react';
import styled from 'styled-components'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import { RiThumbUpLine, RiPlayCircleLine, RiGroup2Line, RiPlayLine, RiArrowLeftCircleLine,RiArrowRightCircleLine, RiShareBoxLine, RiShareLine, RiDownload2Line, RiThumbUpFill, RiRotateLockLine} from 'react-icons/ri'
import { BiSlideshow, BiSortDown } from 'react-icons/bi';
import {FaSearchengin, FaSearchPlus} from 'react-icons/fa'
import { format } from '../actions';
import axios from 'axios';
import {CloudinaryContext, Image, Transformation} from 'cloudinary-react'
import  {MobileView, BrowserView}  from 'react-device-detect';
import {useNavigate} from 'react-router-dom';
import swal from 'sweetalert2'
import Loader from "react-loader-spinner"
import Downloadmodel from './Downloadmodel'
import Helmet from 'react-helmet'




const Videochild = (props) => {


    const list0 =[];
    const list1 = [];
    const [list2, setlist2] = useState([]);
    const [update, setUpdate] = useState(false);
    const [progress1, setProgress1] = useState(false);
    const [progress2, setProgress2] = useState(false);
    const [returner, setReturner] = useState(10001);
    const [showmodel, setshowmodel] = useState("close");
    const [downloadlink, setdownloadlink] = useState('');
    const [moviename, setmoviename] = useState('');
    const list4 = ["2000", "2001","2002","2003"]


    useEffect(()=>{
      MovieCall(process.env.REACT_APP_GETMOVIES,1) 
    },[window.addEventListener('beforeunload', () => {
      MovieCall(process.env.REACT_APP_GETMOVIES,1)
    })]);


    const MovieCall = (url, n) => {

      if(n == 1){
              axios.get(url)
              .then(res => {
                  list0.push(res.data.message);
                  MovieCall(process.env.REACT_APP_MORECLIPS,2);
              }).catch(err => {
                  console.log(err);
              })
         }
         else if (n == 2){ 
            var options = {

              method: 'GET',
              url: url,
              params: {name: 'action', limit: '50', page: '1'},

              headers: {
                'x-rapidapi-host': process.env.REACT_APP_HOST_KEY,
                'x-rapidapi-key': process.env.REACT_APP_MOVIEKEY
              }
            };
            
            axios.request(options).then(function (response) {
              list1.push(response.data.results);
              MovieCall("",3);
            }).catch(function (error) {
              console.error(error);
            });
      }else 
         if(list0.length > 0 && list1.length > 0) 
             setlist2(mashup(list0.concat(list1)))
         
  
    }

 

    const mashup = (args) => {
      return [...new Set([].concat(...args))];
    }


   const thanks = ()  => {
     if(!update)
         setUpdate(true);
      else
         setUpdate(false);
   }

 



   const startDownload = (index,ins,dlk,name) => {

        console.log(dlk);
        
         setReturner(ins);
         setdownloadlink(dlk);
         setmoviename(name);
   
        if(index === 1)
           setProgress1(true);
        else
           setProgress2(true)

        switch(showmodel){
          case "open":
                setshowmodel("close");
                break;
          case "close":
                setshowmodel("open");
                break;
          default:
                setshowmodel("close");
                break;
        }
 
   }



   const reset = (e) => {
    setUpdate(false);
    //console.log(e.slideIndex)
  }




return(

    <>

      <Helmet>
            <title>Webfly Video Gallery</title>
            <meta name='description'  content='Movie Downloads'/>
            <meta name='robots'  content='INDEX, FOLLOW'/>
     </Helmet>

    <Container>
        <SortDivs>
           <Sort>
                   <BreakDown>

                      <div>
                        <span>Category</span> 
                        <select>
                          {props.post.map((v,i) =>
                            i !== 0 ?
                            <option  key={i}>{v}</option>
                              :
                            <p></p>
                          )}
                        </select>
                      </div>

                      <div>
                        {/* <span>Year released</span> 
                        <select>
                          {list4.map((v,i) =>
                            <option  key={i}>{v}</option>
                          )}
                        </select> */}
                      </div>

                    <BottomQuery>
                        <FaSearchPlus  color='#000'/>
                    </BottomQuery>
                     
                </BreakDown>

               Sort Movies by <BiSortDown id='sort'/>
           </Sort>
        </SortDivs>

        <MovieSection>
            <TopSection>   
                 <Slider  id="slider" duration={3500} autoplay={1} previousButton={<RiArrowLeftCircleLine color="#f5f5f5"/>} nextButton={<RiArrowRightCircleLine  color="#f5f5f5"/>}  onSlideChange={(e) => reset(e)}>
                    {list2.map((v,i) =>
                       <div>
                            
                            <Readmore>
                             {i === 0 || i === 1 ?
                                v.writeUp.length >= 140 ? v.writeUp.substring(0,140) : v.writeUp
                                : 
                                v.overview.length >= 140 ? v.overview.substring(0,140) + " ..." : v.overview
                                }
                             </Readmore>

                              <img  style={{transform: [{rotate: `${v.spin}deg`}]}} 
                               src={
                                i === 0 || i === 1 ?
                                process.env.REACT_APP_APP_S3_STREAM_THUMB_NAIL_BUCKET+v.fileName+".png"
                                : 
                                process.env.REACT_APP_MOVIE_THUMBNAIL+v.poster_path
                                 }
                               />
                         

                               <div id='contain'>
                                    
                                    <div  id='Top_teaser' onClick={() => thanks()}>
                                     {update ? <RiThumbUpFill  id="icons"  color='#4180FF'  />  : <RiThumbUpLine  id="icons"  color='#f5f5f5'  /> }{update ?  parseInt(v.likes)+1 : format(v.likes)}
                                    </div>

                                    <pre  id='WriteUp'>

                                        { i === 0 || i === 1 ?
                                           v.writeUp.length >= 225 ? v.writeUp.substring(0,225) : v.writeUp
                                           : 
                                           v.overview.length >= 225 ? v.overview.substring(0,225) + " ..." : v.overview
                                        }

                                    </pre>

                                    <div  id='Bottom_teaser'>
                                      <RiShareLine id="icons"   color='#f5f5f5'/> 
                                    </div>
                                    
                                </div>

                             <div id="player-btn">
                                 <table>
                                     <tr>
                                         <td>
                                         <label  id='Upcaving'>
                                           Title: 
                                           { i === 0 || i === 1 ?
                                            v.Mtitle
                                            : 
                                            v.title
                                            }
                                         </label> 
                                           {!progress1 ? 

                                            <label  id='Upcaving' 
                                                onClick={(e) => startDownload(1,i, i <= 1 ?  process.env.REACT_APP_APP_S3_STREAM_VIDEO_BUCKET+v.fileName+".mp4" : v.download_links , i <= 1  ? v.Mtitle+".mp4" : v.title+".mp4") }>
                                                Download  &nbsp;&nbsp;<RiDownload2Line id='Slider_icons'/>
                                            </label> 

                                             : returner === i ?
                                               <label id='Upcaving'> <Loader  type="Oval" color="#f5f5f5" height={20}width={20}/></label>
                                             :
                                             <label  id='Upcaving' 
                                               onClick={(e) => startDownload(1,i, i <= 1 ?  process.env.REACT_APP_APP_S3_STREAM_VIDEO_BUCKET+v.fileName+".mp4" : v.download_links , i <= 1  ? v.Mtitle+".mp4" : v.title+".mp4") }>
                                               Download  &nbsp;&nbsp;  <RiDownload2Line id='Slider_icons'/>
                                             </label> 

                                            }
                                         
                                          <label  id='Upcaving'>
                                            Year release: 
                                            { i === 0 || i === 1 ?
                                              v.year
                                              :
                                               " "
                                            }
                                          </label>
                                         </td>
                                     </tr>

                                 </table>
                              
                            </div>

                       </div>
                         )}
                    </Slider> 
            </TopSection>

            
            <br/>
            <br/>
            <br/>
            <br/>
              <span id='Span'>Trending</span>
                <BottomSection>
                    {list2.map((v,i)=>
                    <div id='videos'>
                          <MobileView>
                           <img 
                              style={{ transform: `rotate(${v.spin}deg)`}}
                              src={ 
                                i === 0 || i === 1 ?
                                process.env.REACT_APP_APP_S3_STREAM_THUMB_NAIL_BUCKET+v.fileName+".png"
                                : 
                                process.env.REACT_APP_MOVIE_THUMBNAIL+v.poster_path
                                } />
                          </MobileView>

                           <BrowserView> 
                            <img 
                             src={ 
                              i === 0 || i === 1 ?
                               process.env.REACT_APP_APP_S3_STREAM_THUMB_NAIL_BUCKET+v.fileName+".png"
                              : 
                               process.env.REACT_APP_MOVIE_THUMBNAIL+v.poster_path
                              }
                              />
                          </BrowserView>


                           <div  id='downComponent'>
                            {!progress2 ?
                            <label  id='caving'>
                              <RiDownload2Line onClick={(e) => startDownload(2,i, i <= 1 ?  process.env.REACT_APP_APP_S3_STREAM_VIDEO_BUCKET+v.fileName+".mp4" : v.download_links , i <= 1  ?  v.Mtitle+".mp4" :  v.title+".mp4") } />
                            </label> 
                            : returner === i ?
                            <label  id='caving'><Loader  type="Oval" color="#f5f5f5" height={20} width={20}/></label>
                            :
                            <label  id='caving'>
                              <RiDownload2Line onClick={(e) => startDownload(2,i , i <= 1 ?  process.env.REACT_APP_APP_S3_STREAM_VIDEO_BUCKET+v.fileName+".mp4" : v.download_links , i <= 1  ? v.Mtitle+".mp4" : v.title+".mp4") } />
                            </label> 
                           }

                            <label  id='cavingName'>
                               Title: 
                              { i === 0 || i === 1 ?
                               v.Mtitle
                              : 
                              v.title.length > 20 ? v.title.substring(0,17) +"...": v.title
                              }
                            </label>

                           </div>
                    </div>
                    
                    )}
                </BottomSection>
        </MovieSection>
        <br/><br/><br/>
    </Container>

                   { downloadlink ?
                      <Downloadmodel showModel={showmodel}  closemodel={startDownload}  link={downloadlink} moviename={moviename}/>
                    :
                     console.log("None")
                   }
  
   
    </>
)
}

const Container = styled.div`
margin-left:auto;
margin-right:auto;
width: 80%;


#player-btn{
left:2%;
font-size:25px;
margin-top: -10%;
color: #fff;
cursor: pointer;
}

#Upcaving{
font-size:9pt;
border: 1px solid #fff;
border-radius:5px;
font-weight:500;
padding: 3px;
margin: 10px;
display: flex;
justify-content:center;
align-items:center;
text-align:center;
cursor: pointer;
}


tr td{
display: flex;
}


img{
height: 200px;
width: 200px;
}




@media(max-width:768px){
width: 100%;

#player-btn{
left:2%;
font-size:25px;
margin-top: -30%;
}

}
 
`;




const SortDivs = styled.div`
width: 100%;
height: 10vh;
margin-top:150px;
margin-bottom:30px;
box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
@media(max-width:768px){
font-size:8pt;
}

`;







const BreakDown = styled.div`
display:none;
position: absolute;
width: 200px;
height: 200px;
margin-top:240px;
background: #fff;
box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
border-radius:10px;
z-index:50;
padding: 10px;

div{
display: flex;
align-items:center;
justify-content:space-between;
margin-top:10px;

}
span{
color: #000;
font-weight:10;
margin-right: 5px;
}
select{
float: right;
margin-top:5px;

}


@media(max-width:768px){
position: relative;
width: 200px;
border:2px solid #f5f5f5;
left:25%;
z-index:500;


}

`;



const Sort = styled.div`
float: right;
width:auto;
height: 100%;
color: #fff;
display: flex;
align-items: center;
font-weight:700;
padding-right: 5px;
font-family: "Poppins", sans-serif;

#sort{
float: right;
font-size:35px;

}

&:hover{
${BreakDown}{
display: block;
}
}

@media(max-width:768px){
#sort{
font-size:20px;
}
}
`;




const BottomQuery = styled.div`
position: absolute;
right: 0;
bottom: 0;
margin: 10px;
cursor: pointer;
font-size:25px;

`;




const MovieSection = styled.div`
width: 100%;
box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
margin-bottom:5px;


#Span{
margin: 10px;
font-weight:800;
font-family: "Poppins", sans-serif;
color:#f5f5f5
}

@media(max-width:768px){
padding-bottom:50px;
}

`;



const TopSection = styled.div`
height: 60vh;
width: 100%; 
padding-bottom:0px;
position: relative;

img{
max-width:70%;
width: 70%;
min-width:70%;
max-height:100%;
height: 100%;
min-height:100%;
object-fit:cover;
}

#icons{
font-size:45px;
}

#contain{
float: right;
height: 95%;
max-width: 25%;
margin-right:7px;
color:#f5f5f5;
}
#WriteUp{
word-wrap: break-word;
white-space: pre-wrap;
font-family: Consolas,monospace;
width:250px;
max-width:250px;
height: 200px;
max-height:200px;
overflow-y: scroll;
text-align:left;
color: #f5f5f5;
font-weight:500;
padding-top:7px;
margin-right:10px;
}

#WriteUp::-webkit-scrollbar {
  display: none;
}

#Top_teaser{
float: right;
height:70px;
width:  70px;
margin: 10px;
cursor: pointer;
}


#Bottom_teaser{
float: right;
height:70px;
width:  70px;
margin: 10px;
cursor: pointer;
}

@media(max-width:768px){
height: 70vh;

img{
max-width:100%;
width: 100%;
min-width:100%;
max-height:70%;
height: 90%;
min-height:90%;
object-fit:cover;
}


#contain{
max-width: 100%;
text-align:left;
margin: 0px;
position:relative;
}

#WriteUp{
padding-top:40px;
max-height:100px;
height: 100px;
overflow: scroll;
overflow-y:scroll;
width:350px;
max-width:350px;
padding-left:5px;
padding-right:5px;
}

#Top_teaser{
height: 40px;
margin-right:-12px;
justify-content:center;
align-items:center;
text-align:center;
margin: 5px;
}


#Bottom_teaser{
position: absolute;
float:left;
top: 0px;
margin: 2px;
}

#icons{
position: relative;
top:5px;
font-size:30px;
}

`;


const Readmore = styled.div`
display: none;

@media(max-width:768px){
display: block;
position: absolute;
width: 60%;
height: 100px;
right:0;
font-size:9pt;
border-radius:10px;
margin: 5px;
padding: 5px;
color: #fff;
background-image: linear-gradient(to top right,#1f505f, #07091C);
font-family: "Poppins", sans-serif;
}
`;




const BottomSection= styled.div`
width: 100%;
padding-top:5px;
height: 40vh;
overflow: auto;
white-space: nowrap;


#videos{
display: inline-block;
margin: 10px;
}


#downComponent{
margin-top:-50px;
display: flex;
align-items:center;
justify-content:space-between;
color: #fff;
}


#caving{
border: 1px solid #fff;
border-radius:5px;
font-weight:500;
padding: 3px;
margin: 3px;
cursor: pointer;
}

#cavingName{
font-size:10pt;
border: 1px solid #fff;
border-radius:5px;
font-weight:500;
padding: 3px;
margin: 3px;
}

::-webkit-scrollbar {
display: none;
}



@media(max-width:768px){
  margin-top:10px;



#downComponent{
position: relative;
margin-top:-50px;
z-index:900;
}

}
`;


export default Videochild;