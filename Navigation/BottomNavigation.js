import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../Screens/HomeScreen'
import CreateUserScreen from '../Screens/CreateUserScreen'
import iconButton from 'react-native-vector-icons/dist/lib/icon-button';
import { Image } from 'react-native';
import imagepath from '../Constant/imagepath';
import UploadScreen from '../Screens/UploadScreen';
import PayScreenComponent from '../Screens/PayScreenComponent';
import NewUserStack from './NewUserStackNavigation';
import NewUserStackNavigation from '../Navigation/NewUserStackNavigation';


const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (

    <Tab.Navigator
     screenOptions={{
          tabBarActiveTintColor:'black',//label text color
          tabBarActiveBackgroundColor:'#f0edf6',//background color
          tabBarInactiveBackgroundColor:'#226557',
          barStyle: { backgroundColor: '#3BAD87' },
          tabBarShowLabel:true,
          tabBarStyle:{
            position:'absolute',
            overflow:'hidden',
            borderRadius:50,
            bottom:10,
            marginHorizontal:16,
            
          }
        }}
      >
      <Tab.Screen name="HomeScreens" component={NewUserStackNavigation}
        options={{
          headerShown:false,
          tabBarIcon: ({focused})=>{
          return(
              <Image source={imagepath.icHome} />
          )
          }
      }}
      />
      <Tab.Screen name="CreateUser" component={CreateUserScreen} 
       options={{
        tabBarIcon: ({focused})=>{
        return(
            <Image source={imagepath.icUser} 
            />
        )
        }
    }}
      />
      {/* <Tab.Screen name="Plus" component={PayScreenComponent}
       options={{
        tabBarIcon: ({focused})=>{
        return(
            <Image source={imagepath.icPlus} 
            />
        )
        }
    }}
      /> */}



      <Tab.Screen name="UploadScreen" component={UploadScreen}
       options={{
        tabBarIcon: ({focused})=>{
        return(
            <Image source={imagepath.icScreen} 
            />
        )
        }
    }}
      />
    </Tab.Navigator>
   
  )
}

export default BottomNavigation