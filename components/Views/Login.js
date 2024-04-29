import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Pressable,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';

export default function Login({ onPress }) {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>LOGIN</Text>
        <Image
          style={styles.img}
          source={require('../../assets/imageLogin.png')}
        />
        <TextInput
          placeholder="Enter your username....."
          style={styles.inputUser}
          onChangeText={setUser}
        />
        <TextInput
          placeholder="Enter your password....."
          style={styles.inputPass}
          onChangeText={setPass}
          secureTextEntry={true}
        />
        <Pressable
          style={styles.btn}
          onPress={() => {
            onPress(user, pass);
          }}>
          <Text style={styles.btnText}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
  },
  img: {
    width: '80%',
    height: '40%',
    alignSelf: 'center',
  },
  inputUser: {
    padding: 5,
    marginTop: 50,
    borderWidth: 1,
    width: '80%',
    alignSelf: 'center',
    borderRadius: 5,
    fontSize: 20,
  },
  inputPass: {
    padding: 5,
    marginTop: 15,
    borderWidth: 1,
    width: '80%',
    alignSelf: 'center',
    borderRadius: 5,
    fontSize: 20,
  },
  btnText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
  btn: {
    marginTop: 30,
    width: '80%',
    alignSelf: 'center',
    backgroundColor: '#0FF',
    padding: 7,
    borderRadius: 5,
  },
  title: {
    width: '100%',
    padding: 15,
    textAlign: 'center',
    paddingVertical: 13,
    fontSize: 35,
    fontWeight: 'bold',
    color: '#0FF',
  },
});
