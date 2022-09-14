import React from 'react';

import PastOrder from '../screens/MainScreens/PastOrder';
import Product from '../screens/MainScreens/Product';
import Stores from '../screens/MainScreens/Stores';

import {View, Image, Text} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon1 from 'react-native-vector-icons/SimpleLineIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          borderTopLeftRadius: 30,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          borderTopRightRadius: 30,
          position: 'absolute',
          // marginBottom: 5,
        },
      }}>
      <Tab.Screen
        name="PastOrder"
        component={PastOrder}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                height: '100%',
                alignItems: 'center',
                marginTop: 15,
                justifyContent: 'center',
                // backgroundColor: 'red',
              }}>
              {/* <Icon
                name="shopping-bag"
                size={20}
                color={focused ? '#E06437' : '#9E9E9E'}
              /> */}
              <Image
                resizeMode="contain"
                style={{height: 20, width: 20}}
                source={
                  focused
                    ? require(`../assets/post.png`)
                    : require(`../assets/pre.png`)
                }
              />
              {/* <Text>Poast</Text> */}
            </View>
          ),
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name="Stores"
        component={Stores}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 15,
                // backgroundColor: 'red',
              }}>
              {/* <Icon
                name="users"
                size={20}
                color={focused ? '#E06437' : '#9E9E9E'} */}
              {/* /> */}
              <Image
                resizeMode="contain"
                style={{height: 20, width: 20}}
                source={
                  focused
                    ? require(`../assets/store.png`)
                    : require(`../assets/streore.png`)
                }
              />
            </View>
          ),
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name="Product"
        component={Product}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                height: '100%',
                marginTop: 15,
                alignItems: 'center',
                justifyContent: 'center',
                // backgroundColor: 'red',
              }}>
              {/* <Icon1
                name="drawer"
                size={20}
                color={focused ? '#E06437' : '#9E9E9E'}
              /> */}
              <Image
                resizeMode="contain"
                style={{height: 20, width: 20}}
                source={
                  focused
                    ? require(`../assets/product.png`)
                    : require(`../assets/preduct.png`)
                }
              />
              {/* <Text>cds</Text> */}
            </View>
          ),
          tabBarLabel: '',
        }}
      />
    </Tab.Navigator>
  );
};
export default TabNavigator;
