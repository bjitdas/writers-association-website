import React, { useEffect, useState } from 'react';
import Cart from '../Cart/cart';
import Writer from '../Writer/Writer';
import './Writers.css'

const Writers = () => {
    const [writers, setWriters] = useState([]);
    const [cart, setCart] = useState([]);
    
    useEffect(() =>{
        fetch('./writers.json')
            .then(res => res.json())
            .then(data => setWriters(data))
    },[])

    const handleAddToCart = writer => {
        const newCart = [...cart, writer];
        setCart(newCart)
    }

    return (
        <div>
           <div className="all-container">
                <div className="writer-container">
                    {
                        writers.map(writer => <Writer 
                            key={writer.id}
                            writer={writer}
                            handleAddToCart={handleAddToCart}
                        ></Writer>
                    )}
                </div>
                <div className="cart-container">
                    <div className="cart-container-detail">
                        <Cart cart={cart}></Cart>
                    </div>
                </div>
        </div> 
        </div>
    );
};

export default Writers;