import styled from "styled-components";
import { BiRocket } from 'react-icons/bi';
import {RiTimeLine}  from 'react-icons/ri'
import InstagramEmbed from 'react-instagram-embed';
import ReactHtmlParser  from 'html-react-parser'


const WriteUp = (props) => {
    let length = props.writeup.length;
    return(
        <Container>
          <table>
              <tr>
                  <td>
                   <BiRocket  id="startPin"/> <h4>{props.title}</h4>
                  </td>
              </tr>

              <tr>
                  <td>
                   <RiTimeLine id="datePin" /> <h5>{props.date_time}</h5>
                  </td>
              </tr>


                <tr>
                    <td> 
                     {length > 100 && props.User ===  process.env.REACT_APP_NOMAIL1 || props.User  === process.env.REACT_APP_NOMAIL2 || props.User === process.env.REACT_APP_NOMAIL3 ? 
                                <div>
                                    <pre>{ReactHtmlParser(props.writeup.substring(0, props.writeup.indexOf(">")))} </pre>  
                                    <Ad> 
                                    ADVERTISMENT
                                    </Ad>  

                                    <pre>{ReactHtmlParser(props.writeup.substring(props.writeup.indexOf(">")+1, props.writeup.indexOf(">>")))} </pre>  
                                    <Ad>
                                      ADVERTISMENT
                                    </Ad> 
                                    
                                    <pre>{ReactHtmlParser(props.writeup.substring(props.writeup.indexOf(">>")+2, props.writeup.indexOf(">>>")))} </pre>  
                                    <Ad>
                                        ADVERTISMENT 
                                    </Ad> 

                                    <pre>{ReactHtmlParser(props.writeup.substring(props.writeup.indexOf(">>>")+3, props.writeup.length))} </pre>  
                                    <Ad>
                                        ADVERTISMENT 
                                    </Ad> 
                                </div>
                            :<div>
                             <Ad>
                               ADVERTISMENT
                             </Ad>  
                            <pre>{ReactHtmlParser(props.writeup)} </pre>  
                           </div>
                        }
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
color: #f5f5f5;
padding-bottom:100px;
}



h4{
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

>a{
text-decoration:none;
color: #33ff00;
}
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
 
text-align:center;
    
#startPin{
font-size:15pt;
}

h4{
font-size:12pt;
}


tr td{
max-width:97%;
width:97%;
float: none;
text-align:left;
}
}
`;



const Ad = styled.div`
width: 100%;
height: 150px;
color:#f5f5f5;
text-align:center;

`;

export default WriteUp;