import React from 'react';
// import { useParams } from 'react-router-dom';
import { Products, ProductImg, ProductDesc, ImageProd, Button, Desc } from './JulietteProduct.elements';

const Juliette = ({ alt, img, test }) => {



    return (
        <>
            <Products>
                <ProductImg>
                    <ImageProd src={require('../../images/bed2.png')} alt={alt} />
                </ProductImg>
                <ProductDesc>
                    <Desc>Hello</Desc>
                    <Button fontBig>Add to cart</Button>
                </ProductDesc>
            </Products>
        </>
    )
}

export default Juliette
