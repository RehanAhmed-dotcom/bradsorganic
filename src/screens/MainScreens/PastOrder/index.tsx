import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  SafeAreaView,
} from 'react-native';
import {logoutuser, delUpd} from '../../../redux/actions';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';
import Icon1 from 'react-native-vector-icons/Fontisto';
import Icon from 'react-native-vector-icons/AntDesign';
// import {useDispatch} from 'react-redux';
import {pastOrders} from '../../../lib/api';
import {useSelector, useDispatch} from 'react-redux';
import {bradEmpty, bradEmptyMod} from '../../../redux/actions';
import styles from './styles';
import GradientButton from '../../../components/GradientButton';

const PastOrder = ({navigation}) => {
  const dispatch = useDispatch();
  const {Cart} = useSelector(({BCART}) => BCART);
  const tabBarHeight = useBottomTabBarHeight();
  // const dispatch = useDispatch();
  const [pas, setPas] = useState([]);
  const {userData} = useSelector(({USER}) => USER);
  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={
        () => {
          bradEmptyMod()(dispatch);
          delUpd()(dispatch);
          navigation.navigate('Modify', {
            id: item.id,
            store_name: item.store_name,
            address: item.full_address,
          });
        }
        // console.log(item.id)
      }
      style={styles.inner}>
      <Text style={{fontWeight: 'bold'}}>{item.store_name}</Text>
      <Text style={{fontSize: 12, color: '#707070'}}>{item.full_address}</Text>
      <View style={styles.row}>
        <Text style={{fontSize: 12, fontWeight: 'bold', color: '#707070'}}>
          {item.date}
        </Text>
        <Text style={{fontSize: 12, fontWeight: 'bold', color: '#E06437'}}>
          ${item.amount}
        </Text>
      </View>
    </TouchableOpacity>
  );
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      pastOrders({Auth: userData.api_token}).then(res => {
        setPas(res.order_list.data);
      });
    });
    return unsubscribe;
  }, [navigation]);
  return (
    <SafeAreaView style={[styles.main, {paddingBottom: tabBarHeight}]}>
      <View style={styles.top}>
        <View style={{width: 20}}></View>
        <Text style={{color: '#E06437', fontSize: 20}}>Past Orders</Text>
        {/* <TouchableOpacity style={styles.round}> */}
        <TouchableOpacity onPress={() => logoutuser(false)(dispatch)}>
          <Image
            source={require('../../../assets/logout.png')}
            style={{width: 30, height: 30}}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          bradEmpty()(dispatch);
          navigation.navigate('NewOrder');
        }}
        style={styles.button}>
        <GradientButton title="N E W  O R D E R" />
      </TouchableOpacity>
      <View style={{width: '100%', alignItems: 'center'}}>
        <View style={styles.line} />
      </View>
      <View style={{flex: 1, paddingTop: 20}}>
        <FlatList
          data={pas}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};
export default PastOrder;
