import styled from 'styled-components';

export const StoreContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
`

export const StoreGrids = styled.div`
display: grid;
grid-template-rows: 1fr 1fr;
background-color: #BAB5BA;
border-radius: 15px;
margin-top: 100px;
max-width: 80%;
max-height: 70%;
padding: 50px 50px 50px 50px;
margin-left: 30px;
margin-right: 30px;
box-shadow: -5px -4px 3px 0px rgba(255, 255, 255, 0.15),
            5px 4px 3px 0px rgba(88, 88, 88, 0.15);

`

export const ImgStore = styled.img`
width: 100%;
height: 100%;
margin-bottom: -130px;
`

export const ItemHeadline = styled.div`
/* margin-bottom: 24px; */
padding-top: 30px;
font-size: 44px;
line-height: 1.2;
`
export const Image = styled.div`
height: 100%;
width: 100%;
object-fit: fill;
`
