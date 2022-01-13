import { RiArrowDownCircleLine, RiArrowDownLine, RiArrowDropDownFill, RiArrowDropDownLine, RiCloseCircleLine, RiPauseCircleLine, RiPlayCircleLine, RiSkipBackFill, RiSkipForwardFill } from "react-icons/ri"
import styled from "styled-components"
import { useState } from "react"






const Musicplayer = (props) => {

    const reset =  (e) => {
        props.PopUpPlayer(e);
    };

    let e = 1;
    console.log(props.musicData.musicTitle);

    return(
            <>
                {props.showPlayermodel === "open" &&(
                    <Container>
                        <WidgetButton>

                            <Widget>
                                <RiSkipBackFill/>
                                {
                                  e == 1 ? <RiPlayCircleLine/> :  <RiPauseCircleLine/>
                                }
                                <RiSkipForwardFill/>

                            </Widget>

                            <MusicPicture>
                              <img src={process.env.REACT_APP_BASE_URL+props.musicData.musicThumb}/>
                              <tr>
                                  <td>
                                  <h5>{props.musicData.musicTitle}</h5>
                                  <h4>{props.musicData.musicArtist}</h4>
                                  </td>
                              </tr>
                              
                            </MusicPicture>

                        </WidgetButton>

                        <ProgressCount>

                        </ProgressCount>


                        <DownloadShare>

                            <DownloadFile>

                            </DownloadFile>

                            <Incentivesection>

                            </Incentivesection>

                            <CloseSection>
                               <RiArrowDownCircleLine onClick={(e)=> reset(e)}/>
                            </CloseSection>

                        </DownloadShare>

                        
                    </Container>
                    )}
            </>
        )
}


const Container = styled.div`
display: flex;
position: fixed;
left: 0;
bottom: 0;
width: 100%;
background:#4180FF;
height:90px;
z-index:100;

@media(max-width:768px){
margin-bottom:55px;
height: 70px;
}

`;




const ProgressCount = styled.div`
width: 45%;
height: 100%;
background: green;
`;



const WidgetButton = styled.div`
display: flex;
width:25%;
height: 100%;
`;

const Widget = styled.div`
display: flex;
font-size:20pt;
width: 35%;
height: 100%;
padding-top: 35px;
cursor: pointer;
justify-content:center;

@media(max-width:768px){
padding-top: 20px;
}
`;


const MusicPicture = styled.div`
display: flex;
justify-content:space-evenly;
align-items:center;
text-align:center;
width: 65%;
height: 100%;


img{
height: 70px;
width: 70px;
margin-top: 12px;
border-radius:50%;
object-fit:cover;
}

h5{
font-size:12pt;
margin: 5px;
}

h4{
font-size:8pt;
margin: 5px;
color: #b8b9be;
}
`;




const  DownloadShare = styled.div`
display: flex;
width: 30%;
height: 100%;
background: yellow;
cursor: pointer;

`;

const Incentivesection = styled.div`
width: 40%;
height: 100%;
`;


const DownloadFile = styled.div`
width: 40%;
height: 100%;
`;

const CloseSection = styled.div`
width: 20%;
height: 100%;
font-size:20pt;
text-align:right;
padding: 10px;
`;





export default Musicplayer;