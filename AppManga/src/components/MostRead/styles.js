import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
    //flex:1,
    horizontal: true,
    showsHorizontalScrollIndicator:false,
    contentContainerStyle:{
        alignItems:'center',
        paddingLeft: 16,
    },
}))`
    background: #D5DCE5;
    height:150;
    border-top-left-radius: 11px;
    border-top-right-radius: 11px;
    border-bottom-left-radius: 11px;
    border-bottom-right-radius: 11px;     
`;

export const Option = styled.TouchableOpacity`
    margin-right: 16px;
    background:#F27979;
    width: 150px;
    height:150;
    border-top-left-radius: 11px;
    border-top-right-radius: 11px;
    border-bottom-left-radius: 11px;
    border-bottom-right-radius: 11px; 
    flex-direction: row;
`;

export const Complement = styled.View``;

export const Img = styled.Image`
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    
`;
export const Following = styled.TouchableOpacity`
    padding: 10px;
`;
export const Card = styled.View`
    padding: 10px;
    align-items:center;
`;
export const Title = styled.Text`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    align-items: center;
    color: #E0E5EB;
`; 
