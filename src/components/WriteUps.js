import styled from "styled-components";
import { BiRocket } from 'react-icons/bi';


const WriteUp = (props) => {

    return(
        <Container>
          <table>
              <tr>
                  <td>
                   <BiRocket  id="startPin"/> {props.val.title}
                  </td>
                  </tr>

                 <tr>
                  <td>
                    {props.val.date_time}
                  </td>
                  </tr>


                <tr>
                  <td> 
                    {props.val.writeup}
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
}


tr td{
float:left;
display:flex;
text-align:left;
align-items:center;
justify-content:center
font-weight:500;
font-family: "Poppins", sans-serif;
}




#startPin{
margin:10px;
}

`;

export default WriteUp;