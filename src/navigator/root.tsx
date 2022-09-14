import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import Login from '../screens/AuthScreens/Login';
import TabNavigator from '../navigator/bottomStack';
import NewOrder from '../screens/ExtraScreens/NewOrder';
import NewOrderPlace from '../screens/ExtraScreens/NewOrderPlace.tsx';
import SelectQuantity from '../screens/ExtraScreens/SelectQuantity';
import PlaceOrder from '../screens/ExtraScreens/PlaceOrder';
import Modify from '../screens/ExtraScreens/Modify';
import Splash from '../screens/Splash';
import UpdateQuantity from '../screens/ExtraScreens/UpdateQuantity';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const Root = () => {
  const {isLoggedIn} = useSelector(({USER}) => USER);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        {isLoggedIn ? (
          <>
            <Stack.Screen name="TabNavigator" component={TabNavigator} />
            <Stack.Screen name="NewOrder" component={NewOrder} />
            <Stack.Screen name="NewOrderPlace" component={NewOrderPlace} />
            <Stack.Screen name="UpdateQuantity" component={UpdateQuantity} />
            <Stack.Screen name="SelectQuantity" component={SelectQuantity} />
            <Stack.Screen name="PlaceOrder" component={PlaceOrder} />
            <Stack.Screen name="Modify" component={Modify} />
          </>
        ) : (
          <>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Login" component={Login} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
