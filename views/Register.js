import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  AsyncStorage,
} from 'react-native';
import PropTypes from 'prop-types';
import {register} from '../hooks/APIHooks';
import FormTextInput from '../components/FormTextInput'
import useSignUpForm from '../hooks/LoginHooks';


const Register = (props) => {
  const {handleUsernameChange,
    handleRegisterEmailChange, handleRegisterFullnameChange, handlePasswordChange, inputs} = useSignUpForm();
  const registerAsync = async () => {
  try{
    const result = await register(inputs);
    console.log('Register', result);
    //signInAsync();
  }catch(e){
    console.log(e.message);
  }
  };

  return (
      <View style={styles.form}>
      <Text style={styles.Text}>Register</Text>
      <View style={styles.form}>
        <FormTextInput
          autoCapitalize='none'
          placeholder='username'
          onChangeText={handleUsernameChange}
        />
        <FormTextInput
          autoCapitalize='none'
          placeholder='email'
          onChangeText={handleRegisterEmailChange}
        />
        <FormTextInput
          autoCapitalize='none'
          placeholder='fullname'
          onChangeText={handleRegisterFullnameChange}
        />
        <FormTextInput
          autoCapitalize='none'
          placeholder='password'
          secureTextEntry={true}
          onChangeText={handlePasswordChange}
        />
        <Button title="Register!" onPress={registerAsync} />
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
  },
  Text:{
    textAlign: 'center',
  }
});

export default Register;
