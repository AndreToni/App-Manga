import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
    flex:1;
    background: #D5DCE5;
`;

export const Container= styled.ScrollView.attrs(()=>({
    showsHorizontalScrollIndicator:false,
}))``;//responsavel por descer a tela 

export const BoxTitle1 = styled.View`
    padding: 16px;
`;
export const Line1 = styled.View`
    background:#D94141;
    width: 170px;
    height: 30px;
    border-radius: 21px;
`;
export const Title = styled.Text`
    margin-top: 3px;
    margin-left: 6px;
    font-size: 18px;
    color: #CCD2DB;
    font-weight: bold;
    font-family: Roboto;
`;

export const BoxTitle2 = styled.View`
    padding: 16px;
`;
export const Line2 = styled.View`
    background:#D94141;
    width: 200px;
    height: 30px;
    border-radius: 21px;
`;

export const BoxTitle3 = styled.View`
    margin-top: 16px;
    margin-left: 16px;
`;
export const Line3 = styled.View`
    background:#D94141;
    width: 135px;
    height: 30px;
    border-radius: 21px;
`;

export const Barra = styled.View`
    height: 80px;
`;