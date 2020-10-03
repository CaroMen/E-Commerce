import React from 'react';
import { homeHeader, homeStore } from './Data';
import { Hero } from '../../components';

const Home = () => {
    return (
        <>
            <Hero {...homeHeader} />
            <Hero {...homeStore} />
        </>
    )
}

export default Home
