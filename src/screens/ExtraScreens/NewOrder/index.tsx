import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {bradCart} from '../../../redux/actions';
import {AlphabetList} from 'react-native-section-alphabet-list';
import styles from './styles';

import {storeList} from '../../../lib/api';
import Icon from 'react-native-vector-icons/AntDesign';
import GradienButton from '../../../components/GradientButton';
const NewOrder = ({navigation}) => {
  const {userData} = useSelector(({USER}) => USER);
  const dispatch = useDispatch();
  const [store, setStore] = useState({});
  const [save, setSave] = useState('');
  const [index, setIndex] = useState('');
  const [list, setList] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const searchText = e => {
    let filteredName = [];
    if (e) {
      filteredName = list.filter(item => {
        // console.log('item', item);
        return item.value.toLowerCase().includes(e.toLowerCase());
      });
      setFiltered(filteredName);
      // filteredName = [];
    }
  };
  useEffect(() => {
    // const unsubscribe = navigation.addListener('focus', () => {
    storeList({Auth: userData.api_token}).then(res => {
      setList(res.data);
      // setpopList(res.data);
    });
    // });
    // return unsubscribe;
  }, []);
  const renderItem = ({item, index}) => (
    <TouchableOpacity
      onPress={() => {
        // setB(...b,)
      }}
      style={styles.inner}>
      <View style={styles.rows}>
        <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
        {/* <Text style={{color: 'grey'}}>{item.type}</Text> */}
      </View>
      <View style={styles.rows}>
        <Text style={{fontSize: 12}}>{item.address}</Text>
        {/* <Text style={{color: 'orange', fontSize: 12, marginTop: 10}}> */}
        {/* {item.price} */}
        {/* </Text> */}
      </View>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.top}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            resizeMode="contain"
            source={require('../../../assets/back.png')}
            style={{height: 20, width: 20}}
          />
          {/* <Icon name="arrowleft" color="orange" size={20} /> */}
        </TouchableOpacity>
        <Text style={{color: '#E06437', fontSize: 20}}>New Order</Text>
        <TouchableOpacity>
          {/* <Icon name="arrowleft" color="white" /> */}
        </TouchableOpacity>
      </View>
      <View style={styles.extraText}>
        <Text style={{color: 'grey'}}>
          Select the store you want to create order for
        </Text>
        <TextInput
          value={index}
          onChangeText={text => {
            setIndex(text);
            searchText(text);
          }}
          placeholder={'Search Stores'}
          placeholderTextColor="grey"
          textAlign="center"
          style={{
            width: '100%',
            backgroundColor: '#E4E4E4',
            height: 40,
            borderRadius: 10,
            marginTop: 10,
          }}
        />
      </View>
      <View style={{paddingBottom: 150}}>
        {list.length ? (
          <FlatList
            data={index ? filtered : list}
            // index={['a', 'b', 'c', 'd', 'e', 'f']}
            // indexContainerStyle={{
            //   backgroundColor: 'white',
            //   borderRadius: 10,
            //   marginRight: 5,
            //   width: 15,
            //   // paddingHorizontal: 5,
            // }}
            // indexLetterStyle={{
            //   color: '#707070',
            //   // top: 10,
            //   fontSize: 15,
            // }}
            renderItem={({item, index}) => (
              <TouchableOpacity
                onPress={() => {
                  setStore(item);
                  setSave(item.value);
                }}
                style={[
                  styles.listItemContainer,
                  {
                    borderWidth: 1,
                    borderColor: store == item ? '#EA973E' : 'white',
                  },
                ]}>
                <Text
                  style={[
                    styles.listItemLabel,
                    {color: store == item ? '#EA973E' : 'black'},
                  ]}>
                  {item.value}
                </Text>
                <Text style={{color: '#707070'}}>{item.address}</Text>
              </TouchableOpacity>
            )}
            // renderCustomSectionHeader={section => (
            //   <View style={styles.sectionHeaderContainer}>
            //     <Text style={styles.sectionHeaderLabel}>{section.title}</Text>
            //   </View>
            // )}
          />
        ) : (
          <View
            style={{
              height: '100%',
              // backgroundColor: 'red',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <ActivityIndicator size="small" color="#E06437" />
          </View>
        )}

        {/* <AlphabetList
          data={dataa}
          // index={['a', 'b', 'c', 'd', 'e', 'f']}
          indexContainerStyle={{
            backgroundColor: 'white',
            borderRadius: 10,
            marginRight: 5,
            width: 15,
            // paddingHorizontal: 5,
          }}
          // renderCustomIndexLetter={ind => {
          //   return (
          //     <View>
          //       <Text style={{color: 'blue'}}></Text>
          //     </View>
          //   );
          // }}
          indexLetterStyle={{
            color: '#707070',
            // top: 10
            top: 20,
            fontWeight: 'normal',
            letterSpacing: 20,
            fontSize: 12,
          }}
          renderCustomItem={item => (
            <TouchableOpacity
              onPress={() => {
                // console.log(index);
                setIndex(item.value.substring(0, 1));
                setSave(item.value);
              }}
              style={[
                styles.listItemContainer,
                {
                  borderWidth: 1,
                  borderColor: save == item.value ? '#EA973E' : 'white',
                },
              ]}>
              <Text
                style={[
                  styles.listItemLabel,
                  {color: save == item.value ? '#EA973E' : 'black'},
                ]}>
                {item.value}
              </Text>
              <Text style={{color: '#707070'}}>{item.place}</Text>
            </TouchableOpacity>
          )}
          renderCustomSectionHeader={section => (
            <View style={styles.sectionHeaderContainer}>
              <Text style={styles.sectionHeaderLabel}>{section.title}</Text>
            </View>
          )}
        /> */}
      </View>
      {/* <ScrollView>
        <View style={styles.rest}>
          <View style={styles.topone}>
            <Text style={styles.text}>B</Text>
          </View>
          <View style={{width: '100%', marginTop: 20}}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>
          <View style={styles.topone}>
            <Text style={styles.text}>C</Text>
          </View>
          <View style={{width: '100%', marginTop: 20}}>
            <FlatList
              data={data1}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>
          <View style={styles.topone}>
            <Text style={styles.text}>D</Text>
          </View>
          <View style={{width: '100%', marginTop: 20}}>
            <FlatList
              data={data2}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </ScrollView> */}
      <TouchableOpacity
        onPress={() => save && navigation.navigate('NewOrderPlace', {store})}
        style={styles.bottom}>
        <GradienButton title={'S E L E C T  S T O R E'} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default NewOrder;
