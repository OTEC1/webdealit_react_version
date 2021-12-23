import styled  from "styled-components";
import Top from './Top'
import Bottom from "./Bottom";
import Ad from "./Ad";


const Home = (props) => {
        return(<Container>
             <Ad/>  
            <Contain>
                <Top/>
                <Bottom/>
            </Contain>
            </Container>
        )
}
 


const Container = styled.div`
width: 100%;
height: 100vh;
`;

const Contain = styled.div`
width: 80%;
margin:auto;
margin-top:151px;


@media(max-width:768px){
width: 100%;
}
`;


export default Home