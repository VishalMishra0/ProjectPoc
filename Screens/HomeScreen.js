import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Button,style,TouchableOpacity,Image} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import database, {firebase} from '@react-native-firebase/database';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

export default function App({navigation,props}) {

  const [itemArray, setItemArray] = useState([])

  const LogOut = () =>{
  
  firebase.auth().signOut()
  console.log('User signed out!');
  navigation.replace('LoginScreen');
  
  }
  const readUserData = async () => {
   database().ref('/users/')
   .on('value', snapshot => {
    setItemArray(Object.values(snapshot.val()))
    // console.log(itemArray)

  });

  };

  // console.log(itemArray)
  // console.log(itemArray.Mail)
  return (
    <>
    <View style={{marginBottom:223}} >
      <View style={styles.title}>
        {/* <Text style={{flex: 1, color: '#000', fontSize: 15}}>ID</Text> */}
        <Text style={{flex: 1, color: '#000', fontSize: 15}}>Name</Text>
        <Text style={{flex: 1, color: '#000', fontSize: 15}}>E-mail</Text>
        <Text style={{flex: 1, color: '#000', fontSize: 15}}>Phone Number</Text>
      </View>
      <Button
        title='GET User data'
        onPress={readUserData}
        color='#226557'
      />
     <FlatList
        data={itemArray}
        renderItem={({item})=>
          <View style={{flexDirection:'row',justifyContent:'center', alignItems:'center',color:'green', marginTop:10,padding:25}}>
            <Text style={{flex:1,color:'#000',fontSize:15,}}>{item.name}</Text>
            <Text style={{flex:1,color:'#000',fontSize:15,}}>{item.mail}</Text>
            <Text style={{flex:1,color:'#000',fontSize:15,}}>{item.phone}</Text>
           
          </View>
        }
      />
      <View>
      <Button
        title='Log out'
        onPress={LogOut}
        // onPress={()=>navigation.navigate('LoginScreen')}
        color='#226557'
      />
      </View>
    </View>
    <TouchableOpacity 
    onPress={()=>navigation.navigate('CreateUserScreen')}
    style={styles.float}>
       <Image source={require('../assets/Img/pluss.png')} />
    </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'green',
    marginBottom: 20,
    paddingLeft: 15,
  },
  tapLogin:{
    backgroundColor: 'white',
    width:100,
    margin:100,
    color:'#fff',
    lineHeight:40,
    fontSize:20,
    textAlign:'center'
  },
  float:{
    // backgroundColor:'white',
    width:45,
    height:45,
    position: 'absolute',
    bottom:59,
    right:5,
    borderRadius:45,
    justifyContent:'center',
    alignItems: 'center',
    // borderWidth: 0.15,
  }
});
