import React, {useRef} from 'react';
import {ScrollView, StyleSheet, View, Animated, Dimensions,Image} from 'react-native';
import FormSelectorBtn from './FormSelectorBtn';
import LoginForm from './LoginForm';
const {width} = Dimensions.get('window');

export default function AppForm({navigation}) {
  const animation = useRef(new Animated.Value(0)).current;
  const scrollView = useRef();
  const loginColorInterpolate = animation.interpolate({
    inputRange: [0, width],
    outputRange: ['#4169E1', 'rgba(27,27,51,0.4)'],
  });
  return (
    <ScrollView>
      <View style={{flex: 1, marginTop:50}}>
        <View style={{height: 100}}>
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
        </View>
        <View
          style={{
            flexDirection: 'row',
           justifyContent:'center',
           alignItems:'center',
            marginBottom: 20,
          }}>
          <FormSelectorBtn
            style={styles.borderLeft}
            backgroundColor={loginColorInterpolate}
            title="Login"
            onPress={() => scrollView.current.scrollTo({x: 0})}
          />         
        </View>
        <ScrollView
          ref={scrollView}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: animation}}}],
            {useNativeDriver: false},
          )}>
          <LoginForm navigation={navigation} />
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  borderLeft: {
    borderRadius:8
  },
  borderRight: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
});
