import React from 'react';
import './BasketPageBody.scss';
import contentsImage from '../../Assets/Images/contents.svg';
import BasketItem from '../BasketItem/BasketItem';

const items = [
    {
        name: '54 Rubenstein Drive',
        type: 'Home contents cover',
        price: 225,
        image: contentsImage
    },
    {
        name: '54 Rubenstein Drive',
        type: 'Home contents cover',
        price: 225,
        image: contentsImage
    },
    {
        name: '54 Rubenstein Drive',
        type: 'Home contents cover',
        price: 225,
        image: contentsImage
    }
]

const BasketPageBody = () => {
    const sum = items.reduce((s, item) => s + item.price, 0);

    return <section className="basket-page-body">
        <section className="basket-content">
            <h2>Your basket</h2>
            <label className="cover-date">
                <div className="calendar icon">&#xe906;</div>
                <span>
                    Cover starts <span className="date">today</span>
                </span>
                <div className="edit icon">&#xe907;</div>
            </label>
            <div className="basket-items">
                {
                    items.map((item, i) => (
                        <BasketItem item={item} 
                            key={i}/>
                    ))
                }

                
            </div>
            <button className="buy">
                <span>
                    Buy cover from <span className="price">R{sum}pm</span>
                </span>
                <div className="icon">&#xe901;</div>
            </button>
        </section>
        <button>
            <span>Get another price</span>
            <div className="icon">&#xe900;</div>
        </button>
    </section>;
};

export default BasketPageBody;