import styled  from "styled-components";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';


const Top = (props) => {

    return(<Container>
            <Leftside>
                <Slider autoplay={1}
                        previousButton=""
                        nextButton="">
                    <img src="images/photos.png" alt=""/>
                    <img src="images/photos.png"  alt=""/>
                    <img src="images/photos.png"  alt=""/>
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
background: red;

img{
width: 100%;
height: 100%;
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