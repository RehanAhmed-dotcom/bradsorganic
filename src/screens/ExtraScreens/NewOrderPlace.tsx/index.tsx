import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {bradEmptyAll} from '../../../redux/actions';
import styles from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import GradienButton from '../../../components/GradientButton';
const NewOrderPlace = ({navigation, route}) => {
  const {store} = route.params;
  const {Cart} = useSelector(({BCART}) => BCART);
  const dispatch = useDispatch();
  // console.log('cart', Cart);
  const data = [
    {
      id: '1',
      name: 'Bertucci',
      oz: '5.5 oz',
      address: '37 west Nyacl st, Hempstead Ny 11743',
      type: 'GE 121',
      price: '$2.66',
    },
  ];

  const renderItem = ({item}) => (
    <View style={styles.inner}>
      <View style={styles.rows}>
        <Text style={{fontWeight: 'bold'}}>{item.value}</Text>
        {/* <Text style={{color: 'grey'}}>{item.type}</Text> */}
      </View>
      <View style={styles.rows}>
        <Text style={{fontSize: 12, color: '#707070'}}>{item.address}</Text>
        {/* <Text style={{color: 'orange', fontSize: 12, marginTop: 10}}> */}
        {/* {item.price} */}
        {/* </Text> */}
      </View>
    </View>
  );
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.top}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../../assets/back.png')}
            style={{height: 20, width: 20, resizeMode: 'contain'}}
          />
          {/* <Icon name="arrowleft" color="orange" size={20} /> */}
        </TouchableOpacity>
        <Text style={{color: '#E06437', fontSize: 20}}>New Order</Text>
        <TouchableOpacity>
          {/* <Icon name="arrowleft" color="white" /> */}
        </TouchableOpacity>
      </View>

      {/* <ScrollView> */}
      <View style={styles.rest}>
        <View style={{width: '100%', marginTop: 20}}>
          <View style={styles.inner}>
            <View style={styles.rows}>
              <Text style={{fontWeight: 'bold'}}>{store.value}</Text>
              {/* <Text style={{color: 'grey'}}>{item.type}</Text> */}
            </View>
            <View style={styles.rows}>
              <Text style={{fontSize: 12, color: '#707070'}}>
                {store.address}
              </Text>
              {/* <Text style={{color: 'orange', fontSize: 12, marginTop: 10}}> */}
              {/* {item.price} */}
              {/* </Text> */}
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              bradEmptyAll()(dispatch);
              navigation.navigate('SelectQuantity', {store});
            }}
            style={styles.topButton}>
            <Text style={{color: '#E06437'}}>Select Products</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* </ScrollView> */}
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.buttons}>
          <Text style={{color: 'white'}}>P L A C E O R D E R</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default NewOrderPlace;
