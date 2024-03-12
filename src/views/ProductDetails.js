import { useParams, useSearchParams } from "react-router-dom";
import { useState } from 'react';

function ProductDetails() {
    const params = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(params.productName);
    console.log(searchParams.get('productName'));
    const products = [
        {
            name: 'vivo T2x 5G (Marine Blue, 128 GB)',
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/u/n/-original-imagzjhwtfthcmzz.jpeg?q=70',
            price: 12999,
            specifications: [
                '6 GB RAM | 128 GB ROM',
                '16.71 cm (6.58 inch) Full HD+ Display',
                '50MP + 2MP | 8MP Front Camera',
                '5000 mAh Battery',
                'Dimensity 6020 Processor',
                '1 Year of Device & 6 Months for Inbox Accessories'
            ],
            thumbnailImages: [
                'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/u/n/-original-imagzjhwtfthcmzz.jpeg?q=70'
            ]
        },
        {
            name: 'APPLE iPhone 14 (Blue, 128 GB)',
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70',
            price: 58999,
            specifications: [
                '6 GB RAM | 128 GB ROM',
                '16.71 cm (6.58 inch) Full HD+ Display',
                '50MP + 2MP | 8MP Front Camera',
                '5000 mAh Battery',
                'Dimensity 6020 Processor',
                '1 Year of Device & 6 Months for Inbox Accessories'
            ],
            thumbnailImages: [
                'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70'
            ]
        },
        {
            name: 'OnePlus Nord CE 2 Lite 5G (Blue Tide, 128 GB)',
            imgSrc: 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/k/w/k/-original-imagg2abzhxjckxu.jpeg?q=70',
            price: 17159,
            specifications: [
                '6 GB RAM | 128 GB ROM',
                '16.71 cm (6.58 inch) Full HD+ Display',
                '50MP + 2MP | 8MP Front Camera',
                '5000 mAh Battery',
                'Dimensity 6020 Processor',
                '1 Year of Device & 6 Months for Inbox Accessories'
            ],
            thumbnailImages: [
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/k/w/k/-original-imagg2abzhxjckxu.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/d/x/r/-original-imagg2abn7zdrf4y.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/k/c/f/-original-imagg2abpjwyyvqg.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/8/g/v/-original-imagg2abtmhwsgpm.jpeg?q=70'
            ]
        },
        {
            name: 'SAMSUNG Galaxy F14 5G (OMG Black, 128 GB)',
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/8/k/-original-imagtyxcgmgvtm7y.jpeg?q=70',
            price: 12490,
            specifications: [
                '6 GB RAM | 128 GB ROM',
                '16.71 cm (6.58 inch) Full HD+ Display',
                '50MP + 2MP | 8MP Front Camera',
                '5000 mAh Battery',
                'Dimensity 6020 Processor',
                '1 Year of Device & 6 Months for Inbox Accessories'
            ],
            thumbnailImages: [
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/r/8/k/-original-imagtyxcgmgvtm7y.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/q/b/t/-original-imagtywahysgub6f.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/y/6/3/-original-imagtyxbqmzcyjcz.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/t/f/a/-original-imagtyxbz7krqgn4.jpeg?q=70'
            ]
        }
    ];
    const filteredProduct = products.find(product => product.name === params.productName);
    console.log(filteredProduct);
    // let selectedImage = filteredProduct.thumbnailImages[0];
    const [selectedImage, setSelectedImage] = useState(filteredProduct.thumbnailImages[0]);
    const updateSelectedImg = (imgSrc) => {
        setSelectedImage(imgSrc);
    }
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-sm-2">
                    {filteredProduct.thumbnailImages.map(thumbnailImg => (
                        <div className="border p-2 m-2" style={{width: '50%', cursor: 'pointer'}} onClick={() => updateSelectedImg(thumbnailImg)}>
                            <img src={thumbnailImg} height="100px"/>
                        </div>
                    ))}
                </div>
                <div className="col-sm-4">
                    <img src={selectedImage} className="img-fluid"/>
                </div>
                <div className="col-sm-6">
                    <h2>{filteredProduct.name}</h2>
                    <h3>{filteredProduct.price}</h3>
                    <ul>
                        {filteredProduct.specifications.map((specification) => (
                            <li key={specification}>{specification}</li>
                        ))}
                    </ul>
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;