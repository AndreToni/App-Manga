import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`

    background: #D5DCE5;
`;


export const Header = styled.View`
    border-width:2;
    border-color: #CC2929;
    border-bottom-width: 0;
    width: 360px;
    height: 70px;
    border-bottom-left-radius: 21px;
    border-bottom-right-radius: 21px;
    flex-direction: row; 
    background: #CC2929;
    
`;

export const Line = styled.TouchableOpacity`
    margin-top:18px;
    margin-left:15px;
    border-bottom-left-radius: 21px;
    border-bottom-right-radius: 21px;
    flex-direction: row; 
    background: #CC2929;
    
    
`;


export const SearchBar = styled.View`
    width: 230px;
    height: 30px;
    background: #E0E5EB;
    border-top-left-radius: 21px;
    border-top-right-radius: 21px;
    border-bottom-left-radius: 21px;
    border-bottom-right-radius: 21px;
    flex-direction:row;
    margin-top:18px;
    margin-left:10px;
    padding:3px;
`;
export const SearchBarText = styled.Text`
    padding: 5px;
    font-weight: bold;
    font-family: Roboto;
    font-style: normal;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    text-align: justify;
    color: #929FB1;
`;

export const Notification = styled.TouchableOpacity`
    margin-top:18px;
    margin-right:5px;
    margin-left:5px;
    background: #202833;
    border-radius: 30px;
    width: 50px;
    height: 30px;
    flex-direction: row; 
    padding: 3px;
`;
export const NotificationText = styled.Text`
    padding: 5px 2px;
    font-weight: bold;
    font-family: Roboto;
    font-style: normal;
    font-size: 12px;
    line-height: 14px;
    color: #E0E5EB;
`;

