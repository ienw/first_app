import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  AsyncStorage,
} from 'react-native';
import PropTypes from 'prop-types';
import {login} from '../hooks/APIHooks';
import FormTextInput from '../components/FormTextInput'
import useSignUpForm from '../hooks/LoginHooks';
import Register from './Register';



const Login = (props) => { // props is needed for navigation
  const {inputs, handleUsernameChange, handlePasswordChange} = useSignUpForm();
  const signInAsync = async () => {
   try{
     const user = await login(inputs);
     console.log('Login', user);
     await AsyncStorage.setItem('userToken', user.token);
     await AsyncStorage.setItem('user', JSON.stringify(user.user));
     props.navigation.navigate('App');
   }catch(e){
     console.log(e.message);
   }
  }

  return (
    <View style={styles.container}>


      <Text>Login</Text>
      <View style={styles.form}>
        <FormTextInput
          autoCapitalize='none'
          placeholder='username'
          onChangeText={handleUsernameChange}
        />
        <FormTextInput
          autoCapitalize='none'
          placeholder='password'
          secureTextEntry={true}
          onChangeText={handlePasswordChange}
        />
        <Button title="Sign in!" onPress={signInAsync} />

      <Register/>

      </View>
      </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  form: {
    padding:20,
  }
});

// proptypes here

export default Login;
