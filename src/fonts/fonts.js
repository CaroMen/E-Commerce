import { createGlobalStyle } from 'styled-components';

import PlayfairDisplay-Medium from './PlayfairDisplay-Medium.ttf';
import PlayfairDisplay-Regular from './PlayfairDisplay-Regular.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'PlayfairDisplay';
        src: local('PlayfairDisplay'), local('PlayfairDisplay'),
        url(${PlayfairDisplay - Medium}) format('ttf'),
        url(${PlayfairDisplay - Medium}) format('ttf');
        font-weight: 300;
        font-style: normal;
    }
`;
