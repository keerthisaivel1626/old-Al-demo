import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
  Animated,
  Dimensions,
  ActivityIndicator,
  Button
} from 'react-native';
import FormSubmitButton from './FormSubmitButton';
import FormSelectorBtn from './FormSelectorBtn';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';


const VerificationOTP = (props) => {
     const animation = useRef(new Animated.Value(0)).current;
        const {width} = Dimensions.get('window');
     const loginColorInterpolate = animation.interpolate({
       inputRange: [0, width],
       outputRange: ['#4169E1', 'rgba(27,27,51,0.4)'],
     });
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const [otp, setOtp] = useState({1: '', 2: '', 3: '', 4: '',5:'',6:''});
  const [error, setError] = useState('');
  const[isEmailValid,setIsEmailValid] = useState(false);
const [isPlaying, setIsPlaying] =useState(true);
  console.log('===>',isEmailValid);

  const submitEmail =() => {
    console.log('onpress===>')
    const isEmpty = Object.values(otp).every(x => x === null || x === '');
   
    if (isEmpty) {
      setError('Required all fields!');
      console.log('error')
    } else {
      try {
          console.log('onpress')
        setIsEmailValid(true);
        console.log('------>',isEmailValid)
        setTimeout(() => {
          props.navigation.navigate('ResetPassword');
        }, 5000);
      } catch (error) {
        console.log(error);
      }
    }
    
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../Assets/int_logo.jpg')}
          style={{width: 100, height: 100, borderRadius: 100}}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          margin: 10,
        }}>
        <FormSelectorBtn
         
          backgroundColor={loginColorInterpolate}
          title="Password Recovery"
        />
      </View>
      {error ? (
        <Text style={{color: 'red', fontSize: 18, textAlign: 'center'}}>
          {error}
        </Text>
      ) : null}
     
      <Text
        style={{
          fontWeight: 'bold',
          marginTop: 30,
          marginHorizontal: 20,
          marginBottom: 5,
          fontSize: 18,
          color: 'gray',
        }}>
        OTP
      </Text>
      <View style={styles.otpContainer}>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={firstInput}
            placeholder="0"
            onChangeText={text => {
              setOtp({...otp, 1: text});
              text && secondInput.current.focus();
            }}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={secondInput}
            placeholder="0"
            onChangeText={text => {
              setOtp({...otp, 2: text});
              text ? thirdInput.current.focus() : firstInput.current.focus();
            }}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={thirdInput}
            placeholder="0"
            onChangeText={text => {
              setOtp({...otp, 3: text});
              text ? fourthInput.current.focus() : secondInput.current.focus();
            }}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={fourthInput}
            placeholder="0"
            onChangeText={text => {
              setOtp({...otp, 4: text});
              !text && thirdInput.current.focus();
            }}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={fourthInput}
            placeholder="0"
            onChangeText={text => {
              setOtp({...otp, 5: text});
              !text && thirdInput.current.focus();
            }}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={fourthInput}
            placeholder="0"
            onChangeText={text => {
              setOtp({...otp, 6: text});
              !text && thirdInput.current.focus();
            }}
          />
        </View>
      </View>

      <TouchableOpacity
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: '#4285F4',
            marginTop: 5,
            borderBottomWidth: 1,
            borderBottomColor: '#4285F4',
          }}>
          Resend OTP
        </Text>
      </TouchableOpacity>
      <View style={{marginTop: 20, margin: 39}}>
        {!isEmailValid ? (
          <FormSubmitButton
            title="NEXT"
            onPress={submitEmail}></FormSubmitButton>
        ) : (
          <View
            style={{
              backgroundColor: '#4169E1',
              height: 45,
              width: '100%',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator size="large" color="#fff" />
          </View>
        )}
        <FormSubmitButton
          title="Back"
          onPress={() => props.navigation.goBack()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 20,

    lineHeight: 20 * 1.4,
    width: 80,
    textAlign: 'center',
  },
  title: {
    fontSize: 20,

    lineHeight: 20 * 1.4,
    marginTop: 50,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  content: {
    fontSize: 20,

    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  phoneNumberText: {
    fontSize: 18,

    lineHeight: 18 * 1.4,
    color: 'yellow',
  },
  otpContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  otpBox: {
    borderRadius: 5,
    borderColor: '#4285F4',
    borderWidth: 0.5,
  },
  otpText: {
    fontSize: 25,
    color: 'black',
    padding: 0,
    textAlign: 'center',
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
  signinButton: {
    backgroundColor: '#4285F4',
    borderRadius: 8,
    marginHorizontal: 20,
   height:40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  signinButtonText: {
    fontSize: 18,
    lineHeight: 18 * 1.4,
    color: 'white',
  },
});

export default VerificationOTP;
