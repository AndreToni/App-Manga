import React, {Component} from 'react';
import {View, StyleSheet, Dimensions, StatusBar, TextInput, TouchableOpacity} from 'react-native';
import{ Feather, Entypo, MaterialIcons} from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';

import {
    Img,
    Information,
    Title,
    Description,
    Specification,
    Vote,
    ReadMore,
    Introduction
}from './styles';


import Img1 from '../../Img/Img17.png';
import Img2 from '../../Img/Img15.png';
import Img3 from '../../Img/Img16.png';

const{width: screenWidth, height: screenHeight}=Dimensions.get('window');

export default class FilterFlatList extends Component{
    constructor(){
        super();
        this.state={
            query: null
        }
    }

    componentDidMount(){
        var data =[
            {
                key: String(Math.random()),
                img: Img1,
                name:'Ubel Blatt',
                description: 'Há uma história imperial de que, no ano de 3968 - quando o Império Szaalenden ainda estava em guerra com um poderoso inimigo chamado Wischtech ',
                specification:'Status: Concluído Capítulo novo: 170'
            },
            {
                key: String(Math.random()),
                img: Img2,
                name:'Plunderer',
                description: 'É o ano 305 do calendário Alcian e o mundo é atualmente controlado por "números". Todo ser humano no nascimento é marcado com um "conde". Essa contagem pode ser qualquer coisa.',
                specification:'Status: Lançando Capítulo novo: 58'
            },
            {
                key: String(Math.random()),
                img: Img3,
                name:'Dungeon Meshi',
                description: 'Depois de ter sua irmã devorada por um dragão e perder todos os seus itens em um ataque fracassado, Lyos e sua equipe estão determinados a salvar sua companheira antes que ela seja digerida.',
                specification:'Status: Lançando Capítulo novo:54'
            }
        ]
        this.setState({
            dataBackup: data,
            dataSource: data
        })
    }
    filterItem = event => {
        var query= event.nativeEvent.text;
        this.setState({
            query : query,
        })
        if (query == ''){
            this.setState({
                dataSource: this.state.dataBackup,
            });
        } 
        else{
            var data = this.state.dataBackup;
            query = query.toLowerCase();
            data = data.filter(l => l.name.toLowerCase().match(query));

            this.setState({
                dataSource: data,
            });
        }
    }

    state = {
        isFollowing: false,
    };

    useToggleFollowing = () => {
        this.setState({isFollowing: !this.state.isFollowing});
    };

    render(){

        console.disableYellowBox =false;
        
        return(
            <View style={styles.container}>
                <StatusBar barStyle='light-content' backgroundColor='#000'/>
                <View style={styles.header}>
                    <Feather name='search' size={22} color='#929FB1' style={styles.searchBoxIcon} />
                    <TextInput
                        placeholder='Pesquisar mangás...'
                        placeholderTextColor='#929FB1'
                        style= {styles.input}
                        value={this.state.query}
                        onChange={this.filterItem.bind(this)}
                    />
                </View>
                <FlatList
                data={this.state.dataSource}
                renderItem = {({item, index}) =>{
                    return(
                        <View style={{width: screenWidth - 15}}>
                        <TouchableOpacity style={styles.bookContainer }>
                            <Img source ={item.img} resizeMode="contain" animationType ="slide"/>
                            <Information>
                                <View style={styles.TitleAndBottom} >
                                    <Title numberOfLines= {1}>{item.name}</Title>
                                    <TouchableOpacity style={styles.Bottom} hitSlop={{top: 20, bottom:20, left:50, right:50}} onPress={this.useToggleFollowing}>
                                        <MaterialIcons  name='library-add' size={30} color={this.state.isFollowing ? '#F2F2F2' : '#FF9E00'} />
                                    </TouchableOpacity>
                                </View>    
                                    
                                <Introduction>
                                    <Title >Introduction:</Title>
                                </Introduction>
                                <Description numberOfLines = {6}>
                                    {item.description}
                                    <ReadMore >   Ler mais...</ReadMore>
                                </Description>
                                <Specification>
                                    {item.specification}
                                </Specification>
                                <Vote>
                                    <Entypo name="star" size={20} color="#FF9E00" />
                                    <Entypo name="star" size={20} color="#FF9E00" />
                                    <Entypo name="star" size={20} color="#FF9E00" />
                                    <Entypo name="star" size={20} color="#FF9E00" />
                                    <Entypo name="star" size={20} color="#F2F2F2" />
                                </Vote>
                            </Information>
                        </TouchableOpacity>
                        </View>    
                    );
                }}
            />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#633589',
        height:600,
        borderTopLeftRadius: 21,
        borderTopRightRadius: 21,
    },
    TitleAndBottom:{
        position:'relative',
        width: screenWidth - 180,
        borderRadius: 10,
    },
    Bottom:{
        position: 'absolute',
        top: 10,
        right: 0,
    },  
    header:{
        backgroundColor:'#F2F2F2',
        elevation: 10,
        borderRadius:50,
        marginVertical:10,
        width: '95%',
        flexDirection: 'row',
        alignSelf:'center',
        height: 45,
    },
    searchBoxIcon:{
        padding: 12,
        paddingLeft:20,
        flexDirection: 'row',
    },
    input: {
        padding: 12,
        paddingLeft:20,
        fontSize:14
    },
    bookContainer:{
        elevation: 10,
        marginTop:16,
        marginLeft:16,
        width: screenWidth-70,
        backgroundColor:'#201E33',
        height:250,
        borderTopLeftRadius: 11,
        borderTopRightRadius: 11,
        borderBottomLeftRadius: 11,
        borderBottomRightRadius: 11,
        flexDirection: 'row',
    }
})
