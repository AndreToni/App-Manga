import styled from 'styled-components/native';

export const Container = styled.View`
    flex:1;
    background:#D5DCE5;
    
`;
export const Option = styled.TouchableOpacity`
    margin-top:16px;
    margin-left: 16px;
    background:#F27979;
    width: 325px;
    height:200;
    border-top-left-radius: 11px;
    border-top-right-radius: 11px;
    border-bottom-left-radius: 11px;
    border-bottom-right-radius: 11px; 
    flex-direction: row;
`;


export const Img = styled.Image`
    
    border-top-left-radius: 3px;
    border-bottom-right-radius: 50px;
`;

export const Top = styled.View`
    margin-top:5px;
    flex-direction: row;
    justify-content: space-between;
`;
export const Information = styled.View`
`;

export const Following =styled.TouchableOpacity``;

export const Title = styled.Text`
    padding:5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    align-items: center;
    color: #E0E5EB;
`;
export const Description = styled.Text`
    padding: 5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    align-items: center;
    color: #E0E5EB;
    width: 220px;
    height:100;
`;

export const ReadMore = styled.Text`
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    align-items: center;
    color: #8B9FBA;
    
`;
export const Specification = styled.Text`
    padding: 2px 5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    align-items: center;
    color: #E0E5EB;
    width: 120px;
    height:40;
`;
export const Vote = styled.View`
    padding: 0px 5px;
    flex-direction:row;
`;