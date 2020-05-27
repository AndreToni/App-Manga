import { 
    StyleSheet, 
    Text, 
    View, 
    Image, 
    TouchableOpacity, 
    ScrollView, 
    Dimensions, 
    //StatusBar, 
    ImageBackground,
    TextInput,
    //FlatList
} from 'react-native';
import React, {useRef, useState,/* useEffect*/} from 'react';
import Carousel from 'react-native-anchor-carousel'
import{ FontAwesome5, Feather, MaterialIcons } from '@expo/vector-icons'



import Img1 from '../../Img/Img1.png';
import Img2 from '../../Img/Img2.png';
import Img3 from '../../Img/Img3.png';
import Img4 from '../../Img/Img4.png';
import Img5 from '../../Img/Img5.png';


const App = () =>{
    const[backGround,setBackGound] =useState({
        img: Img1,
        name:'Boku no Hero Academia',
        cap: 'Capitulo: 270',
        nomeCap:'Nome do Capitulo: XXXXXXXXX'
    },
    {
        img: Img2,
        name:'Boku no Hero Academia',
        cap: 'Capitulo: 270',
        nomeCap:'Nome do Capitulo: XXXXXXXXX'
    },
    {
        img: Img3,
        name:'Boku no Hero Academia',
        cap: 'Capitulo: 270',
        nomeCap:'Nome do Capitulo: XXXXXXXXX'
    },
    {
        img: Img4,
        name:'Boku no Hero Academia',
        cap: 'Capitulo: 270',
        nomeCap:'Nome do Capitulo: XXXXXXXXX'
    },
    {
        img: Img5,
        name:'Boku no Hero Academia',
        cap: 'Capitulo: 270',
        nomeCap:'Nome do Capitulo: XXXXXXXXX'
    })


    const carouselRef= useRef(null);

    const{width, height} = Dimensions.get('window');

    const renderItem = ({item, index}) =>{
        return(
            <View>
                <TouchableOpacity
                    onPress={() =>{
                        carouselRef.current.scrollToIndex(index);
                        setBackGound({
                            uri: item.img,
                            name: item.name,
                            stat: item.cap,
                            desc: item.nomeCap
                        })
                    }}
                >
                    <Image source={{uri: item.img }} style={style.carouselImage} />
                    <Text style={styles.carouselText}>{item.name}</Text>
                    <MaterialIcons name='library-add' size={30} color='white' style={styles.carouselIcon}/>
                </TouchableOpacity>
            </View>
        );
    }


    return(
        <ScrollView>
            <View style={styles.carouselContentContainer}>
                <View style = {{...StyleSheet.absoluteFill, backgroundColor:'#000'}}>
                    <ImageBackground
                        source={{uri: backGround.img}}
                        style={styles.ImageBg}
                        blurRadius={10}
                    >
                    <View style={styles.searchBoxContainer}>
                        <TextInput
                            placeholder='Search Movies'
                            placeholderTextColor='#666'
                            style= {styles.SearchBox}
                        />
                        <Feather name='search' size={22} color='#666' style={styles.searchBoxIcon} />    
                    </View>
                    <Text style={{color: 'white', fontSize: 24, fontWeight:'bold',
                        marginLeft:10, marginVertical:10}}>Top Picks this Week</Text>
                    
                    <View styles={styles.carouselContainerView}>
                        <Carousel style={styles.Carousel}
                            data={gallery}
                            renderItem={renderItem}
                            itemWidth={200}
                            containerWidth={ widht - 20}
                            separatorWidth={0}
                            ref={carouselRef} 
                            inActiveOpacity={0.4}
                        />
                    </View>
                    <View style={styles.movieInfoContainer}>
                        <View style={{justifyContent:'center'}}>
                            <Text style={styles.movieName}>{backGround.name}</Text>
                            <Text style={styles.movieStat}>{backGround.cap}</Text>
                            <Text style={styles.movieName}>{backGround.nomeCap}</Text>
                        </View>
                        <TouchableOpacity style={styles.playIconContainer}>
                            <FontAwesome5 name='play' size={22} color='#02ad94' style={{marginLeft:4}}/>
                        
                        </TouchableOpacity>
                    </View>
                    <View style={{paddingHorizontal:14, marginTop:14}}>
                        <Text style={{color: 'white', opacity: 0.8, lineHeight:20}}>
                            {backGround.nomeCap}
                        </Text>
                    
                    </View>
                    </ImageBackground>
                </View>
            </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    carouselContentContainer:{
        flex:1,
        backgroundColor:'#633589',
        height:720,
        paddingHorizontal:14,
    },
    ImageBg:{
        flex:1,
        height:null,
        width: null,
        opacity: 1,
        justifyContent:'flex-start'
    },
    searchBoxContainer:{
        backgroundColor:'#F5F5F5',
        elevation: 10,
        borderRadius:20,
        marginVertical:10,
        width: '95%',
        flexDirection: 'row',
        alignSelf:'center'

    },
    SearchBox:{
        padding: 12,
        paddingLeft:20,
        fontSize:16
    },
    searchBoxIcon: {
        position:'absolute',
        right: 20,
        top: 14
    },
    carouselContainerView:{
        width:'100%',
        height: 350,
        justifyContent: 'center',
        alignItems:'center',
    },
    Carousel:{
        flex: 1,
        overflow:'visible'
    },
    carouselImage:{
        width:200,
        height:320,
        borderRadius: 10,
        alignSelf:'center',
        backgroundColor:'rgba(0,0,0,0.9)'
    },
    carouselText:{
        padding:14,
        color:'white',
        position:'absolute',
        bottom: 10,
        left: 2,
        fontWeight:'bold'
    },
    carouselIcon:{
        position:'absolute',
        top: 15,
        right: 15,
    },
    movieInfoContainer:{
        flexDirection: 'row',
        marginTop: 16,
        justifyContent:'space-between',
        width: Dimensions.get('window').width - 14,
    },
    movieName:{
        paddingLeft:14,
        color: 'white',
        fontWeight:'bold',
        fontSize:20,
        marginBottom:6
    },
    movieStat:{
        paddingLeft: 14,
        color:'white',
        fontWeight:'bold',
        fontSize: 14,
        opacity:0.8
    },
    playIconContainer:{
        backgroundColor:'#212121',
        padding:18,
        borderRadius:40,
        justifyContent:'center',
        alignItems:'center',
        elevation:10,
        borderWidth:4,
        borderColor:'rgba(2,173,148,0.2)',
        marginBottom:14
    }
})




