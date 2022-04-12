// Example of Bottom Sheet in React Native
// https://aboutreact.com/react-native-bottom-sheet/

// import React in our code
import React from 'react';

// import all the components we are going to use
import { SafeAreaView, StyleSheet, View, Text, Button } from 'react-native';

//import basic react native components
import { BottomSheet } from 'react-native-btr';

//import to show social icons
import { SocialIcon } from 'react-native-elements';

const App = () => {
  const [visible, setVisible] = useState(false);

  const toggleBottomNavigationView = () => {
    //Toggling the visibility state of the bottom sheet
    setVisible(!visible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 20,
            marginBottom: 20,
            textAlign: 'center',
          }}>
          Example of Bottom Sheet in React Native
        </Text>
        <Button
          onPress={toggleBottomNavigationView}
          //on Press of the button bottom sheet will be visible
          title="Show Bottom Sheet"
        />
        <BottomSheet
          visible={visible}
          //setting the visibility state of the bottom shee
          onBackButtonPress={toggleBottomNavigationView}
          //Toggling the visibility state on the click of the back botton
          onBackdropPress={toggleBottomNavigationView}
          //Toggling the visibility state on the clicking out side of the sheet
        >
          {/*Bottom Sheet inner View*/}
          <View style={styles.bottomNavigationView}>
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  padding: 20,
                  fontSize: 20,
                }}>
                Share Using
              </Text>
              <View style={{ flex: 1, flexDirection: 'row' }}>
              <SocialIcon
  type='twitter'
/>
                <SocialIcon
                  type="gitlab"
                  onPress={() => {
                    toggleBottomNavigationView();
                    alert('gitlab');
                  }}
                />
                <SocialIcon
                  type="medium"
                  onPress={() => {
                    toggleBottomNavigationView();
                    alert('medium');
                  }}
                />
                <SocialIcon
                  type="facebook"
                  onPress={() => {
                    toggleBottomNavigationView();
                    alert('facebook');
                  }}
                />
                <SocialIcon
                  type="instagram"
                  onPress={() => {
                    toggleBottomNavigationView();
                    alert('instagram');
                  }}
                />
              </View>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <SocialIcon
                  type="facebook"
                  onPress={() => {
                    toggleBottomNavigationView();
                    alert('facebook');
                  }}
                />
                <SocialIcon
                  type="instagram"
                  onPress={() => {
                    toggleBottomNavigationView();
                    alert('instagram');
                  }}
                />
                <SocialIcon
                  type="gitlab"
                  onPress={() => {
                    toggleBottomNavigationView();
                    alert('gitlab');
                  }}
                />
                <SocialIcon
                  type="twitter"
                  onPress={() => {
                    toggleBottomNavigationView();
                    alert('twitter');
                  }}
                />
                <SocialIcon
                  type="medium"
                  onPress={() => {
                    toggleBottomNavigationView();
                    alert('medium');
                  }}
                />
              </View>
            </View>
          </View>
        </BottomSheet>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0F7FA',
  },
  bottomNavigationView: {
    backgroundColor: '#fff',
    width: '100%',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// // SignUp.js
// import React from 'react'
// import {
//   View,
//   Button,
//   TextInput,
//   StyleSheet
// } from 'react-native'

// export default class SignUp extends React.Component {
//   state = {
//     username: '', password: '', email: '', phone_number: ''
//   }
//   onChangeText = (key, val) => {
//     this.setState({ [key]: val })
//   }
//   signUp = async () => {
//     const { username, password, email, phone_number } = this.state
//     try {
//       // here place your signup logic
//       console.log('user successfully signed up!: ', success)
//     } catch (err) {
//       console.log('error signing up: ', err)
//     }
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <TextInput
//           style={styles.input}
//           placeholder='Username'
//           autoCapitalize="none"
//           placeholderTextColor='white'
//           onChangeText={val => this.onChangeText('username', val)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder='Password'
//           secureTextEntry={true}
//           autoCapitalize="none"
//           placeholderTextColor='white'
//           onChangeText={val => this.onChangeText('password', val)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder='Email'
//           autoCapitalize="none"
//           placeholderTextColor='white'
//           onChangeText={val => this.onChangeText('email', val)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder='Phone Number'
//           autoCapitalize="none"
//           placeholderTextColor='white'
//           onChangeText={val => this.onChangeText('phone_number', val)}
//         />
//         <Button
//           title='Sign Up'
//           onPress={this.signUp}
//         />
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   input: {
//     width: 350,
//     height: 55,
//     backgroundColor: '#42A5F5',
//     margin: 10,
//     padding: 8,
//     color: 'white',
//     borderRadius: 14,
//     fontSize: 18,
//     fontWeight: '500',
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   }
// })


























// import React, {useState} from 'react';
// import {Text, View, StyleSheet} from 'react-native';
// import DropDownPicker from 'react-native-dropdown-picker';

// function App() {
//   const [open, setOpen] = useState(false);
//   const [value, setValue] = useState(null);
//   const [items, setItems] = useState([
//     {label: 'Newest', value: 'Newest'},
//     {label: 'Oldest', value: 'Oldest'},
//     {label: 'Recent', value: 'Recent'},
//     {label: 'A-Z', value: 'A-Z'},
//   ]);

//   return (
//     <View style={styles.container}>
//       <DropDownPicker
//         placeholder="Select an item"
//         defaultIndex={0}
//         containerStyle={{
//           height: 70,
//         }}
//         dropDownStyle={{
//           marginTop: 11,
//           borderBottomLeftRadius: 10,
//           borderBottomRightRadius: 10,
//           fontSize: 20,
//           fontWeight: 'bold',
//         }}
//         dropDownMaxHeight={200}
//         itemStyle={{
//           justifyContent: 'flex-start',
//           marginTop: 10,
//           borderBottomWidth: 0.5,
//           fontSize: 50,
//         }}
//         style={{
//           borderBottomColor: '#4C84FF',
//           borderBottomWidth: 1,
//           zIndex: 5000,
//           backgroundColor: '#eeeeee',
//           borderBottomLeftRadius: 0,
//           borderBottomRightRadius: 0,
//           borderBottomStartRadius: 3,
//           borderBottomEndRadius: 3,
//           borderColor: '#eeeeee',
//         }}
//         listMode="SCROLLVIEW"
//         searchable={true}
//         multiple={true}
//         min={0}
//         max={2}
//         open={open}
//         value={value}
//         items={items}
//         setOpen={setOpen}
//         setValue={setValue}
//         setItems={setItems}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ffff',
//   },
// });
// export default App;
