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
                    <Cart_NavBar>
                        <Cart>
                            {props.cart ? (
                                <Navchild  onClick={cartView}>
                                    <a>
                                    <RiShoppingBag2Fill
                                        color="#3cff00"/>
                                        <span>{props.cart}</span>
                                    </a>
                                </Navchild>
                                ):(
                                <p></p>
                                )}
                         </Cart>

                         <RiMenu3Line  id="menu" color="#4180FF"/>

                    </Cart_NavBar>
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



const Cart_NavBar = styled.div`
position: absolute;
top:0;
right: 0;
margin-right:60px;
width: 100px;
height: auto;
display: flex;
justify-content:space-between;
font-size:25pt;

#menu{
display: none;
}
@media(max-width:768px){
margin-right:60px;

#menu{
display: block;
}
}

`;



const Cart = styled.div`


`;





const Navchild = styled.div`
align-items: center;
cursor: pointer;


}


@media(max-width:1100px){

}
`;




const mapStateToProps = (state) => {
    return{
        user:state.userState.user,
        cart:state.cartState.cart,
    };
};

const mapDispatchToProps = dispatch => ({});


export default connect(mapStateToProps,mapDispatchToProps)(Ad);