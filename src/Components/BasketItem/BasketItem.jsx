import React from 'react';
import './BasketItem.scss';

const BasketItem = ({ item }) => {
    return <div className="basket-item">
        <div className="item-header">
            <div className="close">&#xe904;</div>
        </div>
        <div className="item-details">
            <img alt="item"
                src={item.image}/>
            <span className="name">{item.name}</span>
            <h3 className="type">{item.type}</h3>
            <div className="price">
                R{item.price}
                <span>pm</span>
            </div>
        </div>
    </div>;
};

export default BasketItem;