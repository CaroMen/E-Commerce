import React from 'react';
import { homeHeader, storeInfo, optionsInfo } from './Data';
import { Hero, StoreSection, Options } from '../../components';

const Home = () => {
    return (
        <>
            <Hero {...homeHeader} />
            <StoreSection {...storeInfo} />
            <Options {...optionsInfo} />
        </>
    )
}

export default Home
