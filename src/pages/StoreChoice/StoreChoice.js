import React from 'react';
import { storeSect } from './Data';
import { StoreSite } from '../../components';

const Home = () => {
    return (
        <>
            <StoreSite {...storeSect} />
        </>
    )
}

export default Home
