import React from 'react'
import { StoreContainer, StoreGrids, ImgStore, ItemHeadline, Image } from './StoreSite.elements';

const StoreSite = ({ imgStoreOne, imgStoreTwo, imgStoreThree, imgStoreFour, imgStoreFive, alt, h1, h2, h3, h4, h5 }) => {
    return (
        <>
            <StoreContainer>
                <StoreGrids>
                    <Image>
                        <ImgStore src={imgStoreOne} alt={alt} />
                    </Image>
                    <ItemHeadline>{h1}</ItemHeadline>
                </StoreGrids>
                <StoreGrids>
                    <Image>
                        <ImgStore src={imgStoreTwo} alt={alt} />
                    </Image>
                    <ItemHeadline>{h2}</ItemHeadline>
                </StoreGrids>
                <StoreGrids>
                    <Image>
                        <ImgStore src={imgStoreThree} alt={alt} />
                    </Image>
                    <ItemHeadline>{h3}</ItemHeadline>
                </StoreGrids>
                <StoreGrids>
                    <Image>
                        <ImgStore src={imgStoreFour} alt={alt} />
                    </Image>
                    <ItemHeadline>{h4}</ItemHeadline>
                </StoreGrids>
                <StoreGrids>
                    <Image>
                        <ImgStore src={imgStoreFive} alt={alt} />
                    </Image>
                    <ItemHeadline>{h5}</ItemHeadline>
                </StoreGrids>
            </StoreContainer>
        </>
    )
}

export default StoreSite
