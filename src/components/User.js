import React, { useState } from 'react'
import styled from 'styled-components'
import Ad from './Ad';
import Header from './Header';
import swal from 'sweetalert2'
import Postmodel from './Postmodel';
import { connect } from 'react-redux';
import { useEffect } from 'react';


const User = (props) => {

    const [showModel, setShowModel] = useState("close");

    const redirectUser = (e) => {
        e.preventDefault();
        if(props.user){

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
  }else
      swal.fire(
                 {text:'Pls sign in to upload your products ',
                 icon:'warning'})

    }

    useEffect(() => window.scrollTo(0,0))

    return(
        <Container>
            <Header/>
            <Ad/>
            <Section>
                <Signinusersection>
                    <User_Page>
                    <CardBackground/>
                           <UserInfo>
                                <UserNameDisplay>
                                Welcome {props.user ? props.user.displayName : "user" }  
                                </UserNameDisplay>
                            </UserInfo>

                            <Sharebox  onClick={(e) => {redirectUser(e)}}>
                                 What would you like to share?
                                <div>
                                {props.user ?  <img src={props.user.photoURL} alt=""/> : <img src="images/user.svg" alt=""/>}
                                <button>Start a post</button>
                              </div>
                            </Sharebox>
                    </User_Page>


                    <User_Page2>
                      <CardBackground/>
                          
                    </User_Page2>
                </Signinusersection>
                


                <Signinuserrightsection>
                
                </Signinuserrightsection>
                
            </Section>
            <Postmodel showModel={showModel} redirectUser={redirectUser}/>
        </Container>
    )
}


const Container = styled.div`




`;

const Section = styled.section`
        width:100%;
        height: 100vh;
        margin-top:150px;
        text-align: center;

        @media(max-width: 768px) {
            height: auto;
        }

`;


const User_Page =  styled.div`
    overflow:hidden;
    margin-bottom: 8px;
    width:100%;
    background-color: #fff;
    border-radius: 5px;
    transition: box-shadow 83ms;
    border:none;
    box-shadow: 0 0 0 1px rgba(0 0 0/15%), 0 0 0 rgba(0 0 0/20%);

    @media(max-width:768px){
        width:100%;
        margin-left:auto;
        margin-right:auto;
    }
`;



const User_Page2 =  styled(User_Page)`
    height:200px;
    width:100%;
    margin-top:50px;

    @media(max-width:768px){
        width:100%;
        margin-left:auto;
        margin-right:auto;
    }
`;



const UserInfo = styled.div`
        border-bottom:1px solid rgba(0,0,0,0.15);
        padding: 12px 12px 16px;
        word-wrap:break-word;
        word-break:break-word;

`;



const CardBackground = styled.div`
        background: url('/images/card-bg.svg');
        background-position:center;
        background-size:462px;
        height:54px;
        margin: -12px -12px 0;


`;


const UserNameDisplay = styled.div`
        margin-top:20px;

`;

const CommonCard = styled.div`
    text-align:center;
    overflow:hidden;
    margin-bottom:3px;
    background-color:#fff;
    border-radius:5px;
    position:relative;
    border:none;
    box-shadow: 0 0 0 1pz rgba(0 0 0 /15%), 0 0 0 rgba(0 0 0/20%);
  
`;



const Sharebox = styled(CommonCard)`
        display: flex;
        flex-direction:column;
        color:#95ab7b;
        margin: 0 0 8px;
        background:white;
        margin-top:15px;
       
        div{
            button{
                outline:none;
                color:rgba(0,0,0,0.6);
                font-size:14px;
                line-height:1.5px;
                min-height:48px;
                background:transparent;
                border:none;
                display:flex;
                align-items:center;
                font-weight:600;
            }
            &:first-child{
                display:flex;
                align-items:center;
                padding: 8px 16px 0px 16px;
            }
            img{
                width:58px;
                border-radius:50%;
                margin-right:8px;
            }
            button{
                margin: 4px 0;
                flex-grow:1;
                border-radius:35px;
                padding-left:16px;
                border:1px solid rgba(0,0,0,0.15);
                background:#fff;
                text-align:left;
            }
        }



        @media(max-width:768px){
            div{
                img{
                    width:38px;
                }
                button{
                min-height:38px;
               }
            }
        }
`;


const Signinusersection  = styled.div`
    height: 80vh;
    width: 40%;
    display: inline-block;
    overflow:hidden;
    margin-bottom:8px;
    border-radius: 5px;
    transition: box-shadow 83ms;
    position: relative;
    border: none;
    margin-bottom: 25px;
    margin:10px;
   
   

    @media(max-width: 768px) {
        width: 90%;
        display: block;
        margin: auto;
        margin-bottom: 25px;
        margin-top: 100px;
        
    }

`;


const Signinuserrightsection = styled(Signinusersection)`
        box-shadow: 0 0 0 1px rgba(0 0 0/15%), 0 0 0 rgba(0 0 0/20%);

`;



const mapStateoProps = (state) =>{
    return{
        user:state.userState.user,
    };
};

const mapDipatchToProps = (dipatch) => ({

})

export default connect(mapStateoProps,mapDipatchToProps)(User);