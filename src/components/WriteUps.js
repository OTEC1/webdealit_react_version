import styled from "styled-components";
import { BiRocket } from 'react-icons/bi';
import {RiTimeLine}  from 'react-icons/ri'


const WriteUp = (props) => {

    return(
        <Container>
          <table>
              <tr>
                  <td>
                   <BiRocket  id="startPin"/> <h4>{props.val.title}</h4>
                  </td>
              </tr>

              <tr>
                  <td>
                   <RiTimeLine id="datePin" /> <h5>{props.val.date_time}</h5>
                  </td>
              </tr>


                <tr>
                    <td> 
                     <pre>{props.val.writeup}</pre>
                    </td>
                </tr>
          </table>
           


           

           
        </Container>
    )
}

const Container = styled.div`
text-align:left;




table{
max-width:90%;
width: 90%;
font-family: "Poppins", sans-serif;
color: #828282;
padding-bottom:100px;
}



h4{
color: #515151;
font-weight:900;
font-size:15pt;
max-width:80%;

}

h5{
font-size:7pt;
}

tr td{
float:left;
display:flex;
text-align:left;
align-items:center;
justify-content:center
font-weight:500;
max-width:95%;
width:95%;
margin-left:10px;
}





pre{
word-wrap: break-word;
height: auto;
white-space: pre-wrap;
font-family: Consolas,monospace;
}


#startPin{
margin:5px;
font-size:25pt;
color:#00ff5d;
}

#datePin{
margin:5px;
}



@media(max-width:768px){
 
    
#startPin{
font-size:15pt;
}
}
`;

export default WriteUp;