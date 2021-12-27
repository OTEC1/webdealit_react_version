import styled from 'styled-components'
import Header from './Header'
import Ad from './Ad'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import { RiArrowRightCircleLine, RiThumbDownLine, RiThumbUpLine } from 'react-icons/ri'



 const Videoui = (props) => {

 

    const apicall = [1,2,3];
    const writeup="Lorem Ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem Ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum."
    return (
        <Container>
            <Header/>
            <Ad/>
            <MovieSection>
                <TopSection>
                    <Slider  autoplay={1} previousButton="" nextButton="">
                        {apicall.map((v,i) =>
                        <div>
                         <img src={"./images/"+v+".png"}/>
                          <div id='contain'>
                             <div  id='Top_teaser'>
                              <RiThumbUpLine  size={45}  color='#000'/> {v}
                             </div>

                              <div  id='WriteUp'>
                                {writeup.length > 235 ? (<span>{writeup.substring(0,235)} ...</span>):  writeup}
                              </div>

                              <div  id='Bottom_teaser'>
                               <RiArrowRightCircleLine  size={45}  color='#000'/>
                              </div>
                           </div>
                           </div>
                             )}
                        </Slider>
                </TopSection>
            </MovieSection>
        </Container>
    )
 }



const Container = styled.div`
margin-left:auto;
margin-right:auto;
width: 80%;
 
 
 `;



const MovieSection = styled.div`
width: 100%;
height: 80vh;
box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
margin-top:150px;
margin-bottom:10px;
`;



const TopSection = styled.div`
height: 70%;
width: 100%;

img{
width: 70%;
height: 100%;
object-fit:cover;
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
`;





 export default Videoui;


