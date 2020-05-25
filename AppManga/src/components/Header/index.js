import React from 'react';

import { MaterialIcons, AntDesign} from '@expo/vector-icons';

import { Wrapper, Header, SearchBar, SearchBarText, Line, Notification, NotificationText  } from './styles';


export default function Home() {
    return (
        <Wrapper>
           
            <Header  style={{elevation: 5}}>
                    <Line>
                    <AntDesign name="question" size={24} color="#202833" style={{elevation: 5}}/>
                    </Line>
                    <SearchBar  style={{elevation: 5}}>
                        <MaterialIcons name="search" size={24} color="#202833"/>
                        <SearchBarText>Search Manga</SearchBarText>
                    </SearchBar>
                    <Notification style={{elevation: 5}}>
                        <MaterialIcons name="notifications-active" size={24} color="#E5D85C" />
                        <NotificationText>10</NotificationText>
                    </Notification>    
            </Header>
        </Wrapper>
    );
}