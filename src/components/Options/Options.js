import React from 'react'
import { OptionsDiv, Pictures, ImgOne, ImgTwo, ImgThree, PicturesTwo, ImgFour, ImgFive, ImgSix } from './Options.elements'

const Options = ({ deskimg, alt, couchimg, bedimg, roomoneimg, roomtwoimg, diningimg }) => {
    return (
        <>
            <OptionsDiv>
                <Pictures>
                    <ImgOne src={deskimg} alt={alt} />
                    <ImgTwo src={couchimg} alt={alt} />
                    <ImgThree src={roomoneimg} alt={alt} />
                </Pictures>
                <PicturesTwo>
                    <ImgFour src={bedimg} alt={alt} />
                    <ImgFive src={roomtwoimg} alt={alt} />
                    <ImgSix src={diningimg} alt={alt} />
                </PicturesTwo>
            </OptionsDiv>
        </>
    )
}

export default Options
