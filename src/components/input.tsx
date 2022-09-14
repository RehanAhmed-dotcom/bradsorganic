import React from 'react';
import {TextInput, Text} from 'react-native';

const Input = ({placeholder, value, setValue, secure}) => {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor="#707070"
      value={value}
      secureTextEntry={secure ? true : false}
      onChangeText={text => setValue(text)}
      textAlign="center"
      style={{
        // alignItems: 'center',
        height: 40,
        borderRadius: 5,
        // alignContent: 'center',
        backgroundColor: '#E4E4E4',
        width: '90%',
      }}
    />
    // <Text>placeholder</Text>
  );
};
export default Input;
