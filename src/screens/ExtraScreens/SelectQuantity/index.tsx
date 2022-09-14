import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  VirtualizedList,
  TextInput,
  ActivityIndicator,
  Image,
  ScrollView,
} from 'react-native';

import {bradCart, selectProducts, allProducts} from '../../../redux/actions';
import styles from './styles';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {
  setProd,
  subQuantity,
  addQuantity,
  addQuantityAll,
  subQuantityAll,
} from '../../../redux/actions';
import {productList} from '../../../lib/api';
import {SwipeListView} from 'react-native-swipe-list-view';
import SwipeableFlatList from 'react-native-swipeable-list';
import Icon from 'react-native-vector-icons/AntDesign';
import GradientButton from '../../../components/GradientButton';
import {useSelector, useDispatch} from 'react-redux';

const Product = ({item, onPress, isInclude}) => {
  return (
    <TouchableOpacity
      // onPress
      onPress={onPress}
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

const SelectQuantity = ({navigation, route}) => {
  const {store} = route.params;
  const dispatch = useDispatch();
  const [index, setIndex] = useState('');
  const [viewFilter, setViewFilter] = useState([]);
  const [products, setProducts] = useState([]);
  const {userData} = useSelector(({USER}) => USER);
  const {Cart, selectedProducts, allProds, totalProducts} = useSelector(
    ({BCART}) => BCART,
  );
  const getItem = (data, index) => ({
    id: Math.random().toString(12).substring(0),
    title: `Item ${index + 1}`,
  });
  const getItemCount = data => 50;
  const checkEveryItem = name => {
    for (let i = 0; i < Cart.length; i++) {
      if (Cart[i].name == name) {
        return true;
      }
    }
  };
  const renderItem1 = ({item, index}) => (
    <>
      <View style={styles.topone}>
        <Text style={styles.text}>{item.category}</Text>
      </View>
      <SwipeableFlatList
        keyExtractor={item => item.id.toString()}
        data={item.products}
        // rightOpenValue={-120}
        maxSwipeDistance={140}
        // onS
        // onMagicTap={() => )}
        // onSwipeValueChange={() => }
        // onResponderRelease
        // onRowOpen={() =>}
        // onEndReached
        // onScrollEndDrag
        renderQuickActions={({item}) => (
          <View
            style={{
              // backgroundColor: 'red',
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
              // backgroundColor: 'red',
              height: '100%',
              paddingRight: 10,
              bottom: 10,
              marginHorizontal: 15,
            }}>
            <TouchableOpacity
              style={{
                // backgroundColor: 'red',
                width: 25,
                height: 25,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => {
                checkEveryItem(item.name) &&
                  subQuantity({
                    category: item.category,
                    product: item,
                  })(dispatch);

                subQuantityAll({
                  category: item.category,
                  product: item,
                })(dispatch);
              }}>
              <Image
                source={require('../../../assets/negative.png')}
                style={{width: 15, height: 3}}
              />
            </TouchableOpacity>
            <View
              style={{
                backgroundColor: '#ccc',
                alignItems: 'center',
                justifyContent: 'center',
                height: 30,
                marginLeft: 10,
                marginRight: 10,
                borderRadius: 10,
                width: 30,
              }}>
              <Text>{item.multQty}</Text>
            </View>
            <TouchableOpacity
              style={{
                // backgroundColor: 'red',
                width: 25,
                height: 25,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => {
                checkEveryItem(item.name) &&
                  addQuantity({
                    category: item.category,
                    product: item,
                  })(dispatch);
                addQuantityAll({
                  category: item.category,
                  product: item,
                })(dispatch);
              }}>
              <Image
                source={require('../../../assets/plus.png')}
                style={{width: 15, height: 15}}
              />
            </TouchableOpacity>
          </View>
        )}
        renderItem={({item}) => (
          <Product
            item={item}
            onPress={() => {
              // pro[index] != item && setPro([...pro, item]);
              // findProdAndCategory(item);
              selectProducts({
                category: item.category,
                product: item,
              })(dispatch);
              bradCart([item])(dispatch);
            }}
            // isInclude={Cart.includes(item)}
            isInclude={checkEveryItem(item.name)}
          />
        )}
        keyExtractor={item => item.id}
      />
    </>
  );
  const filter = e => {
    const filterArrs = products.filter(prodItem =>
      prodItem.products.find(i =>
        i.name.toLowerCase().includes(`${e.toLowerCase()}`),
      ),
    );
    setViewFilter(filterArrs);
  };
  useEffect(() => {
    // const unsubscribe = navigation.addListener('focus', () => {
    productList({Auth: userData.api_token}).then(res => {
      setProducts(res.data);
      allProducts(res.data)(dispatch);
      // setFilterArr(res.all_product);
      // setProd(res.data)(dispatch);
    });
    // });
    // return unsubscribe;
  }, []);
  console.log(store);
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView nestedScrollEnabled={true}>
        <View style={styles.rest}>
          <TextInput
            value={index}
            onChangeText={text => {
              setIndex(text);
              // searchText(text);
              filter(text);
            }}
            placeholder={'Search Products'}
            placeholderTextColor="grey"
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
            <View style={{marginHorizontal: 0}}>
              {index ? (
                <View
                  style={{
                    // backgroundColor: 'red',
                    marginTop: 10,
                    width: widthPercentageToDP('100%'),
                    paddingHorizontal: 15,
                  }}>
                  <FlatList
                    data={viewFilter}
                    renderItem={renderItem1}
                    keyExtractor={item => item.category + 'a'}
                  />
                </View>
              ) : (
                <View style={{marginHorizontal: 15}}>
                  <FlatList
                    data={allProds}
                    // nestedScrollEnabled={true}
                    // initialNumToRender={4}
                    // getItemCount={getItemCount}
                    // getItem={getItem}
                    // listKey={item=>item.}
                    renderItem={renderItem1}
                    keyExtractor={item => item.category + 'a'}
                  />
                </View>
              )}
            </View>
          ) : (
            // products.map((item, index) => (
            //   <>
            //     <View style={styles.topone}>
            //       <Text style={styles.text}>{item.category}</Text>
            //     </View>
            //     <FlatList
            //       // key={item.category + 'a'}
            //       data={item.products}
            //       // rightOpenValue={-100}
            //       // onMagicTap={() => }
            //       // onSwipeValueChange
            //       // onResponderRelease
            //       // onRowOpen={() => }
            //       // onEndReached
            //       // onScrollEndDrag
            //       // renderHiddenItem={item => (
            //       //   <View
            //       //     style={{
            //       //       // backgroundColor: 'red',
            //       //       marginTop: 10,
            //       //       flexDirection: 'row',
            //       //       justifyContent: 'flex-end',
            //       //       alignItems: 'center',
            //       //       // backgroundColor: 'red',
            //       //       height: '100%',
            //       //       paddingRight: 10,
            //       //       bottom: 10,
            //       //       marginHorizontal: 15,
            //       //     }}>
            //       //     <TouchableOpacity
            //       //       onPress={() => number > 12 && setNumber(number - 12)}>
            //       //       <Image
            //       //         source={require('../../../assets/negative.png')}
            //       //         style={{width: 15, height: 3}}
            //       //       />
            //       //     </TouchableOpacity>
            //       //     <View
            //       //       style={{
            //       //         backgroundColor: '#ccc',
            //       //         alignItems: 'center',
            //       //         justifyContent: 'center',
            //       //         height: 30,
            //       //         marginLeft: 10,
            //       //         marginRight: 10,
            //       //         borderRadius: 10,
            //       //         width: 30,
            //       //       }}>
            //       //       <Text>{number}</Text>
            //       //     </View>
            //       //     <TouchableOpacity onPress={() => setPro([...pro, {}])}>
            //       //       <Image
            //       //         source={require('../../../assets/plus.png')}
            //       //         style={{width: 15, height: 15}}
            //       //       />
            //       //     </TouchableOpacity>
            //       //   </View>
            //       // )}
            //       renderItem={({item}) => (
            //         <Product
            //           pro={pro}
            //           item={item}
            //           onPress={() => {
            //             pro[index] != item && setPro([...pro, item]);
            //             findProdAndCategory(item);
            //           }}
            //           isInclude={pro.includes(item)}
            //         />
            //       )}
            //       keyExtractor={item => item.id}
            //     />
            //   </>
            // ))
            <View
              style={{
                height: hp(90),
                // backgroundColor: 'red',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <ActivityIndicator size="small" color="#E06437" />
            </View>
          )}
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() =>
          selectedProducts.length && navigation.navigate('PlaceOrder', {store})
        }
        style={styles.bottom}>
        <GradientButton title={'A D D  Q U A N T I T Y'} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default SelectQuantity;
