import React from 'react';
import { Container } from '../../globalstyles';
import { StoreSec, StoreTextWrapper, FirstRowStore, HeadLine, StoreIntroSec, SubtitleCat, StoreNewSec, Img, IntroDesc, StoreTextWrapperDesc, IntroHeadLine, ColumnDesc, FirstCol, SecCol, ThirdCol, PriceIcon, DescTitle, Desc, DescCol, ModernIcon, ServiceIcon, ImgBack } from './StoreSection.elements';

const StoreSection = ({ intro, darkText, cat1, start, img2, alt, cat2, cat3, intro2, cat4, pricedesc, pricepara, img3 }) => {
    return (
        <>
            <StoreSec>
                <FirstRowStore>
                    <Container>
                        <StoreIntroSec>
                            <StoreTextWrapper>
                                <HeadLine darkText={darkText}>{intro}</HeadLine>
                                <SubtitleCat darkText={darkText}>{cat4}</SubtitleCat>
                            </StoreTextWrapper>
                        </StoreIntroSec>
                        <StoreNewSec>
                            <ImgWrapper-Store start={start}>
                                <Img src={img2} alt={alt} />
                                <SubtitleCat darkText={darkText}>{cat1}</SubtitleCat>
                            </ImgWrapper-Store>
                            <StoreTextWrapperDesc>
                                <ImgBack src={img3} />
                                <IntroHeadLine darkText={darkText}>{intro2}</IntroHeadLine>
                                <IntroDesc darkText={darkText}>{cat2}</IntroDesc>
                                <IntroDesc darkText={darkText}>{cat3}</IntroDesc>
                            </StoreTextWrapperDesc>
                        </StoreNewSec>
                        <ColumnDesc>
                            <FirstCol>
                                <PriceIcon />
                                <DescCol>
                                    <DescTitle darkText={darkText}>{pricedesc}</DescTitle>
                                    <Desc darkText={darkText}>{pricepara}</Desc>
                                </DescCol>
                            </FirstCol>
                            <SecCol>
                                <ModernIcon />
                                <DescCol>
                                    <DescTitle darkText={darkText}>{pricedesc}</DescTitle>
                                    <Desc darkText={darkText}>{pricepara}</Desc>
                                </DescCol>
                            </SecCol>
                            <ThirdCol>
                                <ServiceIcon />
                                <DescCol>
                                    <DescTitle darkText={darkText}>{pricedesc}</DescTitle>
                                    <Desc darkText={darkText}>{pricepara}</Desc>
                                </DescCol>
                            </ThirdCol>
                        </ColumnDesc>
                    </Container>
                </FirstRowStore>
            </StoreSec>
        </>
    )
}

export default StoreSection
