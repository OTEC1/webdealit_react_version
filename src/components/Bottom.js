import React,{useEffect, useState} from 'react';
import styled  from "styled-components";


const Bottom = (props) => {

    console.log(props.data);
    const [list, setlist] = useState([])


    useEffect(() => {
        if(props.data.length > 0){     
           setlist(props.data);
        }
    },[])

    return(<div>
            <Container>
                {list.map((v,i) =>
                 <CardShow>
                <img src={process.env.REACT_APP_APP_S3_IMAGE_BUCKET+v.UserPost.image}/>
                <div>{v.UserPost.writeup.length > 100 ? v.UserPost.writeup.substring(0,100)+" ... Read more" : v.UserPost.writeup }</div>
                </CardShow>
                )}
            </Container>

            <Footer>

            </Footer>
        </div>
    )
}


const Container = styled.div`
position: relative;
height: 70vh;
width: 100%;
margin-top:100px;
background: #f5f5f5;
display: flex;
justify-content:center;
align-items:center;
flex-wrap:wrap;
overflow-y:scroll;

::-webkit-scrollbar {
display: none;
}

@media(max-width:768px){
margin-top:200px;
}
`;


const CardShow = styled.div`
height: 300px;
width: 350px;
box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
margin:20px;
border-radius:10px;

img{
border-radius:10px;
width: 100%;
height: 70%;
clip-path: ellipse(78% 100% at 32.64% 0%);
object-fit:cover;
}

div{
margin: 10px;
}

@media(max-width:768px){
margin: 2px;
width: 100%;
height: 350px;
}
`;


const Footer = styled.div`
position: relative;
height: 150px;
width: 100%;
background-image: linear-gradient(to top right,#1f505f, #07091C);
bottom: 0;
`;



export default Bottom