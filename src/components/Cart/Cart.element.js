import styled from 'styled-components';

export const CartContainer = styled.div`
display: grid;
/* grid-template-columns: 80% 1fr 1fr; */
grid-template-rows: 1fr 1fr ;
margin-bottom: 100px;
`

export const CartTitles = styled.div`
display: grid;
grid-template-columns: 80% 1fr 1fr;
grid-template-rows: 1fr 1fr ;
margin-bottom: 100px;
border-bottom: 2px solid #333947;
`

export const PriceTitle = styled.p`
margin-top: 100px;
grid-row-start: 2;
font-size: 20px;
display: flex;
justify-content: flex-end;
`

export const TotalTitle = styled.p`
margin-top: 100px;
grid-row-start: 2;
font-size: 20px;
display: flex;
justify-content: flex-end;
`

export const ShoppingCart = styled.p`
font-size: 60px;
display: flex;
justify-content: center;
margin-left: auto;
margin-right: auto;
margin-top: 50px;
`
