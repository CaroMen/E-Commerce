import React from 'react';
import { homeHeader, storeInfo } from './Data';
import { Hero, StoreSection } from '../../components';

const Home = () => {
    return (
        <>
            <Hero {...homeHeader} />
            <StoreSection {...storeInfo} />
        </>
    )
}

export default Home
