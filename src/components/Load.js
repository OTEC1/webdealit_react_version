import styled from "styled-components"
import Loader from "react-loader-spinner"


const Load =  (props) => {


    return(
        <Container>
            <div>
                <Loader
                    type="Oval"
                    color="#4180FF"
                    height={100}
                    width={100}
                />
            </div>
       
        </Container>
       
    )
}



const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content:center;
align-items:center;
text-align:center;



div{
position: absolute;
margin-left:40%;
margin-top:25%;

}


@media(max-width:768px){
   
div{
margin-top:15%;
width: 100%;
margin-left:auto;
margin-right:auto;
}
}

`;


export default Load