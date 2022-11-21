import React,{useEffect} from 'react'
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import MainNavigator from './App/Navigation/MainNavigator';
import LoginProvider from './App/Context/LoginProvider';


const App= () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  
    return (
      <LoginProvider>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </LoginProvider>
    );
}

export default App;
