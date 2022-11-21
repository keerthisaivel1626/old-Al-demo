import React, {useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Animated,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';

import {useLogin} from '../Context/LoginProvider';
import {isValidEmail, isValidObjField, updateError} from '../Utils/Methods';
import FormSelectorBtn from './FormSelectorBtn';
import FormContainer from './FormContainer';
import FormInput from './FormInput';
import FormSubmitButton from './FormSubmitButton';
import CheckBox from '@react-native-community/checkbox';
const ResetPassword = props => {
  const animation = useRef(new Animated.Value(0)).current;
  const {width} = Dimensions.get('window');
  const loginColorInterpolate = animation.interpolate({
    inputRange: [0, width],
    outputRange: ['#4169E1', 'rgba(27,27,51,0.4)'],
  });
  const {setIsLoggedIn, setProfile} = useLogin();
  const [userInfo, setUserInfo] = useState({
    password: '',
  });

  const [error, setError] = useState('');
  const {password} = userInfo;
  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({...userInfo, [fieldName]: value});
  };

  const isValidForm = () => {
    if (!isValidObjField(userInfo))
      return updateError('Required all fields!', setError);

    
    return true;
  };

  const submitForm = async () => {
    if (isValidForm()) {
      try {
        props.navigation.navigate('VerificationOTP');
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <ScrollView style={styles.forgotContainer}>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 10,
        }}>
        <Image
          source={require('../Assets/int_logo.jpg')}
          style={{width: 100, height: 100, borderRadius: 100}}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 30,
        }}>
        <FormSelectorBtn
          style={styles.borderLeft}
          backgroundColor={loginColorInterpolate}
          title="Reset Password"
        />
      </View>
      <FormContainer>
        <View style={{display: 'flex'}}>
          {error ? (
            <Text style={{color: 'red', fontSize: 18, textAlign: 'center'}}>
              {error}
            </Text>
          ) : null}
          <FormInput
            value={password}
            onChangeText={value => handleOnChangeText(value, 'email')}
            label="password"
            placeholder="example@email.com"
            autoCapitalize="none"
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
        </View>
          <View style={{marginTop: 20}}>
            <FormSubmitButton onPress={submitForm} title="NEXT" />

            <FormSubmitButton
              title="Back"
              onPress={() => props.navigation.goBack()}
            />
          </View>
        </View>
      </FormContainer>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  borderLeft: {
    marginTop: 10,
  },
  forgotContainer: {
    display: 'flex',
    marginTop: 70,
    height: 400,
  },
});

export default ResetPassword;
