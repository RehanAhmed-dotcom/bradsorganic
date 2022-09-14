import React from 'react';
import {SafeAreaView, View, Text, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Splash = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('Login');
  }, 5000);
  return (
    <SafeAreaView style={{flex: 1}}>
      <LinearGradient
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
        colors={['#EA973E', '#E06437']}>
        <Text style={{fontSize: 36, color: 'white'}}>Brads Organic</Text>
      </LinearGradient>
    </SafeAreaView>
  );
};
export default Splash;
