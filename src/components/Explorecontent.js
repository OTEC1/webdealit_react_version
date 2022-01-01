import  styled  from 'styled-components'
import Header from './Header'
import Ad from './Ad'
import { useParams } from 'react-router-dom'
import Loader from 'react-loader-spinner'
import axios from 'axios'
import { useEffect , useState } from 'react'
import Explore  from './Explore'



 const Explorecontent = (props) => {

    let {val, em, doc} = useParams();
    const [datas, setDatas] = useState([]);



    useEffect(() => {
        window.scrollTo(0,0);
        axios.post("https://us-central1-grelot-c7a70.cloudfunctions.net/webdealitGetSinglePost",{User:{useremail:em},UserPost:{doc_id_b:doc}})
        .then(res => {
           setDatas(res.data.message);
        }).catch(err => {
            console.log(err);
        })
    } ,[])
    
 

    return (
       
        <Container>
            <Header/>
            <Ad/>
            <Navs>

            </Navs>
            <Explore  post={datas}   val={val}/>    
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



@media(max-width:768px){
width: 100%;
margin: none;
overflow: hidden;
}

`;


 export default Explorecontent;


