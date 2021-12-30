import  styled  from 'styled-components'
import Header from './Header'
import Ad from './Ad'



 const UserContentpage = (props) => {



    return (
        <Container>
            <Header/>
            <Ad/>
            <Navs>

            </Navs>
            
            <Content>
            </Content>

        </Container>
    )
 }





 const Container = styled.div`
 
 
 
 `;

 
const Navs = styled.div`
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
height:10vh;
width:80%;
margin:auto;
margin-top:170px;

`;

const Content = styled.div`
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
width:80%;
margin:auto;
margin-top:20px;

`}
 export default UserContentpage;


