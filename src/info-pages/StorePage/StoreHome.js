import React from 'react';
import { storeInfo } from './Data';
import { StoreSection } from '../../components';

const Home = () => {
    return (
        <>
            <StoreSection {...storeInfo} />
        </>
    )
}

export default Home
