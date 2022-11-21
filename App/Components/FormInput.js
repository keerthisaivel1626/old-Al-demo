import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

const FormInput = props => {
  const { placeholder, label, error } = props;
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 5,
        }}
      >
        <Text style={{ fontWeight: 'bold',fontSize:18 }}>{label}</Text>
        {error ? (
          <Text style={{ color: 'red', fontSize: 16 }}>{error}</Text>
        ) : null}
      </View>
      
      <TextInput {...props} placeholder={placeholder} style={styles.input} />
      
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#4285F4',
    height: 39,
    borderRadius: 8,
    fontSize: 16,
    paddingLeft: 10,
    marginBottom: 20,
  },
});

export default FormInput;