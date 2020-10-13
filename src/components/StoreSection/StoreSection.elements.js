import styled from 'styled-components';

export const StoreSec = styled.div`
color: black;
padding: 160px 0;
`;

export const FirstRowStore = styled.div`
display: flex;
margin: 0 -15px -15px -15px;
flex-wrap: wrap;
align-items: center;
flex-direction: row;
`;

export const StoreTextWrapper = styled.div`
max-width: 450px;
padding-top: 240px;
padding-bottom: 60px;
`;

export const StoreTextWrapperDesc = styled.div`
margin-left: 300px;
width: 100%;
`;

export const IntroDesc = styled.p`
margin-top: 10px;
font-size: 25px;
line-height: 1.1;
margin-bottom: 20px;
`

export const StoreNewSec = styled.div`
padding-right: 15px;
margin-top: 0px;
max-width: 40%;
position: relative;
text-align: right;
display: grid;
grid-template-columns: 100% 100%;
width: 50%;
margin-right: 30px;
flex: 1;
`

export const HeadLine = styled.h3`
margin-bottom: 24px;
padding-top: 150px;
font-size: 44px;
line-height: 1.2;
`;

export const IntroHeadLine = styled.h3`
margin-bottom: 24px;
padding-top: 150px;
font-size: 44px;
line-height: 1.2;
`;

export const StoreIntroSec = styled.div`
padding-right: 15px;
padding-left: 15px;
margin-top: -450px;
max-width: 33%;
flex-basis: 33%;
`;

export const SubtitleCat = styled.p`
margin-top: 10px;
font-size: 25px;
line-height: 1.1;
padding-left: -15px;
`;


export const Img = styled.img`
padding: 0;
margin: 0;
right: 0;
left: 0;
width: 100%;
height: 100%;

@media screen and (max-width: 768px) {
    margin-top: 105px;
    margin-bottom: -130px;
}
`;
