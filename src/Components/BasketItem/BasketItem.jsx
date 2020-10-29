import React from 'react';
import './BasketItem.scss';

const BasketItem = ({ item, removeItem }) => {
    return <div className="basket-item">
        <div className="item-header">
            <div className="close"
                onClick={removeItem}>&#xe904;</div>
        </div>
        <div className="item-details">
            <img alt="item"
                src={item.image}/>
            <span className="name">{item.title}</span>
            <h3 className="type">{item.type}</h3>
            <div className="price">
                R{item.premium}
                <span>pm</span>
            </div>
        </div>
    </div>;
};

export default BasketItem;