import { View, Text, TextInput,SafeAreaView, StyleSheet,ScrollView,TouchableWithoutFeedback,Alert,Button, } from 'react-native'
import React ,{useState,useEffect} from 'react'
import firebase  from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export default function EditUserScreen ({route, navigation}) {

  // console.log("Route is : " ,route.params)
  const [dataArray, setdataArray] = useState([])

  const UpdateUser = () => {
    let refer = database().ref(`/User/${id}`)
    
    refer.update({
      name: name,
      phone: phone,
      email: email,
      password: password,
      
    })
    .then(() => console.log('Data updated.'));
    console.log('User Detail has Updated')
  }

  const [name, setName] = useState(route.params.name)
  const [phone, setPhone] = useState(route.params.phone)
  const [email, setEmail] = useState(route.params.email)
  const [password, setPassword] = useState(route.params.password)
  const [id] = useState(route.params.id)
  return ( 
  
    <ScrollView>
    <View style={{marginTop:40 ,flex:1,alignItems:'center',justifyContent:'center'}}>
      <SafeAreaView >
     {/* <Text>ID is : ${id}</Text> */}
        <Text style={styles.Texts}> Name :</Text>
        <TextInput
          style={styles.input}
          placeholder="XYZ"
          value={name}
          onChangeText={text => setName(text)}
        />

        <Text  style={styles.Texts}>  Mobile :</Text>
        <TextInput
          style={styles.input}
          value={phone}
          maxLength={13}
          onChangeText={number => setPhone(number)}
          placeholder="1001001001"
          keyboardType="phone-pad"
        />

        <Text  style={styles.Texts}>  E-mail :</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={text => setEmail(text)}
          placeholder="xyz@live.in"
          keyboardType="email-address"
        />

        <Text  style={styles.Texts}>  Password :</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setPassword(text)}
          value={password}
          placeholder="rqi@.[]"
          keyboardType="default"
          // secureTextEntry
        />
          
          <TouchableWithoutFeedback  
          onPress={UpdateUser}
          >     
            <View style={styles.button}>
              <Text style={{color:'white'}}>Edit User Details</Text>
            </View>
          </TouchableWithoutFeedback>
      </SafeAreaView>
    </View>
    </ScrollView>

  )
}


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
});
