import styled  from "styled-components";
import {RiShoppingBag2Fill, RiNavigationLine, RiMenu3Line} from 'react-icons/ri'
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { useState } from "react";






const Ad = (props) => {

    const history = useNavigate();

    const cartView =()=> {
        history("/cart")
    }

  

    return(
        <>
          <Container>
                  
          </Container>
        </>
    )
}



const Container = styled.div`
height: 12vh;
width: 100%;
background-color: white;
border-bottom: 1px solid rgba(0,0,0, 0.08);
margin:auto;
top:55px;
left: 0;
padding: 0  24px;
position:  fixed;
z-index: 99;
`;


const mapStateToProps = (state) => {
    return{
        user:state.userState.user,
        cart:state.cartState.cart,
    };
};

const mapDispatchToProps = dispatch => ({});


export default connect(mapStateToProps,mapDispatchToProps)(Ad);