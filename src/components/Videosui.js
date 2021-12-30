import styled from 'styled-components'
import Header from './Header'
import Ad from './Ad'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import { RiArrowRightCircleLine, RiThumbUpLine, RiPlayCircleLine} from 'react-icons/ri'
import { BiSortDown } from 'react-icons/bi';
import {FaSearchengin} from 'react-icons/fa'




 const Videoui = (props) => {

 

    const list1 = [1,2,3];
    const list2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    const list3 = ["Romantic","Action", "Comic", "Horror", "funny"]
    const list4 = ["2000", "2001","2002","2003"]
    const writeup="Lorem Ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem Ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum."
    return (
        <>
        <Container>
            <Header/>
            <Ad/>
            <SortDivs>
               <Sort>
                   <BreakDown>
                   <div>
                    <span>Movie category</span> 
                     <select>
                       {list3.map((v,i) =>
                        <option  key={i}>{v}</option>
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
                    <Slider  id="slider" autoplay={1} previousButton="" nextButton="">
                        {list1.map((v,i) =>
                        <div>
                          <div id="player-btn">
                           <RiPlayCircleLine/>
                          </div>
                         <img src={"./images/"+v+".png"}/>
                          <div id='contain'>
                             <div  id='Top_teaser'>
                              <RiThumbUpLine  id="icons"  color='#000'/> {v}
                             </div>

                              <div  id='WriteUp'>
                                {writeup.length > 235 ? (<span>{writeup.substring(0,235)} ...</span>):  writeup}
                              </div>

                              <div  id='Bottom_teaser'>
                               <RiArrowRightCircleLine id="icons"   color='#000'/> {v}
                              </div>
                           </div>
                           </div>
                             )}
                        </Slider>
                </TopSection>

                <span id='Span'>Trending</span>
                <BottomSection>
                    {list2.map((v,i)=>
                    
                    <div id='videos'>
                       {v}
                    </div>

                    )}
                    

                </BottomSection>
            </MovieSection>
        </Container>
        </>
    )
 }



const Container = styled.div`
margin-left:auto;
margin-right:auto;
width: 80%;
 

#player-btn{
position: absolute;
left:32%;
font-size:55px;
top: 45%;
color: #fff;
cursor: pointer;

}

@media(max-width:768px){
width: 100%;

#player-btn{
left:45%;
font-size:35px;
top: 30%;
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
margin: auto;
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
height: 70%;
width: 100%;

img{
width: 70%;
height: 100%;
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
width: 100%;
max-height:200px;
overflow: hidden;
text-align:left;
color: #000;
font-weight:500;
font-family: "Poppins", sans-serif;
display: flex;
justify-content: center;
align-items: center;
padding-top:7px;
padding-left:3px;
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
img{
width: 100%;
height: 70%;
}
#contain{
max-width: 100%;
text-align:left;
margin: 0px;
position:relative;
}

#WriteUp{
padding-top:0px;
}

#Top_teaser{
height: 40px;
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
margin-top:5px;
height: 24vh;
overflow: auto;
white-space: nowrap;

#videos{
display: inline-block;
width: 200px;
height: 85.5%;
background: red;
margin: 10px;
}

::-webkit-scrollbar {
display: none;
}


`;


 export default Videoui;


