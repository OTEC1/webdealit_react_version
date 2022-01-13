import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Loader from 'react-loader-spinner'
import  styled  from 'styled-components'
import Header from './Header'
import Ad from './Ad'
import {RiAlbumLine, RiContactsBook2Line, RiDownloadCloudLine, RiHeadphoneLine, RiMenu2Line, RiPlayList2Line, RiSortDesc, RiSpeaker2Line, RiUpload2Line} from 'react-icons/ri'
import Musicplayer from './Musicplayer'



 const Music = (props) => {

    const [music, setMusic] = useState([]);
    const [errand, setErrand] = useState('');
    const [showPlayermodel, setshowPlayermodel] = useState("close");
    const [pageErrand,setpageErrand] = useState({musicArtist:"",musicTitle:"",musicUrl:"",musicVideoUrl:"",musicThumb:"",promoIncentive:""})
   


    const PopUpPlayer  = (e,v) => {
        e.preventDefault();
        switch(showPlayermodel){
            case "open":
                setshowPlayermodel("close");
                break;
            case "close":
                 setshowPlayermodel("open")
                 break;

            case "close":
                setshowPlayermodel("close");
                 break;

            default:
                setshowPlayermodel("close");
                break;
        }
    }







    useEffect(() => {
        axios.get(process.env.REACT_APP_GET_SONG)
        .then(res => {
            console.log(res.data.message);
            setMusic(res.data.message);
        }).catch(err=> {
            console.log(err);
        })

    },[])

  


    return (
        <>
                <Container>
                    <Header/>
                    <Ad/>

                    <SideNav>
                            <Grooves>
                                Groove
                            </Grooves>


                            <MenuBar>
                                <RiMenu2Line/>
                            </MenuBar>

                            <HR>
                                <hr/>
                            </HR>
                            <table>

                                <tr>
                                    <td>
                                        <TabInfo>
                                        <RiHeadphoneLine/> &nbsp;&nbsp; Your Groove
                                        </TabInfo>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <SubContainer>
                                        <RiSortDesc/> Sort By
                                        </SubContainer>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    <SubContainer>
                                        <RiDownloadCloudLine/> Trending
                                        </SubContainer>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    <SubContainer>
                                        <RiAlbumLine/> Album
                                        </SubContainer>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <SubContainer>
                                        <RiPlayList2Line/> Genre
                                        </SubContainer>
                                    </td>
                                </tr>
                            </table>  

                            <HR>
                                <hr/>
                            </HR>

                            <table>
                                <tr>
                                    <td>
                                        <TabInfo1>
                                            QUICK ACCESS
                                        </TabInfo1>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <SubContainer>
                                        <RiSpeaker2Line/> Promote Music
                                        </SubContainer>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    <SubContainer>
                                        <RiUpload2Line/> Upload music
                                        </SubContainer>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    <SubContainer>
                                        <RiContactsBook2Line/> Contact webdealz
                                        </SubContainer>
                                    </td>
                                </tr>
                            
                            </table>  


                    </SideNav>
                    
                    <MusicBanner>
                        <TopMostPart>
                                <h1>
                                Music Collection
                                </h1>
                            
                        </TopMostPart>
                        <SecondTopMost>
                            <table>
                                <tr>
                                    <td>
                                        <Tabs>Artist &nbsp;&nbsp;</Tabs> 
                                        <Tabs>Album &nbsp;&nbsp;</Tabs>
                                        <Tabs>Playlist &nbsp;&nbsp;</Tabs>  
                                    </td>
                                </tr>
                            </table>
                        </SecondTopMost>

                        <MusicMedias>
                            {music.length> 0 ? (
                                 music.map((v,i) => 
                                    <MusicGlide>
                                        
                                         <img 
                                         onClick={(e) => PopUpPlayer(e,setpageErrand({musicTitle:v.Music.music_title, musicThumb:v.Music.music_thumbnail, musicArtist:v.Music.music_artist, musicVideoUrl:v.Music.music_video, musicUrl:v.Music.music_url, promoIncentive:"https://"}))} src={process.env.REACT_APP_BASE_URL+v.Music.music_thumbnail}/>
                                           <h4>{v.Music.music_title}</h4>
                                           <h5>{v.Music.music_artist}</h5>
            
                                    </MusicGlide>
                                )
                                 ):(
                                    <div  id="loader">
                                        <Loader
                                        type="Oval"
                                        color="#4180FF"
                                        height={100}
                                        width={100} 
                                        />
                                    </div>
                              )}
                        </MusicMedias>

                    </MusicBanner>
                    <Musicplayer  showPlayermodel={showPlayermodel}   PopUpPlayer={PopUpPlayer}  musicData={pageErrand}/>
                </Container>
        </>
    )
 }



 const Container = styled.div`
 display:flex;
 
#loader{
height:200px;
width:200px;
margin-left:auto;
margin-right:auto;
margin-top:10%;
}
 `;


const SideNav = styled.div`
width:20%;
height:100vh;
background:#f2f5fc;
margin-top:137px;
padding-left:18px;

@media(max-width:768px){
display: none;
}
`;


const SubContainer = styled.div`
margin-top:15px;
color: #b8b9be; 
font-size:10pt;
`;


const TabInfo = styled.div`
display:flex;
justify-content:center;
align-items:center;
text-align:center;
font-weight:700;
color:#b8b9be;
margin-top:10px;
`;


const TabInfo1 = styled(TabInfo)`
margin-left:-20px;

`;


const Grooves = styled.div`
width: 70%;
padding-top:20px;
font-weight:800;
font-family: "Poppins", sans-serif;
`;


const MenuBar = styled(Grooves)`
font-weight:none;
font-size:20pt;
color: #b8b9be;


`;


const HR = styled(Grooves)`
font-weight:none;
color: #b8b9be;
`;




const MusicBanner = styled.div`
width:80%;
height:100vh;
margin-top:137px;



@media(max-width:768px){
width: 100%;
}
`;


const TopMostPart = styled.div`
width: 100%;
color:#000000;


h1{
margin-left:20px;
font-size:30pt;
font-weight:1000;
color:#000000;
font-family: "Poppins", sans-serif;
}


`;


const SecondTopMost = styled.div`
width: 100%;
margin-top:10px;

 

`;


const Tabs = styled.span`
font-weight:600;
cursor:pointer;
font-family: "Poppins", sans-serif;
margin-left:18px; 
`;



const MusicMedias = styled.div`
height: 100%;
width: 100%;
`;


const MusicGlide = styled.div`
display: inline-block;
margin: 10px;
width: 200px;
height: 200px;
text-align:center;
font-family: "Poppins", sans-serif;

img{
width: 200px;
height: 200px;
object-fit:cover;
}

h4{
color: #000000;
margin: 0px;
}

h5{
color:#b8b9be;
margin: 0px;
}
`;


 export default Music;


