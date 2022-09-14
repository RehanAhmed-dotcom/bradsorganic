import React from 'react';
import {View, Text} from 'react-native';

import NewOrder from '../screens/ExtraScreens/NewOrder';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const ExtraStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="NewOrder" component={NewOrder} />
    </Stack.Navigator>
  );
};
export default ExtraStack;
