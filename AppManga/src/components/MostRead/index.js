import React, {useState, useEffect} from 'react';
import {  
    Container,
    Option,
    Img,
    Following,
    Card,
    Title,
    Complement 
} from './styles';

import { FontAwesome5, MaterialIcons } from '@expo/vector-icons'; 

import Img1 from '../../Img/Img7.png';
import Img2 from '../../Img/Img9.png';
import Img3 from '../../Img/Img11.png';
import Img4 from '../../Img/Img12.png';
import Img5 from '../../Img/Img6.png';
import Img6 from '../../Img/Img5.png';
import Img7 from '../../Img/Img8.png';
import Img8 from '../../Img/Img10.png';
import Img9 from '../../Img/Img13.png';
import Img10 from '../../Img/Img14.png';

const favorites =['id1', 'id2','id3','id5','id7', 'id9' ]

const items=[
    {
        key: String(Math.random()),
        img: Img1,
        id:'id1'
    },
    {
        key: String(Math.random()),
        img: Img2,
        id:'id2'
    },
    {
        key: String(Math.random()),
        img: Img3,
        id:'id3'
    },
    {
        key: String(Math.random()),
        img: Img4,
        id:'id4'
    },
    {
        key: String(Math.random()),
        img: Img5,
        id:'id5'
    },
    {
        key: String(Math.random()),
        img: Img6,
        id:'id6'
    },
    {
        key: String(Math.random()),
        img: Img7,
        id:'id7'
    },
    {
        key: String(Math.random()),
        img: Img8,
        id:'id8'
    },
    {
        key: String(Math.random()),
        img: Img9,
        id:'id9'
    },
    {
        key: String(Math.random()),
        img: Img10,
        id:'id10'
    },
]

/*export default function MastRead(){
    const [isFollowing, setIsFollowing] = useState(false);
    const a = 0;
    function useToggleFollowing(){
        setIsFollowing((prevState) => !prevState);
    }

    return(
        <Container>
            {items.map((item) =>(
                <Option key= {item.key} style = {{elevation:5}}>
                    <Img source={item.img} resizeMode="contain"/>
                    <Complement>
                        <Following  onPress={useToggleFollowing}>
                        
                            
                            <MaterialIcons name="stars" size={24}  color={ isFollowing  ? '#E5D85C' : '#E0E5EB'}/>
                    
                        </Following>
                        <Card>
                            <Title>Read</Title>
                            <FontAwesome5 name="book" size={24} color="#E0E5EB" />
                        </Card> 
                    </Complement>
                </Option>
            ))}
        </Container>
    );
}*/

export default function MastRead(){
    const [isFollowing, setIsFollowing] = useState(false);
    
    
    function useToggleFollowing(){
        setIsFollowing((prevState) => !prevState);
        if(!setIsFollowing){
            favorites.slice(favorites.includes(items.id));
        }else{
            favorites.push(favorites.includes(items.id));
        }
    }
    
    /*useEffect(() =>{
        useToggleFollowing();
    }, favorites);*/

    return(
        <Container>
            {items.map((item) =>(
                <Option key= {item.key} style = {{elevation:5}}>
                    <Img source={item.img} resizeMode="contain"/>
                    
                    <Complement >
                        <Following  onPress={useToggleFollowing}>
                        
                        
                            <MaterialIcons name="stars" size={24}  color={ isFollowing == (favorites.includes(item.id)) ? '#BDFF00' : '#E0E5EB'}/>
                        
                        </Following>
                        <Card>
                            <Title>Read</Title>
                            <FontAwesome5 name="book" size={24} color="#E0E5EB" />
                        </Card> 
                    </Complement>
                    
                </Option>
            ))}
        </Container>
    );
}