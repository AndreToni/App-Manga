import React from 'react';

import { 
    Wrapper,
    Container,
    BoxTitle1,
    Line1,
    Title,
    BoxTitle2,
    Line2,
    BoxTitle3,
    Line3,
    Barra    
} from './styles';

//import Header from '../../components/Header';
import Releases from '../../components/Releases';
import MostRead from '../../components/MostRead';
import Recommended from '../../components/Recommended';

export default function Home() {
    return (
        <Wrapper>
            
            <Container>
                <Releases/>
                <BoxTitle2>
                    <Line2 style={{elevation: 5}}>
                        <Title>Most read of the month</Title>
                    </Line2>
                </BoxTitle2>
                <MostRead />
                <BoxTitle3>
                    <Line3 style={{elevation: 5}}>
                        <Title>Recommended</Title>
                    </Line3>
                </BoxTitle3>
                <Recommended />
                <Barra></Barra>
            </Container>
        </Wrapper>
    );
}
