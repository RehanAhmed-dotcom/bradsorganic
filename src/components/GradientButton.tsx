import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Text} from 'react-native';
const GradientButton = ({title}) => {
  return (
    <LinearGradient
      style={{
        height: 40,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
      }}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#EA973E', '#E06437']}>
      <Text style={{color: 'white', fontWeight: 'bold'}}>{title}</Text>
    </LinearGradient>
  );
};
export default GradientButton;
