import React, { useState } from 'react'
import { Container } from '../../globalstyles';
import { Header, FirstRow, TextWrapper, Heading, Subtitle, ImgWrapper, Img, HeaderColumn, HeaderColumnType, HeaderColumnIntro, GoIcon, StoreLink } from './Hero.elements';

const Hero = ({ darkText, headline1, headline2, subtitleHeader, img, alt, start, plant1, plantSubtitle }) => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <>
            <Header>
                <Container>
                    <FirstRow>
                        <HeaderColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                        </HeaderColumn>
                        <HeaderColumnType>
                            <HeaderColumnIntro>
                                <TextWrapper>
                                    <Heading darkText={darkText}>{headline1}</Heading>
                                    <Subtitle darkText={darkText}>{subtitleHeader}</Subtitle>
                                </TextWrapper>
                            </HeaderColumnIntro>
                        </HeaderColumnType>
                    </FirstRow>
                </Container>
            </Header>
        </>
    )
}

export default Hero
