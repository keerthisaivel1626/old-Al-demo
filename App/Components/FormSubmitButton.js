import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const FormSubmitButton = ({ title, submitting, onPress }) => {
  const backgroundColor = submitting ? '#0096FF' : '#4169E1';

  return (
    <>
      {title === 'Back' ? (
        <TouchableOpacity
          onPress={!submitting ? onPress : null}
          style={[styles.container, {color: 'white', borderColor: '#0096FF',borderWidth:2,marginTop:10}]}>
          <Text style={{fontSize: 18, color: '#0096FF'}}>{title}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={!submitting ? onPress : null}
          style={[styles.container, {backgroundColor}]}>
          <Text style={{fontSize: 18, color: '#fff'}}>{title}</Text>
        </TouchableOpacity>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 45,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FormSubmitButton;