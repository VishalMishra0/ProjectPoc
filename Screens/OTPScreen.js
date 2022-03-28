import { View, Text, Button,TextInput } from 'react-native'
import React ,{useEffect,useState} from 'react'

import BottomNavigation from '../Navigation/BottomNavigation'

import { firebase } from '@react-native-firebase/auth'

const OTPScreen = ({navigation}) => {

  const [phone,setPhone] = useState('')
  const [code, setCode] = useState('123456');

  useEffect(()=>{
    var userPhone= firebase.auth().currentUser.phoneNumber;
    console.log("current user mobile is : ", userPhone)
    setPhone(userPhone)
  })

  async function confirmCode() {
    try {
      await confirm.confirm(code)
      
    } catch (error) {
      console.log('Invalid code.',error);
    }
  }

  const userPhone = userPhone;
  return (

    <>
    <TextInput style={{color:'black'}} value={code} onChangeText={text => setCode(text)} />
    <Button title="Confirm Code" onPress={() => confirmCode().then(()=>{navigation.navigate('BottomNavigation')})} />
 
  </>

    // <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    //   <Text style={{color:'black'}}> {phone} OTPScreen</Text>
    //   <Button
    //       title='press'
    //       onPress={()=>navigation.replace('BottomNavigation')}
          
    //   />
    // </View>
  )
}

export default OTPScreen