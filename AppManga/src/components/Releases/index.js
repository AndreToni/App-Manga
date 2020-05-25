import React from 'react';

import {
    Container,
    ReleasesOfTheDayCard,
    Img,
    ReleasesOfTheDayCardFooterText
} from './styles';

import Img1 from '../../Img/Img1.png';
import Img2 from '../../Img/Img2.png';
import Img3 from '../../Img/Img3.png';
import Img4 from '../../Img/Img4.png';
import Img5 from '../../Img/Img5.png';

const items=[
    {
        key: String(Math.random()),
        img: Img1,
        text: 'Chapter: 270',
    },
    {
        key: String(Math.random()),
        img: Img2,
        text: 'Chapter: 54',
    },
    {
        key: String(Math.random()),
        img: Img3,
        text: 'Chapter: 250',
    },
    {
        key: String(Math.random()),
        img: Img4,
        text: 'Chapter: 171',
    },
    {
        key: String(Math.random()),
        img: Img5,
        text: 'Chapter: 54',
    },
]

export default function Releases() {
    return(
        <Container>
            {items.map((item) => (
                <ReleasesOfTheDayCard key= {item.key} style = {{elevation:5}}>
                    <Img source={item.img} resizeMode="contain"/>
                    <ReleasesOfTheDayCardFooterText>
                        {item.text}
                    </ReleasesOfTheDayCardFooterText>
                </ReleasesOfTheDayCard>
            ))}     
        </Container>
    );

}