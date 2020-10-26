import styled from 'styled-components';
import { AiOutlineStar } from "react-icons/ai";

export const StoreContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
margin-top: 100px;
margin-bottom: 100px;
padding-left: 150px;
padding-right: 150px;
`

export const StoreGrids = styled.div`
display: grid;
grid-template-rows: 1fr .5fr;
/* background-color: #F7F4F3; */
/* border-radius: 15px; */
/* margin-right: -18px; */
/* grid-column-gap: -150px; */
max-width:100%;
max-height:100%;
/* object-fit: contain; */
border-top: 3px solid #bbb;
padding: 20px 20px 20px 20px;
/* padding-left: 500px; */
margin-left: 30px;
margin-right: 30px;
/* box-shadow: -5px -4px 3px 0px rgba(255, 255, 255, 0.15),
            5px 4px 3px 0px rgba(88, 88, 88, 0.15); */

`

export const ImgStore = styled.img`
width: 100%;
height: 100%;
/* margin-bottom: -130px; */
object-fit: fill;
display: block;
`

export const ItemHeadline = styled.div`
/* margin-bottom: 24px; */
margin-top: -170px;
font-size: 34px;
line-height: 1.2;
`
export const Title = styled.p`
/* margin-bottom: 24px; */
/* margin-top: -160px; */
font-size: 19px;
line-height: 1.2;
text-align: center;
`

export const Price = styled.div`
/* margin-bottom: 24px; */
margin-top: -130px;
font-size: 24px;
line-height: 1.2;
`

export const Image = styled.div`
height: 100%;
width: 100%;
object-fit: fill;
`
export const Button = styled.button`
border-radius: 4px;
background: ${({ primary }) => (primary ? '#333947' : '#333947')};
white-space: nowrap;
padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
color: #fff;
font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
outline: none;
border: none;
cursor: pointer;

&:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background: ${({ primary }) => (primary ? '#333947' : '#333947')};
}
`

export const Rating = styled(AiOutlineStar)`
margin-right: 0.5rem;
margin-top: -120px;
font-size: 20px;
`
