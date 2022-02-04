import styled from "styled-components";
import { useState } from "react";
import { BiRocket } from 'react-icons/bi';
import {RiEye2Line, RiEyeLine, RiShareLine, RiTimeLine}  from 'react-icons/ri'
import InstagramEmbed from 'react-instagram-embed';
import ReactHtmlParser  from 'html-react-parser'
import ShareDialog from './ShareDialog'





const WriteUp = (props) => {

    let length = props.writeup.length;
    const [showModel, setShowModel] = useState("close");



    const redirectUser = (e) => {
        e.preventDefault();
       // if(props.user){
            switch(showModel){
            case "open":
                setShowModel("close");
                break;

            case "close":
                setShowModel("open");
            break;

            default:
                setShowModel("close");
                break;
        };
//   }else
//       swal.fire({text:'Pls sign in to add Post', icon:'warning'})

    }


    return(
        <>
        <Container>
          <table>
              <tr>
                  <td>
                   <BiRocket  id="startPin"/> <h4>{props.title}</h4>   <div id="sharebtn" onClick={(e)=> redirectUser(e)}><RiShareLine/></div>
                  </td>
              </tr>

              <tr>
                  <td>
                   <RiTimeLine id="datePin" /> <h5>{props.date_time}</h5>
                  </td>
              </tr>

              <tr>
                  <td>
                      <label>
                        <RiEyeLine id="datePin" /> <h5>{props.views}</h5>
                      </label>
                   
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
      <Contain>
      <ShareDialog showModel={showModel}  musicArtist={props.frame} musicTitle={props.title}  musicThumb={props.media.includes(".mp4") ?  process.env.REACT_APP_S3_VIDEO_SECTION+props.media :  process.env.REACT_APP_S3_PICTURE_SECTION+props.media}   doc_id_b={props.doc_id_b} section="p"  redirectUser={redirectUser}  mail={props.User}/> 
      </Contain>
     </>
    )
}

const Contain = styled.div`
position: absolute;
top:0;
left:0;
height: 100vh;
width: 100%;
display: flex;
`;


const Container = styled.div`
text-align:left;
display: flex;


table{
max-width:90%;
width: 90%;
font-family: "Poppins", sans-serif;
color: #f5f5f5;
padding-bottom:100px;
font-size:12pt;
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
max-width:100%;
width:100%;
margin-left:10px;


#sharebtn{
margin-left:auto;
font-size:16pt;
cursor: pointer;
z-index:9999;
}

}


label{
margin-left:auto;
display:flex;
text-align:left;
align-items:center;
justify-content:center   
max-width:auto;
width:auto;
font-weight:700;
font-size:15pt;
h5{
font-size:15pt;
}
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
max-width: 100%;

table{
max-width:95%;
width: 95%;
font-size:14pt;
}
    
#startPin{
font-size:15pt;
}

h4{
font-size:12pt;
}


tr td{
max-width:99.5%;
width:99.5%;
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