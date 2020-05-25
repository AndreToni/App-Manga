import React, {useState} from 'react';

import { MaterialIcons, Entypo } from '@expo/vector-icons'; 

import {
    Container,
    Option,
    Img,
    Top,
    Information,
    Title,
    Following,
    Description,
    Specification,
    Vote,
    ReadMore
}from './styles';

import Img1 from '../../Img/Img17.png';
import Img2 from '../../Img/Img15.png';
import Img3 from '../../Img/Img16.png';

const items = [
    {
        key: String(Math.random()),
        img: Img1,
        description: 'There is an imperial tale, that in the year 3968 - when the Szaalenden Empire was still at war with a powerful enemy called Wischtech - the Emperor sent 14 young men to stop the killing.',
        specification:'Status: Finished Chapter new: 170'
    },
    {
        key: String(Math.random()),
        img: Img2,
        description: 'It is year 305 on the Alcian calendar and the world is currently controlled by “numbers”. Every human being at birth is marked with a "Count". This count can be anything.',
        specification:'Status: Newest Chapter new: 58'
    },
    {
        key: String(Math.random()),
        img: Img3,
        description: 'After having his sister devoured by a dragon and losing all of his items in a failed dungeon raid, Lyos and his team are determined to save his mate before she is digested.',
        specification:'Status: Newest  Chapter new: 54'
    }
]

 
export default function Recommended(){
    const [isFollowing, setIsFollowing] = useState(false);

    function useToggleFollowing(){
        setIsFollowing((prevState) => !prevState);
    }

    return(
        <Container>
        {items.map((item) =>(
            <Option key= {item.key} style = {{elevation:5}}>
                
                <Img source ={item.img} resizeMode="contain"/>
                <Information onPress={useToggleFollowing}>
                    <Top>
                        <Title>Introduction:</Title>
                        <Following onPress={useToggleFollowing}>
                            <MaterialIcons name="stars" size={24} color={isFollowing ? '#E5D85C' : '#E0E5EB'}/>
                        </Following> 
                    </Top>
                    <Description>
                        {item.description}
                        <ReadMore>  read more...</ReadMore>
                    </Description>
                    <Specification>
                        {item.specification}
                    </Specification>
                    <Vote>
                        <Entypo name="star" size={20} color="#E5D85C" />
                        <Entypo name="star" size={20} color="#E5D85C" />
                        <Entypo name="star" size={20} color="#E5D85C" />
                        <Entypo name="star" size={20} color="#E5D85C" />
                        <Entypo name="star" size={20} color="#E0E5EB" />
                    </Vote>
                </Information>
                
            </Option>
        ))}
        </Container>
    );
}