import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal} from "../../redux/cart/cart.selectors";
import './checkout.styles.scss'
import CheckouItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

const CheckoutPage = ({cartItems, total}) =>{
    console.log(cartItems);
    console.log(total);
    return (
    <div className='checkout-page'> 
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => <CheckouItem key = {cartItem.id} cartItem={cartItem}/>)
        }
        <div className='total'>
            <span>TOTAL$:{total}</span>
        </div>
        <span style={{color:'red', fontSize:'20px', marginBottom:'0'}}>*Please use the following test credit card for payment</span>
        <span style={{color:'red', fontSize:'20px'}}>4242 4242 4242 4242 - Exp:01/22 - CW:123</span>
        <StripeCheckoutButton price={total}/>
    </div>
)};

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    total : selectCartTotal

})

export default connect(mapStateToProps)(CheckoutPage);