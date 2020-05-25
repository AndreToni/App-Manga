import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from './screens/Home';
import SearchScreen from './screens/Search';
import FollowScreen from './screens/Follow';
import ProfileScreen from './screens/Profile';

const Tab = createBottomTabNavigator();

const icons = {
    Home:{
        lib: MaterialIcons,
        name: 'home',
    },
    Search:{
        lib: FontAwesome,
        name: 'search',
    },
    Follow:{
        lib: MaterialCommunityIcons,
        name: 'playlist-star',
    },
    Profile:{
        lib: FontAwesome,
        name: 'user-circle-o',
    }
};

export default function Navigator() {
    return(
        <Tab.Navigator
            screenOptions={({route}) =>({ //responsavel por colocar os Icons
                tabBarIcon: ({color, size}) =>{
                    const { lib: Icon, name} = icons[route.name];
                    return <Icon name={name} size={size} color={color} />
                }
            })}
            tabBarOptions ={{
                style:{
                    position: 'absolute',
                    width: 360,
                    height: 60,
                    backgroundColor: '#CC2929',
                    borderTopLeftRadius:21, 
                    borderTopRightRadius:21,
                    padding:10,
                    shadowColor: '#000000',
                    shadowOffset: {
                        width: 0,
                        height: 6
                    },
                    shadowRadius: 8.39,
                    shadowOpacity: 0.39,
                    elevation: 13
                },
                activeTintColor:'#98A0AB',
                inactiveTintColor:'#E0E5EB'
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={HomeScreen} 
                options = {{
                    title: 'Home',
                }}
            />
            <Tab.Screen 
                name="Search" 
                component={SearchScreen}
                options = {{
                    title: 'Search',
                }}
            />
            <Tab.Screen 
                name="Follow" 
                component={FollowScreen}
                options = {{
                    title: 'Follow',
                }}
            />
            <Tab.Screen 
                name="Profile" 
                component={ProfileScreen}
                options = {{
                    title: 'Profile',
                }}
            />
        </Tab.Navigator>
    );
}