import styled from 'styled-components';

export const Products = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
margin-top: 200px;
margin-bottom: 100px;
/* justify-content: center; */
margin-left: 200px;
margin-right: 200px;
`

export const ProductImg = styled.div`
height: 100%;
width: 100%;
object-fit: fill;
`

export const ImageProd = styled.img`
padding: 0;
margin: 0;
right: 0;
left: 0;
width: 100%;
height: 100%;
`
export const ProductDesc = styled.p`
font-size: 20px;
display: grid;
grid-template-rows: 1fr;
`
export const Desc = styled.p`
font-size: 20px;
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
`
