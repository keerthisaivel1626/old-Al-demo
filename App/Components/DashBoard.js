import React from 'react';
import {
  ScrollView,
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  Button,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const DashBoard = () => {
  return (
    <ScrollView>
      <View style={styles.dahboardView}>
        <View style={{...styles.dashBoardCard}}>
          <View style={styles.data}>
            <Text style={styles.paragraphHead}>
              welcome to React native world
            </Text>
            <Image
              width={100}
              height={100}
              source={require('../Assets/s_adm_banner.png')}
              styles={styles.logo}
            />
            <Text style={{...styles.paragraph}}>
              We have set of values which strongly reflect our “Customer –
              First” approach. We would not exist without our customers, and we
              never let ourselves forget that.
            </Text>
          </View>
        </View>
        <View style={{...styles.dashBoardCard, width: '60%'}}>
          <Icon
            name="dashboard"
            size={50}
            style={{color: 'blue', margin: 20}}
          />
          <Text style={styles.paragraph}>Number of orders</Text>
          <Text style={styles.paragraph}>120</Text>
        </View>
        <View style={{...styles.dashBoardCard, width: '60%'}}>
          <Icon
            name="dashboard"
            size={50}
            style={{color: 'blue', margin: 20}}
          />
          <Text style={styles.paragraph}>Admin users</Text>
          <Text style={styles.paragraph}>120</Text>
        </View>
        <View style={{...styles.dashBoardCard, width: '60%'}}>
          <Icon
            name="dashboard"
            size={50}
            style={{color: 'blue', margin: 20}}
          />
          <View style={styles.paragraph}>
            <Text style={styles.paragraph}>Notification</Text>
            <Text style={styles.paragraph}>120</Text>
          </View>
        </View>
        <View style={{...styles.dashBoardCard, width: '60%'}}>
          <Icon
            name="dashboard"
            size={50}
            style={{color: 'blue', margin: 20}}
          />
          <Text style={styles.paragraph}>Notification</Text>
          <Text style={styles.paragraph}>120</Text>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  titleStyle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
  centerContentStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  dahboardView: {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dashBoardCard: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: 'blue',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 1.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  paragraphHead: {
    margin: 24,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'blue',
  },
  paragraph: {
    margin: 44,
    marginTop: 5,
    fontSize: 18,
    textAlign: 'center',
    color: 'gray',
  },
  logo: {
    height: 128,
    width: 128,
  },
});

export default DashBoard;
