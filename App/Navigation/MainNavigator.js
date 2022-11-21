import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ForgotPassword from '../Components/ForgotPassword';
import AppForm from '../Components/AppForm';
import VerificationOTP from '../Components/VerificationOTP';
import {useLogin} from '../Context/LoginProvider';
import DrawerNavigator from './DrawerNaviagtor';
import ResetPassword from '../Components/ResetPassword';
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen component={AppForm} name="AppForm" />
      <Stack.Screen component={ForgotPassword} name="ForgotPassword" />
      <Stack.Screen component={VerificationOTP} name="VerificationOTP" />
      <Stack.Screen component={ResetPassword} name="ResetPassword"/>
    </Stack.Navigator>
  );
};


const MainNavigator = () => {
  const {isLoggedIn} = useLogin();
  return isLoggedIn ? <DrawerNavigator /> : <StackNavigator />;
};
export default MainNavigator;
