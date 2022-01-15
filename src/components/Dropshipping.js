import  styled  from 'styled-components'
import Header from './Header'
import Ad from './Ad'
import {cartStated} from '../actions'
import { connect } from 'react-redux'



 const Dropshipping = (props) => {


    const clearImmediate = (e) => {
        props.cartStated(2);
    }

    return (
        <Container>
            <Causrosel>

            </Causrosel>
            <ItemOnSale>
            <button onClick={(e) => props.cartStated(1)}>Cart</button>
            <button onClick={(e) => clearImmediate()}>Clear</button>
            </ItemOnSale>
            
        </Container>
    )
 }



 const Container = styled.body`
 height: 100vh;
 width: 100%;
 margin:0;
 padding: 0;
 `;


const Causrosel = styled.div`
width: 75%;
height: 70px;
margin-left:auto;
margin-right:auto;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
margin-top:150px;

@media(max-width:768px){
width: 100%;
}
`;


const ItemOnSale = styled.div`
width: 75%;
height: 100vh;
background: #f5f5f5;
margin-left:auto;
margin-right:auto;
margin-top:15px;

@media(max-width:768px){
width: 100%;
}

`;




const mapStateToProps = (state) => {
    return{
        user:state.userState.user,
        cart:state.cartState.cart,
    };
}


const mapDispatchToProps = (dispatch) => ({
    cartStated: (e) => e === 1 ? dispatch(cartStated(true)) : dispatch(cartStated(false)),
})

 export default connect(mapStateToProps,mapDispatchToProps)(Dropshipping);


