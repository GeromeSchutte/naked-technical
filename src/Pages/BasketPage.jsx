import React, { useCallback, useEffect, useState } from 'react';
import BasketPageBody from '../Components/BasketPageBody/BasketPageBody';
import Layout from '../Components/Layout/Layout';
import { API as AmplifyAPI, graphqlOperation as gq } from 'aws-amplify';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';
import faker from 'faker';
import carImg from '../Assets/Images/car.svg';
import cameraImg from '../Assets/Images/camera.svg';
import contentsImg from '../Assets/Images/contents.svg';
import phoneImg from '../Assets/Images/phone.svg';

const mapItemTypeToDescription = (type) => {
    switch (type) {
        case 'Car':
            return 'Comprehensive car cover';
        case 'Home':
            return 'Home contents cover';
        default: 
            return 'Single item cover';
    }
};

const mapItemTypeToImage = (type) => {
    switch (type) {
        case 'Car':
            return carImg;
        case 'Home':
            return contentsImg;
        case 'Phone':
            return phoneImg;
        case 'Camera':
            return cameraImg;
    }
};

const createBasket = async () => {
    const basketId = uuidv4();
    
    const newBasket = {
        basketId,
        startDate: dayjs().format('YYYY-MM-DD'),
        totalPremium: 0
    };

    const res = await AmplifyAPI.graphql(gq(mutations.createBasket, {
        input: newBasket
    }));

    return res.data.createBasket;
};

const BasketPage = () => {
    const [basketId, setBasketId] = useState(null);
    const [basket, setBasket] = useState(null);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getSessionBasket = async() => {
            let sessionBasket;

            const sessionBasketId = sessionStorage.getItem('basketId');

            if (sessionBasketId) {
                const res = await AmplifyAPI.graphql(gq(queries.getBasket, {basketId: sessionBasketId}));
                sessionBasket = res.data.getBasket;
            }

            if (!sessionBasket) {
                sessionBasket = await createBasket(); 
            }
            
            sessionStorage.setItem('basketId', sessionBasket.basketId);
            
            setBasketId(sessionBasket.basketId);
            setBasket(sessionBasket);

            console.log(sessionBasket);
        };

        getSessionBasket();
    }, [basketId]);

    useEffect(() => {
        const items = basket?.items?.items?.map(item => {
            return {
                ...item,
                image: mapItemTypeToImage(item.itemType),
                type: mapItemTypeToDescription(item.itemType)
            };
        }) ?? [];
        setItems(items);
    }, [basket]);

    const addItem = useCallback(async() => {
        const newItem = {
            itemId: uuidv4(),
            title: faker.random.words(2),
            subtitle: faker.random.words(2),
            premium: faker.random.number(1000),
            itemType: faker.random.arrayElement(['Home', 'Car', 'Phone', 'Camera']),
            itemBasketId: basketId
        };

        const newItems = [
            ...basket.items.items,
            newItem
        ];

        const newTotal = newItems.reduce((s, item) => s + item.premium, 0);

        const newBasket = {
            ...basket,
            items: {
                items: newItems
            },
            totalPremium: newTotal
        };

        setBasket(newBasket);

        await AmplifyAPI.graphql(gq(mutations.createItem, {input: newItem}));
        await AmplifyAPI.graphql(gq(mutations.updateBasket, {input: { totalPremium: newTotal, basketId }}));
    }, [basket, basketId]);

    const removeItem = useCallback((itemIndex) => {
        return async () => {
            const item = items[itemIndex];
            items.splice(itemIndex, 1);

            const newTotal = basket.totalPremium - item.premium;

            const newBasket = {
                ...basket,
                items: {
                    items
                },
                totalPremium: newTotal
            };

            setBasket(newBasket);

            await AmplifyAPI.graphql(gq(mutations.deleteItem, { input: {itemId: item.itemId }}));
            await AmplifyAPI.graphql(gq(mutations.updateBasket, {input: { totalPremium: newTotal, basketId }}));
        };
    }, [items, basket, basketId])

    return <Layout 
        basketCount={items.length}>
        <BasketPageBody 
            items={items}
            price={basket?.totalPremium ?? 0}
            addItem={addItem}
            removeItem={removeItem}/>
    </Layout>;
};

export default BasketPage;