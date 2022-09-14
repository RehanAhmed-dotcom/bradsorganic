import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Image,
  TextInput,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {logoutuser} from '../../../redux/actions';
import {productList} from '../../../lib/api';
import styles from './styles';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import Icon1 from 'react-native-vector-icons/Fontisto';
import Icon from 'react-native-vector-icons/AntDesign';
const Products = ({item, isInclude}) => {
  // console.log(pro, 'sdfk');
  // console.log('checking includes', pro.includes(item));
  return (
    <TouchableOpacity
      // onPress
      // onPress={onPress}
      style={[
        styles.inner,
        {borderWidth: 1, borderColor: isInclude ? '#E06437' : 'white'},
      ]}>
      <View style={styles.rows}>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.name}</Text>
        <Text style={{color: '#9E9E9E', fontSize: 16}}>{item.sku}</Text>
      </View>
      <View style={styles.rows}>
        <Text
          style={{
            fontSize: 12,
            color: '#707070',
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          {item.longDesc}
        </Text>
        <Text
          style={{
            color: '#E06437',
            fontWeight: 'bold',
            fontSize: 12,
            marginTop: 10,
          }}>
          ${item.unitPrice}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

// import { userdata } from '../../../redux/actions';
const Product = ({navigation}) => {
  const [index, setIndex] = useState('');
  const dispatch = useDispatch();
  const [viewFilter, setViewFilter] = useState([]);
  const tabBarHeight = useBottomTabBarHeight();
  const {userData} = useSelector(({USER}) => USER);
  const [products, setProducts] = useState([]);
  const [filterArr, setFilterArr] = useState([]);
  const [pro, setPro] = useState([]);
  const [extra, setExtra] = useState([]);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      productList({Auth: userData.api_token}).then(res => {
        // console.log('resp', res.all_product[0]);
        // setFilterArr(res.all_product);
        setProducts(res.data);
      });
    });
    return unsubscribe;
  }, [navigation]);
  // useEffect(() => {
  //   // const unsubscribe = navigation.addListener('focus', () => {
  //   productList({Auth: userData.api_token}).then(res => {
  //     // console.log('resp', res.all_product[0]);
  //     setFilterArr(res.all_product);
  //     setProducts(res.data);
  //   });
  //   // });
  //   // return unsubscribe;
  // }, [index]);
  const filter = e => {
    const filterArrs = products.filter(prodItem =>
      prodItem.products.find(i =>
        i.name.toLowerCase().includes(`${e.toLowerCase()}`),
      ),
    );
    setViewFilter(filterArrs);
  };

  const renderItem1 = ({item, index}) => (
    <>
      <View style={styles.topone}>
        <Text style={styles.text}>{item.category}</Text>
      </View>
      <FlatList
        // key={item.category + 'a'}
        data={item.products}
        // rightOpenValue={-100}
        // onMagicTap={() => console.log('work now')}
        // onSwipeValueChange
        // onResponderRelease
        // onRowOpen={() => console.log('work now')}
        // onEndReached
        // onScrollEndDrag
        // renderHiddenItem={item => (
        //   <View
        //     style={{
        //       // backgroundColor: 'red',
        //       marginTop: 10,
        //       flexDirection: 'row',
        //       justifyContent: 'flex-end',
        //       alignItems: 'center',
        //       // backgroundColor: 'red',
        //       height: '100%',
        //       paddingRight: 10,
        //       bottom: 10,
        //       marginHorizontal: 15,
        //     }}>
        //     <TouchableOpacity
        //       onPress={() => number > 12 && setNumber(number - 12)}>
        //       <Image
        //         source={require('../../../assets/negative.png')}
        //         style={{width: 15, height: 3}}
        //       />
        //     </TouchableOpacity>
        //     <View
        //       style={{
        //         backgroundColor: '#ccc',
        //         alignItems: 'center',
        //         justifyContent: 'center',
        //         height: 30,
        //         marginLeft: 10,
        //         marginRight: 10,
        //         borderRadius: 10,
        //         width: 30,
        //       }}>
        //       <Text>{number}</Text>
        //     </View>
        //     <TouchableOpacity onPress={() => setPro([...pro, {}])}>
        //       <Image
        //         source={require('../../../assets/plus.png')}
        //         style={{width: 15, height: 15}}
        //       />
        //     </TouchableOpacity>
        //   </View>
        // )}
        renderItem={({item}) => (
          <Products
            pro={pro}
            item={item}
            // onPress={() => {
            //   // pro[index] != item && setPro([...pro, item]);
            //   // findProdAndCategory(item);
            //   selectProducts({
            //     category: item.category,
            //     product: item,
            //   })(dispatch);
            //   bradCart([item])(dispatch);
            // }}
            // isInclude={Cart.includes(item)}
          />
        )}
        keyExtractor={item => item.id}
      />
    </>
  );
  return (
    <SafeAreaView style={[styles.main, {paddingBottom: tabBarHeight}]}>
      <View style={styles.top}>
        <View style={{width: 20}}></View>
        <Text style={{color: '#E06437', fontSize: 20}}>Products</Text>
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
          // searchText(text);
          filter(text);
        }}
        placeholder={'Search Products'}
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
      {products.length ? (
        index ? (
          <FlatList
            data={viewFilter}
            renderItem={renderItem1}
            keyExtractor={item => item.id}
          />
        ) : (
          <FlatList
            data={products}
            renderItem={renderItem1}
            keyExtractor={item => item.id}
          />
        )
      ) : (
        <View
          style={{
            height: '80%',
            // backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ActivityIndicator size="small" color="#E06437" />
        </View>
      )}

      {/* <ScrollView>
        <View style={styles.rest}>
          <View style={styles.topone}>
            <Text style={styles.text}>Garden Of Eatin</Text>
          </View>
          <View style={{width: '100%', marginTop: 20}}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>
          <View style={styles.topone}>
            <Text style={styles.text}>Brad's Organic Pretzels</Text>
          </View>
          <View style={{width: '100%', marginTop: 20}}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>
          <View style={styles.topone}>
            <Text style={styles.text}>Brad's Organic</Text>
          </View>
          <View style={{width: '100%', marginTop: 20}}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </ScrollView> */}
    </SafeAreaView>
  );
};
export default Product;
