import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './Writer.css'

const Writer = (props) => {
    const {name, country, job, salary, born, img} = props.writer;

    return (
        <div className="all-author">
            <div className="img-container">
                <img src={img} alt="" />
            </div>
            <div className="author-detail">
                <h3>Name: {name}</h3>
                <h4>Country: {country}</h4>
                <h4>Category: {job}</h4>
                <h4>Salary: ${salary}</h4>
                <h4>Born: {born} </h4>
                <button onClick={() => props.handleAddToCart(props.writer)} className="add-btn"><FaShoppingCart/> Add To Cart</button>
            </div>
        </div>
    );
};

export default Writer;