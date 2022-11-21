import React from 'react';
import {View, Text, TouchableOpacity, Image,StyleSheet} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import DashBoard from '../Components/DashBoard';
import Profile from '../Components/Profile';
import AdminUser from '../Components/AdminUser';
import OrderManagement from '../Components/OrderManagement';
import {useLogin} from '../Context/LoginProvider';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from "react-native-vector-icons/Octicons"

const Drawer = createDrawerNavigator();

const CustomDrawer = props => {
  const {setIsLoggedIn, profile} = useLogin();
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 20,
            backgroundColor: '#f6f6f6',
            marginBottom: 20,
          }}
          onPress={() => console.log('hello')}>
          <Image
            source={require('../Assets/int_logo.jpg')}
            style={{width: 60, height: 60, borderRadius: 30}}
          />
          <View style={{marginHorizontal: 13}}>
            <Text style={styles.ProfileNameStyle}>keerthana</Text>
            <Text style={styles.ProfileEmailStyle}>
              keerthana.v@indusnet.co.in
            </Text>
          </View>
        </TouchableOpacity>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity
        style={{
          position: 'absolute',
          right: 0,
          left: 0,
          bottom: 50,
          backgroundColor: '#f6f6f6',
          padding: 20, 
        }}
        onPress={() => setIsLoggedIn(false)}>
        <View style={{flexDirection: 'row'}}>
          <Ionicons name="md-log-out" size={26} style={{color: '#0096FF'}} />
          <Text style={{marginHorizontal: 20, fontSize: 15, fontWeight: '500'}}>
            Log Out
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: 'transparent',
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTitle: '',
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Dashboard"
        component={DashBoard}
        options={{
          drawerIcon: ({color}) => (
            <Icon name="dashboard" size={22} color={(color = '#0096FF')} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerIcon: ({color}) => (
            <Icons name="feed-person" size={22} color={(color = '#0096FF')} />
          ),
        }}
      />
      <Drawer.Screen
        name="Order Management"
        component={OrderManagement}
        options={{
          drawerIcon: ({color}) => (
            <Icons name="database" size={22} color={(color = '#0096FF')} />
          ),
        }}
      />
      <Drawer.Screen
        name="Admin User"
        component={AdminUser}
        options={{
          drawerIcon: ({color}) => (
            <Icon
              name="admin-panel-settings"
              size={22}
              color={(color = '#0096FF')}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  ProfileNameStyle: {
    color: 'black',
    fontSize: 18,
    fontWeight: '800',
  },
  ProfileEmailStyle:{
      color:'gray',
      fontSize:14,
      fontWeight:'600'
  }
});
export default DrawerNavigator;
