import { View, Text, TextInput,SafeAreaView, StyleSheet,ScrollView,TouchableWithoutFeedback,Alert,Button, TouchableOpacity,Image                  } from 'react-native'
import React ,{useState,useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import ModalInjection from 'react-native/Libraries/Modal/ModalInjection';
import firebase  from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
// import {TouchableWithoutFeedback } from 'react-native-gesture-handler';



export default function CreateUserScreen ({navigation}) {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [mail, setMail] = useState('')    
    
      
    const presshandler=()=>{ 

      

        const userData = {
          name: name,
          phone: phone,
          mail: mail
        }

        const newReference = database().ref('/users');
        newReference
          .push(userData)
          .then(() => console.log('Data updated.'))
          .then(()=> navigation.navigate('HomeScreen'))
        }

   
    

    return (
      <>
    <ScrollView>
    <View style={{flex:1,marginTop:30,marginBottom:200,alignItems:'center'}}>
      <SafeAreaView >
        
        <Text style={styles.Texts}>Enter Name :</Text>
        <TextInput
          style={styles.input}
          placeholder="Vishal Mishra"
          value={name}
          onChangeText={text => setName(text)}
        />

        <Text  style={styles.Texts}>Enter Mobile :</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={number => setPhone(number)}
          placeholder="+91 8323456780"
          keyboardType="phone-pad"
        />

        <Text  style={styles.Texts}>Enter E-mail :</Text>
        <TextInput
          style={styles.input}
          value={mail}
          onChangeText={text => setMail(text)}
          placeholder="Lilyeh069@gmail.com"
          keyboardType="email-address"
        />

        {/* <Text  style={styles.Texts}>Enter Password :</Text>
        <TextInput
          style={styles.input}
          // onChangeText={onChangeNumber}
          // value={number}
          placeholder="Yash@123#"
          keyboardType="default"
          secureTextEntry
        /> */}

        <TouchableWithoutFeedback  onPress={presshandler}>
       
          <View style={styles.button}>
            <Text style={{color:'white'}}>Create User</Text>
          </View>

        </TouchableWithoutFeedback>

      </SafeAreaView>
    </View>
    </ScrollView>

    <TouchableOpacity 
    onPress={()=>navigation.navigate('CreateUserScreen')}
    style={styles.float}>
       <Image source={require('../assets/Img/pluss.png')} />
    </TouchableOpacity>
    </>
  )
};


const styles = StyleSheet.create({
  input: {
      height: 40,
    width:350,
    margin: 12,
    borderWidth: 1,
    borderRadius:50,padding:11

  },
  Texts:{
      marginTop:10,
    marginLeft:20,
    color:'#000'
  },
  button: {
    justifyContent:'center',
    alignItems: "center",
    backgroundColor: "#226557",
    padding: 10,
    width:150,
    borderRadius:50,
    marginTop:40,
    marginLeft:115,

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





