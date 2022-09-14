import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import styles from './styles';
import {useSelector, useDispatch} from 'react-redux';

// import {useDispatch} from 'react-redux';
import {logoutuser} from '../../../redux/actions';
import {storeList} from '../../../lib/api';
import {widthPercentageToDP as WP} from 'react-native-responsive-screen';
import {AlphabetList} from 'react-native-section-alphabet-list';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';
import Icon1 from 'react-native-vector-icons/Fontisto';
import Icon from 'react-native-vector-icons/AntDesign';
const Stores = ({navigation}) => {
  const dispatch = useDispatch();
  const FlatlistRef = useRef(null);
  const [index, setIndex] = useState('');
  const [filtered, setFiltered] = useState([]);
  const [list, setList] = useState([]);
  const [poplist, setpopList] = useState([]);
  const tabBarHeight = useBottomTabBarHeight();
  const dataa = [
    {
      value: '3434',
      place: '37 west Nyacl st, Hempsted NY 11743',
      key: 'lCsdfsdfsdfUdTs2',
    },
    {
      value: 'ALillie-Mai Allen',
      place: '37 west Nyacl st, Hempsted NY 11743',
      key: 'lCUdTs2',
    },
    {
      value: 'BLillie-Mai Allen',
      place: '37 west Nyacl st, Hempsted NY 11743',
      key: 'lCUdsTs2',
    },
    {
      value: 'CLillie-Mai Allen',
      place: '37 west Nyacl st, Hempsted NY 11743',
      key: 'lCdsUTs2',
    },
    {
      value: 'DLillie-Mai Allen',
      place: '37 west Nyacl st, Hempsted NY 11743',
      key: 'ldCUdsTs2',
    },
    {
      value: 'ELillie-Mai Allen',
      place: '37 west Nyacl st, Hempsted NY 11743',
      key: 'ldsCUTs2',
    },
    {
      value: 'Lillie-Mai Allen',
      place: '37 west Nyacl st, Hempsted NY 11743',
      key: 'lCUTs2',
    },
    {
      value: 'Lillie-Mai Allen',
      place: '37 west Nyacl st, Hempsted NY 11743',
      key: 'lCUTs2',
    },
    {
      value: 'Emmanuel Goldstein',
      place: '37 west Nyacl st, Hempsted NY 11743',
      key: 'TXdsdL0c',
    },
    {
      value: 'Emmanuel Golsddstein',
      place: '37 west Nyacl st, Hempsted NY 11743',
      key: 'sdfsdfdsTXdL0c',
    },
    {
      value: 'Emmanuel Goldssdfagtein',
      place: '37 west Nyacl st, Hempsted NY 11743',
      key: 'dsd',
    },
    {
      value: 'Emmanuel Goldsteigan',
      place: '37 west Nyacl st, Hempsted NY 11743',
      key: 'TXdLsdf0c',
    },
    {
      value: 'Emmanuel Goldsteins',
      place: '37 west Nyacl st, Hempsted NY 11743',
      key: 'TXdL0cdf',
    },

    {
      value: 'Winston Smith',
      place: '37 west Nyacl st, Hempsted NY 11743',
      key: 'zqsiEw',
    },
    {
      value: 'William Blazkowicz',
      place: '37 west Nyacl st, Hempsted NY 11743',
      key: 'psg2PM',
    },
    {
      value: 'Gordon Comstock',
      place: '37 west Nyacl st, Hempsted NY 11743',
      key: '1K6I18',
    },
    {
      value: 'HLillie-Mai Allen',
      place: '37 west Nyacl st, Hempsted NY 11743',
      key: 'lCUTsdfs2',
    },
    {
      value: 'ILillie-Mai Allen',
      place: '37 west Nyacl st, Hempsted NY 11743',
      key: 'lCUsfsdfdTs2',
    },
    {
      value: 'KLillie-Mai Allen',
      place: '37 west Nyacl st, Hempsted NY 11743',
      key: 'lCUsddddTs2',
    },
    {
      value: 'NLillie-Mai Allen',
      place: '37 west Nyacl st, Hempsted NY 11743',
      key: 'lCUssdTs2',
    },
    {
      value: 'OLillie-Mai Allen',
      place: '37 west Nyacl st, Hempsted NY 11743',
      key: 'lCUssffsTs2',
    },
    {
      value: 'QLillie-Mai Allen',
      place: '37 west Nyacl st, Hempsted NY 11743',
      key: 'lCUsdfsdTs2',
    },
    {
      value: 'SLillie-Mai Allen',
      place: '37 west Nyacl st, Hempsted NY 11743',
      key: 'lCUdddddTs2',
    },
    {
      value: 'TLillie-Mai Allen',
      place: '37 west Nyacl st, Hempsted NY 11743',
      key: 'lCUsdsfsfTs2',
    },
    {
      value: 'ULillie-Mai Allen',
      place: '37 west Nyacl st, Hempsted NY 11743',
      key: 'lCUdfdTs2',
    },
    {
      value: 'VLillie-Mai Allen',
      place: '37 west Nyacl st, Hempsted NY 11743',
      key: 'lCUTs2',
    },
    {
      value: 'XLillie-Mai Allen',
      place: '37 west Nyacl st, Hempsted NY 11743',
      key: 'lCUdfsdTs2',
    },
    {
      value: 'YLillie-Mai Allen',
      place: '37 west Nyacl st, Hempsted NY 11743',
      key: 'lCUddddssgTs2',
    },
    {
      value: 'ZLillie-Mai Allen',
      place: '37 west Nyacl st, Hempsted NY 11743',
      key: 'lCUsdfsdfsdfTs2',
    },
    {
      value: 'Philip Ravelston',
      place: '37 west Nyacl st, Hempsted NY 11743',
      key: 'NVHSkA',
    },
    {
      value: 'Rosemary Waterlow',
      place: '37 west Nyacl st, Hempsted NY 11743',
      key: 'SaHqyG',
    },
    {
      value: 'Julia Comstock',
      place: '37 west Nyacl st, Hempsted NY 11743',
      key: 'iaT1Ex',
    },
    {
      value: 'Mihai Maldonado',
      place: '37 west Nyacl st, Hempsted NY 11743',
      key: 'OvMd5e',
    },
    {
      value: 'Murtaza Molina',
      place: '37 west Nyacl st, Hempsted NY 11743',
      key: '25zqAO',
    },
    {
      value: 'Peter Petigrew',
      place: '37 west Nyacl st, Hempsted NY 11743',
      key: '8cWuu3',
    },
  ];
  // const
  const da = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  const searchText = e => {
    let filteredName = [];
    if (e) {
      filteredName = list.filter(item => {
        return item.value.toLowerCase().includes(e.toLowerCase());
      });
      setFiltered(filteredName);
      // filteredName = [];
    }
  };
  // const l = alphabet => {
  //   const ItsIndex = list.findIndex(item => {
  //     const SmallLetter = item.value;
  //     return SmallLetter[0] === alphabet;
  //   });
  //   if (ItsIndex > -1) {
  //     const ItemHeight = WP(12) + 20;
  //     const listSize = poplist.reduce((Pre, cur, idx) => Pre + ItemHeight, 0);
  //     const MoreTo = 28 + WP(8) + listSize;
  //     // devLogger("MoreTo", MoreTo);
  //     FlatlistRef.current.scrollTo({
  //       x: 0,
  //       y: MoreTo + ItemHeight * ItsIndex,
  //       animated: true,
  //     });
  //   }
  // };
  const {userData} = useSelector(({USER}) => USER);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      storeList({Auth: userData.api_token}).then(res => {
        setList(res.data);
        setpopList(res.data);
      });
    });
    return unsubscribe;
  }, [navigation]);
  return (
    <SafeAreaView style={[styles.main, {paddingBottom: tabBarHeight}]}>
      <View style={styles.top}>
        <View style={{width: 20}}></View>
        <Text style={{color: '#E06437', fontSize: 20}}>Stores</Text>
        <TouchableOpacity onPress={() => logoutuser(false)(dispatch)}>
          <Image
            source={require('../../../assets/logout.png')}
            style={{width: 30, height: 30}}
          />
        </TouchableOpacity>
      </View>
      <TextInput
        value={index}
        onChangeText={text => {
          setIndex(text);
          searchText(text);
        }}
        placeholder={'Search Stores'}
        textAlign="center"
        style={{
          width: '90%',
          backgroundColor: '#E4E4E4',
          height: 40,
          marginHorizontal: 15,
          borderRadius: 10,
          marginTop: 10,
        }}
      />
      {/* <ScrollView ref={FlatlistRef} style={{flex: 1}}>
        {poplist.map((cItem, cIndex) => {
          return (
            <TouchableOpacity
              // onPress={() => {
              //   navigation.navigate("playerNews", {
              //     player: cItem.seoname,
              //   });
              // }}
              activeOpacity={0.7}
              key={'ChildItem-' + cIndex}
              style={{
                flexDirection: 'row',
                backgroundColor: 'red',
                alignItems: 'center',
                paddingVertical: 10,
                // borderBottomWidth: StyleSheet.hairlineWidth,
                // borderColor: color.softDisabled,
              }}>
              <Text
                style={{
                  fontSize: WP(5),
                  // fontFamily: 'OpenSans-SemiBold',
                }}>
                {cItem.value}
              </Text>
            </TouchableOpacity>
          );
        })}
        
        {list.map((item, index) => (
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: 100,
              height: 30,
              marginHorizontal: 20,
              //paddingBottom: 4,
              paddingVertical: 10,
              backgroundColor: 'blue',

              // borderBottomWidth: StyleSheet.hairlineWidth,
              // borderColor: color.softDisabled,
            }}>
            <Text style={{color: 'black'}}>{item.value}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView> */}
      {/* <View
        style={{
          position: 'absolute',
          backgroundColor: 'white',
          borderRadius: 10,
          paddingVertical: 10,
          marginRight: 10,
          width: 30,
          right: 0,
          // top: 50,
          marginTop: 130,

          // bottom: tabBarHeight + 50,
          zIndex: 10,
          height: '80%',
          justifyContent: 'space-around',
        }}
        //contentContainerStyle={{ alignItems: "center" }}
      >
        {da.map((item, ind) => (
          <TouchableOpacity
            key={'Players' + ind}
            style={{
              flex: 1,
              justifyContent: 'center',

              alignItems: 'center',
              marginVertical: 1,
            }}
            onPress={() => {
              letScrollToIndex(item);
            }}>
            <Text
              key={item + ind}
              style={{
                fontSize: 14,
                // fontFamily: 'OpenSans-Bold',
                // color: color.disabled,
              }}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View> */}
      <View style={{paddingBottom: 100}}>
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
            renderItem={({item}) => (
              <TouchableOpacity
                // onPress={() => setSave(item.value)}
                style={[
                  styles.listItemContainer,
                  {
                    borderWidth: 1,
                    borderColor: 'white',
                  },
                ]}>
                <Text style={styles.listItemLabel}>{item.value}</Text>
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
              height: '90%',
              // backgroundColor: 'red',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <ActivityIndicator size="small" color="#E06437" />
          </View>
        )}
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
    </SafeAreaView>
  );
};
export default Stores;
