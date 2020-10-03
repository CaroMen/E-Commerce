import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from "react-icons/ai";

export const Header = styled.div`
color: black;
padding: 160px 0;

`;

export const FirstRow = styled.div`
display: flex;
margin: 0 -15px -15px -15px;
flex-wrap: wrap;
align-items: center;
flex-direction: row;
`;

export const TextWrapper = styled.div`
max-width: 450px;
padding-top: 0px;
padding-bottom: 60px;
`;

export const Heading = styled.h1`
margin-bottom: 24px;
font-size: 54px;
line-height: 1.2;
`;

export const Subtitle = styled.p`
margin-top: 10px;
font-size: 15px;
line-height: 1.1;
`;

export const HeaderColumn = styled.div`
padding-right: 15px;
padding-left: 15px;
max-width: 33%;
flex-basis: 33%;
`;

export const ImgWrapper = styled.div`
max-width: 500px;
display: flex;
justify-content: center;
`;

export const Img = styled.img`
padding-right: 20px;
border: 0;
max-width: 100%;
vertical-align: middle;
display: inline-block;
max-height: 700px;

@media screen and (max-width: 768px) {
    margin-top: 105px;
    margin-bottom: -130px;
}
`;

export const HeaderColumnType = styled.div`
padding-right: 15px;
padding-left: 15px;
max-width: 33%;
flex-basis: 33%;
`;

export const HeaderColumnIntro = styled.div`
padding-right: 15px;
padding-left: 15px;
margin-top: -450px;
max-width: 33%;
flex-basis: 33%;
`;

export const StoreLink = styled(Link)`
color: #1F1F1E;
text-decoration: none;
padding-top: -40px;
display: flex;
justify-content: flex-end;
margin-right: 40px;
`;

export const GoIcon = styled(AiOutlineArrowRight)`
margin-left: 0.5rem;
padding-top: -20px;
display: inline-block;
`;
