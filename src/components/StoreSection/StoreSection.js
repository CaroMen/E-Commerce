import React from 'react';
import { Container } from '../../globalstyles';
import { StoreSec, StoreTextWrapper, FirstRowStore, HeadLine, StoreIntroSec, SubtitleCat, StoreNewSec, Img, IntroDesc, StoreTextWrapperDesc, IntroHeadLine } from './StoreSection.elements';

const StoreSection = ({ intro, darkText, cat1, start, img2, alt, cat2, cat3, intro2, cat4 }) => {
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
                                <IntroHeadLine darkText={darkText}>{intro2}</IntroHeadLine>
                                <IntroDesc darkText={darkText}>{cat2}</IntroDesc>
                                <IntroDesc darkText={darkText}>{cat3}</IntroDesc>
                            </StoreTextWrapperDesc>
                        </StoreNewSec>
                        <StoreIntroSec>
                        </StoreIntroSec>
                    </Container>
                </FirstRowStore>
            </StoreSec>
        </>
    )
}

export default StoreSection
