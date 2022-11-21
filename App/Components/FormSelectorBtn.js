import React from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  Animated,
} from 'react-native';

const FormSelectorBtn = ({title, backgroundColor, style, onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View style={[styles.container, style, ]}>
        <Text style={styles.title}>{title}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    
    width: '80%',

    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {fontSize: 20, fontWeight: 'bold', color: '#4285F4'},
});

export default FormSelectorBtn;
