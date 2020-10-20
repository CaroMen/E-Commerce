import styled, { createGlobalStyle } from 'styled-components';
import Playfair from './fonts/PlayfairDisplay-Medium.ttf'


const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap');

* {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    font-family: 'Playfair', serif;
    src: url(${Playfair});
    // overflow-x: hidden;
    // background-color: #D0CCD0;
}

html, body {
    overflow-x: hidden;
}
`;

export const Container = styled.div`
z-index: 1;
width: 100%;
max-width: 1300px;
margin-right: auto;
margin-left: auto;
padding-right: 50px;
padding-left: 50px;

@media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
}
`;

export default GlobalStyle
