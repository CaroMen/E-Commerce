import React from 'react';
import { Container } from '../../globalstyles';
import { StoreSec, StoreTextWrapper, FirstRowStore, HeadLine, StoreIntroSec, SubtitleCat } from './StoreSection.elements';

const StoreSection = ({ intro, darkText, cat1 }) => {
    return (
        <>
            <StoreSec>
                <FirstRowStore>
                    <Container>
                        <StoreIntroSec>
                            <StoreTextWrapper>
                                <HeadLine darkText={darkText}>{intro}</HeadLine>
                                <SubtitleCat darkText={darkText}>{cat1}</SubtitleCat>
                                <SubtitleCat darkText={darkText}>{cat1}</SubtitleCat>
                                <SubtitleCat darkText={darkText}>{cat1}</SubtitleCat>
                            </StoreTextWrapper>
                        </StoreIntroSec>
                    </Container>
                </FirstRowStore>
            </StoreSec>
        </>
    )
}

export default StoreSection
