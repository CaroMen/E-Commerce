import React from 'react';
import { optionsInfo } from './Data';
import { Options } from '../../components';

const Home = () => {
    return (
        <>
            <Options {...optionsInfo} />
        </>
    )
}

export default Home
