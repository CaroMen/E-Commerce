import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../ShopContext/ShopContext';
import { StoreContainer, StoreGrids, ImgStore, ItemHeadline, Image, Button, Title, Price } from './StoreSite.elements';

const StoreSite = ({ imgStoreOne, imgStoreTwo, imgStoreThree, imgStoreFour, imgStoreFive, imgStoreSix, imgStoreSeven, imgStoreEight,
    alt, h1, h2, h3, h4, h5, h6, h7, h8, price1, price2, price3, price4, price5, price6, price7, price8, t1, t2, t3, t4, t5, t6, t7, t8 }) => {

    const { fetchProductWithId, product, addItemToCheckout } = useContext(ShopContext);

    const ProductPage = () => {
        let { id } = useParams()
        const { fetchProductWithId, addItemToCheckout, product } = useContext(ShopContext)


        useEffect(() => {
            fetchProductWithId(id)

            // fetchData()
            return () => {
                // setProduct(null)
            };
        }, [fetchProductWithId, id])
    }

    if (!product) return <div>loading</div>
    return (
        <>
            we have products
            <StoreContainer>
                <StoreGrids>
                    <Image>
                        <ImgStore src={imgStoreOne} alt={alt} />
                    </Image>
                    <Title>{t1}</Title>
                    <ItemHeadline>{h1}</ItemHeadline>
                    <Price>{price1}</Price>
                    <Button fontBig onClick={() => addItemToCheckout(product.variants.id, 1)}>Add to cart</Button>
                </StoreGrids>
                <StoreGrids>
                    <Image>
                        <ImgStore src={imgStoreTwo} alt={alt} />
                    </Image>
                    <Title>{t2}</Title>
                    <ItemHeadline>{h2}</ItemHeadline>
                    <Price>{price2}</Price>
                    <Button fontBig >Add to cart</Button>
                </StoreGrids>
                <StoreGrids>
                    <Image>
                        <ImgStore src={imgStoreThree} alt={alt} />
                    </Image>
                    <Title>{t3}</Title>
                    <ItemHeadline>{h3}</ItemHeadline>
                    <Price>{price3}</Price>
                    <Button fontBig >Add to cart</Button>
                </StoreGrids>
                <StoreGrids>
                    <Image>
                        <ImgStore src={imgStoreFour} alt={alt} />
                    </Image>
                    <Title>{t4}</Title>
                    <ItemHeadline>{h4}</ItemHeadline>
                    <Price>{price4}</Price>
                    <Button fontBig >Add to cart</Button>
                </StoreGrids>
                <StoreGrids>
                    <Image>
                        <ImgStore src={imgStoreFive} alt={alt} />
                    </Image>
                    <Title>{t5}</Title>
                    <ItemHeadline>{h5}</ItemHeadline>
                    <Price>{price5}</Price>
                    <Button fontBig >Add to cart</Button>
                </StoreGrids>
                <StoreGrids>
                    <Image>
                        <ImgStore src={imgStoreSix} alt={alt} />
                    </Image>
                    <Title>{t6}</Title>
                    <ItemHeadline>{h6}</ItemHeadline>
                    <Price>{price6}</Price>
                    <Button fontBig >Add to cart</Button>
                </StoreGrids>
                <StoreGrids>
                    <Image>
                        <ImgStore src={imgStoreSeven} alt={alt} />
                    </Image>
                    <Title>{t7}</Title>
                    <ItemHeadline>{h7}</ItemHeadline>
                    <Price>{price7}</Price>
                    <Button fontBig >Add to cart</Button>
                </StoreGrids>
                <StoreGrids>
                    <Image>
                        <ImgStore src={imgStoreEight} alt={alt} />
                    </Image>
                    <Title>{t8}</Title>
                    <ItemHeadline>{h8}</ItemHeadline>
                    <Price>{price8}</Price>
                    <Button fontBig >Add to cart</Button>
                </StoreGrids>
            </StoreContainer>
        </>
    )
}

export default StoreSite
