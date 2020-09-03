import styled from 'styled-components/native';
//import { StyleSheet } from 'react-native';

export const Container = styled.ScrollView.attrs(() => ({
    horizontal: true,
    showsHorizontalScrollIndicator:false,
    contentContainerStyle:{
        alignItems:'center',
        paddingLeft: 16,
    },
}))`
    
    background: #D5DCE5;
    height:180;
    border-top-left-radius: 11px;
    border-top-right-radius: 11px;
    border-bottom-left-radius: 11px;
    border-bottom-right-radius: 11px;
     
`;

/*const styles = StyleSheet.create({
    ReleasesOfTheDayCard:{
        elevation:1,
    }
})*/

export const ReleasesOfTheDayCard = styled.TouchableOpacity`
    border-top-left-radius: 11px;
    border-top-right-radius: 11px;
    border-bottom-left-radius: 11px;
    border-bottom-right-radius: 11px;
    margin-right: 16px;
    align-items: center;
    width: 100px;
    background:#F27979;
`;
export const Img = styled.Image`
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border-bottom-left-radius: 11px;
    border-bottom-right-radius: 11px;
`;


export const ReleasesOfTheDayCardFooterText = styled.Text`
    width: 70px;
    height: 30px;
    
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;

    align-items: center;
    
    color: #E0E5EB;
`;