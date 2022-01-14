import styled from 'styled-components'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import { RiThumbUpLine, RiPlayCircleLine, RiGroup2Line, RiPlayLine, RiArrowLeftCircleLine,RiArrowRightCircleLine, RiShareBoxLine, RiShareLine, RiDownload2Line, RiThumbUpFill, RiRotateLockLine} from 'react-icons/ri'
import { BiSlideshow, BiSortDown } from 'react-icons/bi';
import {FaSearchengin} from 'react-icons/fa'
import { useState , useEffect} from 'react';
import { format } from '../actions';
import axios from 'axios';
import {CloudinaryContext, Image, Transformation} from 'cloudinary-react'
import  {MobileView, BrowserView}  from 'react-device-detect';
import {useNavigate} from 'react-router-dom';

const Videochild = (props) => {


    const [list1, setlist1] = useState([]);
    const [list2, setlist2] = useState([]); 
    const [update, setUpdate] = useState(false);
    const list4 = ["2000", "2001","2002","2003"]


    useEffect(()=>{

      Slideshow();
      Recomendation();

    },[]);


    const Slideshow =() => {
        axios.get(process.env.REACT_APP_GETMOVIES)
        .then(res => {
            setlist1(res.data.message);
        }).catch(err => {
            console.log(err);
        })
        
    }

    const Recomendation =() => {
        axios.get(process.env.REACT_APP_GETRECOMENDED_MOVIES)
        .then(res => {
            setlist2(res.data.message);
        }).catch(err => {
            console.log(err);
        })
        
    }

   const thanks = ()  => {
     if(!update)
         setUpdate(true);
      else
         setUpdate(false);
   }


   const reset = (e) => {
     setUpdate(false);
     //console.log(e.slideIndex)
   }

   const history = useNavigate();
   const sendToPlayer = (url) => {
        history("/player/"+url)
   }
return(
    <>
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
                <span>Year released</span> 
                 <select>
                   {list4.map((v,i) =>
                    <option  key={i}>{v}</option>
                   )}
                 </select>
               </div>


               <BottomQuery>
                   <FaSearchengin/>
               </BottomQuery>
               </BreakDown>
               Sort Movies by <BiSortDown id='sort'/>
           </Sort>
        </SortDivs>

        <MovieSection>
            <TopSection>   
                <Slider  id="slider" autoplay={1} previousButton={<RiArrowLeftCircleLine/>} nextButton={<RiArrowRightCircleLine/>}  onSlideChange={(e) => reset(e)}>
                    {list1.map((v,i) =>
                       <div>

                              <img  style={{transform: [{rotate: `${v.spin}deg`}]}} src={process.env.REACT_APP_APP_S3_STREAM_THUMB_NAIL_BUCKET+v.fileName+".png"}/>
                         

                              <div id='contain'>
                                    <div  id='Top_teaser' onClick={() => thanks()}>
                                     {update ? <RiThumbUpFill  id="icons"  color='#4180FF'  />  : <RiThumbUpLine  id="icons"  color='#000'  /> }{update ?  parseInt(v.likes)+1 : format(v.likes)}
                                    </div>

                                    <pre  id='WriteUp'>
                                        { v.writeUp}
                                    </pre>

                                    <div  id='Bottom_teaser'>
                                      <RiShareLine id="icons"   color='#000'/> 
                                    </div>
                             </div>

                             <div id="player-btn">
                                 <table>

                                     <tr>
                                         <td>  
                                         <label  id='Upcaving' onClick={()=> sendToPlayer(v.fileName+".mp4")}>Stream <RiPlayLine id='Slider_icons' /></label>  <label  id='Upcaving'>Title: {v.Mtitle}</label>
                                         </td>
                                     </tr>

                                     <tr>
                                         <td>
                                         <label  id='Upcaving'>Download  &nbsp;&nbsp;<RiDownload2Line id='Slider_icons'/></label>  <label  id='Upcaving'>Year release: {v.year}</label>
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
                           <img  onClick={()=> sendToPlayer(v.fileName+".mp4")}
                              style={{ transform: `rotate(${v.spin}deg)`}}
                              src={process.env.REACT_APP_APP_S3_STREAM_THUMB_NAIL_BUCKET+v.fileName+".png"} />
                          </MobileView>

                           <BrowserView> 
                            <img  onClick={()=> sendToPlayer(v.fileName+".mp4")}
                            src={process.env.REACT_APP_APP_S3_STREAM_THUMB_NAIL_BUCKET+v.fileName+".png"} />
                          </BrowserView>

                           <div  id='downComponent'>
                            <label  id='caving'><RiPlayLine /></label>  <label  id='caving'>{v.Mtitle}</label>
                           </div>
 
                    </div>
                    )}
                </BottomSection>
                
        </MovieSection>
        <br/><br/><br/>
    </Container>
    </>
)
}

const Container = styled.div`
margin-left:auto;
margin-right:auto;
width: 80%;
height: auto;
 

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
width: 300px;
border:2px solid #f5f5f5;
left:25%;
z-index:500;


}

`;



const Sort = styled.div`
float: right;
width:auto;
height: 100%;
color: #4180FF;
display: flex;
align-items: center;
font-weight:700;
padding-right: 5px;


#sort{
float: right;
font-size:35px;
}

&:hover{
${BreakDown}{
display: block;
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
}

@media(max-width:768px){
padding-bottom:50px;
}

`;



const TopSection = styled.div`
height: 60vh;
width: 100%; 
padding-bottom:0px;



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
color: #000;
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
height: 70%;
min-height:70%;
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
}

#icons{
position: relative;
top:5px;
font-size:30px;
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
cursor: pointer;

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