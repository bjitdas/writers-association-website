import React from 'react';
import { FaUser } from 'react-icons/fa';
import './cart.css'

const Cart = (props) => {
    const {cart} = props;
    console.log(cart)
    let totalCost = 0;
    let totalAdded = 0;
    
    totalAdded = totalAdded + cart.length;
    for(const author of cart){
        totalCost = totalCost + author.salary;
    }

    return (
        <div>
            <h4> <FaUser/>  Added Writers: {totalAdded}</h4>
            {
                cart.map(author => <li>{author.name}</li>)
            }
            <h4>Total Cost: ${totalCost}</h4>
            <button className="buy-btn">Buy Now</button>
        </div>
    );
};

export default Cart;