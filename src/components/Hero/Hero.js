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
                        <HeaderColumnIntro>
                            <TextWrapper>
                                <Heading darkText={darkText}>{headline1}</Heading>
                                <Subtitle darkText={darkText}>{subtitleHeader}</Subtitle>
                            </TextWrapper>
                        </HeaderColumnIntro>
                        <HeaderColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                        </HeaderColumn>
                        <HeaderColumnType>
                            <TextWrapper>
                                <Heading darkText={darkText}>{plant1}</Heading>
                                <Subtitle darkText={darkText}>{plantSubtitle}</Subtitle>
                                <Subtitle darkText={darkText} onClick={handleClick} click={click}>
                                    <StoreLink>
                                        Start Your Own Garden<GoIcon />
                                    </StoreLink>
                                </Subtitle>
                            </TextWrapper>
                        </HeaderColumnType>
                    </FirstRow>
                </Container>
            </Header>
        </>
    )
}

export default Hero
