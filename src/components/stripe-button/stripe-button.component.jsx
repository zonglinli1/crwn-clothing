import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) =>{
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JusGcKMbKbl46PUAoEfFL4Ty5OJqBRXwxiMYkwrrZQITA6A8PrrPRY2IgLkn6WLMmNgMT6NRC03eGQ5c9ob8DxS00zsmRZdlN';
    const onToken = token => {console.log(token);
    alert('Payment Successful');
    };
    return(
        <StripeCheckout
        label='Pay Now'
        name='VLF Clothing LTD.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;