import { useState ,useRef} from 'react';
import styled from 'styled-components'
import {RiAccountCircleFill, RiAccountCircleLine, RiArrowDownLine,RiMenu3Line, RiArrowLeftRightLine, RiArrowRightCircleLine, RiMovie2Line, RiMusic2Line, RiNavigationLine, RiSearch2Line, RiShoppingBag2Fill, RiShoppingBag3Line, RiUser2Line, RiVideoLine} from 'react-icons/ri'
import { useNavigate }  from 'react-router-dom'
import { connect } from 'react-redux';
import {signOutGoogleApi, signOutCustomApi}  from  '../actions'


const  Header = (props) => {

    const [query, setQuery] = useState('');
    const history = useNavigate();


    const homeNav = () => {
        history("/");
    }

    const userNav = () => {
        history("/user");
    }


    const Streaming = () => {
        history("/Streaming");
    }


    const Music = () => {
        history("/Music");
    }

   
    const dropshipping = () => {
        history("/dropshipping");
    }

   

    const auth = () => {
       var data = document.getElementById("authstate").innerText;

        if(data === "Login")
            history("/auth")
            else{
                history("/")
                props.user.displayName ? props.logout(2) : props.logout(1)
            }
         
    }

  

    return (
        <Container>
            <Content>
                   <Webdealit onClick={homeNav}>
                    <img src="/images/webfly_logo.png"/>
                      Webfly
                    </Webdealit>


                    <NavBar>
                         <RiMenu3Line  id="menu" color="#4180FF"/>
                    </NavBar>

                        

                <Search>
                    <div>
                        <input placeholder='Search for music,post,video' value={query}  onChange={(e) => setQuery(e.target.value)} />
                    </div>
                    <SearchIcon>
                        <RiSearch2Line
                            size={15}
                            color='#000'/>
                    </SearchIcon>
                </Search>

                <Nav>
                    <Navlist>
                        <Navchild onClick={userNav}>
                           
                               
                                <a>
                                {props.user  ?
                                    (
                                    <RiAccountCircleFill
                                    size={20}
                                    color="#0D96FF"/>
                                    ):(
                                    <RiAccountCircleLine
                                    size={20}
                                    color="#000"/>
                                    )}
                                    <span  style={ props.user ? {color:"#0D96FF"} :  {color:"#000"} }>User</span>
                                </a>
                                
                            
                        </Navchild>


                        <Navchild  onClick={Streaming}>
                            <a>
                                <RiMovie2Line
                                size={20}
                                color="#000"/>
                                <span>Stream</span>
                            </a>
                        </Navchild>


                        <Navchild   onClick={Music}>
                            <a>
                                <RiMusic2Line
                                size={20}
                                color="#000"/>
                                <span>Download</span>
                            </a>
                        </Navchild>


                        <Navchild  onClick={auth}>
                            <a>
                                <RiArrowRightCircleLine
                                size={20}
                                color="#000"/>
                                <span id='authstate'> {props.user ? "Logout": "Login"}</span>
                            </a>
                        </Navchild>

                    </Navlist>
                </Nav>

            </Content>
        </Container>
    )

}


const Container = styled.div`  
background-color: white;
left: 0;
padding: 0  24px;
position:  fixed;
top: 0;
width: 100%;
z-index: 99;
height: 60px;

`;


const Content = styled.div`
display: flex;
align-items: center;
margin: 0 auto;
min-height: 100%;
max-height: 60%;
max-width: 1128px;
`;



const Webdealit = styled.div`
padding: 10px;
color: #4180FF;
font-size:20pt;
font-weight:700;
font-family: "Poppins", sans-serif;
margin: 5px;
margin-top:-10px;
cursor: pointer;

img{
width: 50px;
height: 50px;
}

@media(max-width:768px){
font-size:15pt;
margin: 0px;
margin-top:-20px;
margin-left:-20px;
}

`;


const Search = styled.div`
opacity:1;
flex-grow:1;
position: relative;
margin-top:10px;
& > div{
max-width:280px;
input{
border: none;
box-shadow:none;
background-color:#ffffff;
border-radius:7px;
color: rgba(0,0,0,0.9);
width: 218px;
padding: 0 8px 0 40px;
line-height:1.75;
font-weight:400;
font-size:14px;
height: 34px;
border-color:#dce6f1;
vertical-align:text-top;
text-align:left;
}

@media(max-width:1200px){
input{
width: 178px;
}
}

@media(max-width:768px){
input{
display: none;
}
}
}

&:hover{
input{
background-color: #eef3f8;
}

`;






const NavBar = styled.div`
#menu{
display: none;
}
@media(max-width:768px){
position: absolute;
top:0;
right: 0;
margin:10px;
width: 100px;
height: auto;
display: flex;
justify-content:space-between;
font-size:25pt;

#menu{
display: block;
}
}

`;


const SearchIcon =  styled.div` 
width: 40px;
position: absolute;
z-index: 1;
top:10px;
left: 2px;
margin:0;
cursor:pointer;
display: flex;
justify-content: center;

@media(max-width:768px){
display: none;
}
`;



const Nav = styled.nav`
margin-left: auto;
display: block;



@media(max-width: 768px){
position: fixed;
left: 0;
bottom: 0;
background:white;
width: 100%;
} 

`;


const Navlist = styled.ul`
display: flex;
flex-wrap:nowrap;
list-style-type:none;
@media(max-width: 1200px){
margin-right: 40px;
} 

@media(max-width:768px){
width: 100%;
height: 60px;
display: flex;
justify-content: center;
align-items: center;
position: fixed;
bottom: 0;
background: #ffffff;
}
`;


const Navchild = styled.li`
display: flex;
align-items: center;
cursor: pointer;
a{
align-items: center;
background:transparent;
display: flex;
flex-direction: column;
font-size: 12px;
font-weight: 400;
justify-content: center;
line-height: 1.5;
min-height:42px;
max-width: 250px;
margin-left: 45px;
margin-top:0px;
position: relative;
text-decoration: none;

span{
color: rgba(0,0,0,0.6);
display: flex;
align-items: center;
}
}


@media(max-width:1100px){
width: 25%;
text-align:left;
a{
width: 20%;
height:100%;
display: flex;
justify-content: center;
align-items: center;
margin-left:25px;
}
} 


&:hover, &:active{
a{
span{
color:rgba(0,0,0,0.9);
}
}
}
`;





const mapStateToProps = (state) => {
    return{
        user: state.userState.user,
    };
};

const mapDispatchToProps = dispatch => ({
    logout :(e) => e === 1 ?  dispatch(signOutCustomApi()) : dispatch(signOutGoogleApi()),
});


export default connect(mapStateToProps,mapDispatchToProps)(Header);






