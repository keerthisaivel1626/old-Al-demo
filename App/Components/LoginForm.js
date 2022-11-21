import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import {useLogin} from '../Context/LoginProvider';
import {isValidEmail, isValidObjField, updateError} from '../Utils/Methods';

import FormContainer from './FormContainer';
import FormInput from './FormInput';
import FormSubmitButton from './FormSubmitButton';
import { TouchableOpacity } from 'react-native-gesture-handler';


const LoginForm = (props) => {
 
  const {setIsLoggedIn, setProfile} = useLogin();
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [ShowPassword, setShowPassword] = useState(false);

  const {email, password} = userInfo;

  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({...userInfo, [fieldName]: value});
  };
  const[islogin,setIsLogin]=useState(false)

  const isValidForm = () => {
    if (!isValidObjField(userInfo))
      return updateError('Required all fields!', setError);

    if (!isValidEmail(email)) return updateError('Invalid email!', setError);

    if (!password.trim() || password.length < 8){
      return updateError('Password is too short!', setError);
    
    }  // }else if(){
    //    return updateError('Password is not valid format', setError);
    // }

    return true;
  };

  const submitForm = async () => {
    if (isValidForm()) {
      try {      
        console.log('hi');
        setIsLogin(true)
         
         setTimeout(() => {
            setIsLoggedIn(true);
         }, 5000);
       
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <FormContainer>
      {error ? (
        <Text style={{color: 'red', fontSize: 18, textAlign: 'center'}}>
          {error}
        </Text>
      ) : null}
      <FormInput
        value={email}
        onChangeText={value => handleOnChangeText(value, 'email')}
        label="Email"
        placeholder="example@email.com"
        autoCapitalize="none"
      />
      <FormInput
        value={password}
        onChangeText={value => handleOnChangeText(value, 'password')}
        label="Password"
        placeholder="********"
        autoCapitalize="none"
        secureTextEntry={ShowPassword ? false : true}
      />
      <View style={{flexDirection: 'row'}}>
        <CheckBox
          disabled={false}
          value={ShowPassword}
          onValueChange={newValue => setShowPassword(newValue)}
          style={{marginBottom: 20}}
        />
        <Text
          style={{
            marginTop: 5,
            fontSize: 14,
            fontWeight: '500',
            color: 'gray',
          }}>
          Show Password
        </Text>
        <TouchableOpacity
          style={{marginLeft: 50}}
          onPress={() => props.navigation.navigate('ForgotPassword')}>
          <Text style={{color: '#4285F4', marginTop: 5, marginLeft: 80}}>
            Forgot Password
          </Text>
        </TouchableOpacity>
      </View>
      {!islogin ? (
        <FormSubmitButton onPress={submitForm} title="Login" />
      ) : (
        <View style={ 
        {backgroundColor: '#4169E1',
         height: 45,
         width: '100%',
         borderRadius:10,
         justifyContent: 'center',
         alignItems: 'center',}}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      )}
    </FormContainer>
  );
};

const styles = StyleSheet.create({
  container: {
   
  },
  title: {fontSize: 30, fontWeight: 'bold', color: '#4285F4'},
 
});

export default LoginForm;
