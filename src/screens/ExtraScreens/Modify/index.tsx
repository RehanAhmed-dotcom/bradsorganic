import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  TextInput,
  ActivityIndicator,
  ScrollView,
  Image,
  Modal,
  Alert,
} from 'react-native';
import {
  updDel,
  delFromCatMod,
  qtyChangeMod,
  cart,
  addQuantityMod,
  detail,
  subQuantityMod,
} from '../../../redux/actions';
import styles from './styles';
import {details, updateOrder} from '../../../lib/api';
import {useSelector, useDispatch} from 'react-redux';
import {SwipeListView} from 'react-native-swipe-list-view';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Entypo';
import GradienButton from '../../../components/GradientButton';
const Product = ({item, pro, isInclude}) => {
  const dispatch = useDispatch();
  return (
    <>
      <TouchableOpacity
        onPress={() => console.log(item)}
        // onPress={onPress}
        style={[
          styles.inner1,
          {borderWidth: 0, borderColor: isInclude ? '#E06437' : 'white'},
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
      <View style={styles.quantity}>
        <TouchableOpacity
          onPress={() => {
            subQuantityMod({
              category: item.category,
              product: item,
            })(dispatch);
          }}
          style={styles.plus}>
          <Image
            source={require('../../../assets/minuus.png')}
            style={{height: 20, width: 20}}
          />
          {/* <Icon name="minus" size={20} color="orange" /> */}
        </TouchableOpacity>
        <View style={styles.middle}>
          {/* <Text>{index == 0 ? first : second}</Text> */}
          {/* <TextInput
        keyboardType="number-pad"
        style={{width: '100%', height: 40}}
        textAlign="center"
        value={item.multQty.toString()}
        onChangeText={text => {
          // index == 0 ? setFirst(text) : setSecond(text);
          onChangeQty(item.id, text);
        }}
      /> */}
          <Input
            // product={product.}
            itemQty={item.quantity ? item.quantity : item.multQty}
            id={item.id}
            onChangeQty={(id, text) =>
              qtyChangeMod({
                category: item.category,
                product: item,
                quantity: text,
              })(dispatch)
            }
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            addQuantityMod({
              category: item.category,
              product: item,
            })(dispatch);

            // const firstValue = parseInt(first) + 12;
            // const secondValue = parseInt(second) + 12;
            // index == 0
            //   ? setFirst(firstValue.toString())
            //   : setSecond(secondValue.toString());
          }}
          style={styles.plus}>
          <Image
            source={require('../../../assets/plus.png')}
            style={{height: 15, width: 15}}
          />
          {/* <Icon name="plus" size={20} color="orange" /> */}
        </TouchableOpacity>
      </View>
    </>
  );
};
const Input = ({itemQty, id, onChangeQty}) => {
  const [quantity, setQuantity] = useState(itemQty);
  // item.multQty.toString()
  useEffect(() => {
    setQuantity(itemQty);
  }, [itemQty]);
  return (
    <TextInput
      keyboardType="number-pad"
      style={{width: '100%', height: 40}}
      textAlign="center"
      value={quantity ? quantity.toString() : '12'}
      onChangeText={text => {
        setQuantity(text);
        // index == 0 ? setFirst(text) : setSecond(text);
        onChangeQty(id, text);
      }}
    />
  );
};

const Modify = ({navigation, route}) => {
  const dispatch = useDispatch();
  const [pro, setPro] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const {userData} = useSelector(({USER}) => USER);
  const {forDetails, updatedProducts, Cart} = useSelector(({BCART}) => BCART);
  const [showModal, setShowModal] = useState(false);
  const myModal = () => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showModal}
      onRequestClose={() => {
        setShowModal(false);
      }}>
      <View style={styles.modalView}>
        <View
          style={{
            width: '80%',
            backgroundColor: 'white',
            alignItems: 'center',
            borderRadius: 15,
          }}>
          {/* <Icon1
            name="check"
            size={50}
            style={{marginTop: 50}}
            color="#EA973E"
          /> */}
          <Image
            source={require('../../../assets/check.png')}
            style={{
              height: 30,
              width: 30,
              resizeMode: 'contain',
              marginTop: 50,
            }}
          />
          <Text
            style={{
              marginTop: 20,
              color: '#E06437',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Order Placed
          </Text>
          <Text style={{color: '#9E9E9E', marginTop: 10}}>
            You have just placed an order.
          </Text>
          <Text style={{color: '#9E9E9E', marginBottom: 25}}>
            You can view it on your home page{' '}
          </Text>
          <TouchableOpacity
            onPress={() => {
              setShowModal(false);
              navigation.navigate('TabNavigator');
            }}
            style={{width: '100%', alignItems: 'center'}}>
            <GradienButton title={'G R E A T !'} />
          </TouchableOpacity>
          <View style={{height: 25}} />
        </View>
      </View>
    </Modal>
  );
  const myModal1 = () => (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#00000088',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            height: 50,
            width: 50,
            borderRadius: 25,
            alignItems: 'center',
            backgroundColor: 'white',
            justifyContent: 'center',
          }}>
          <ActivityIndicator size="small" color="#E06437" />
        </View>
      </View>
    </Modal>
  );

  const renderItem1 = ({item, index}) => (
    <>
      <View style={styles.topone}>
        <Text style={styles.text}>{item.category}</Text>
      </View>
      <SwipeListView
        data={item.products}
        rightOpenValue={-75}
        //   leftOpenValue={75}
        renderHiddenItem={({item}) => (
          <View
            style={{
              // backgroundColor: 'red',
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'flex-end',
              paddingRight: 10,
              marginHorizontal: 15,
            }}>
            <TouchableOpacity
              onPress={() => {
                delFromCatMod({
                  category: item.category,
                  product: item,
                })(dispatch);
                updDel(item.id)(dispatch);
              }}
              style={{
                backgroundColor: 'red',
                height: 50,
                width: 50,
                alignItems: 'center',
                borderRadius: 10,
                justifyContent: 'center',
              }}>
              <Image
                source={require('../../../assets/trash.png')}
                style={{height: 20, width: 20}}
              />
            </TouchableOpacity>
          </View>
        )}
        renderItem={({item}) => (
          <Product pro={pro} item={item} isInclude={Cart.includes(item)} />
        )}
        keyExtractor={item => item.id}
      />
    </>
  );
  const {id, store_name, address} = route.params;
  useEffect(() => {
    details({Auth: userData.api_token, id})
      .then(res => {
        // console.log('respoeu', res.order_detail);
        detail(res.order_detail)(dispatch);
        // setPro(res.order_detail);
        // setProduct(res.order_detail);
      })
      .catch(e => {
        console.log('err', e);
      });
  }, []);

  console.log('state local', JSON.stringify(forDetails));
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.top}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          {/* <Icon name="arrowleft" color="orange" size={20} /> */}
          <Image
            source={require('../../../assets/back.png')}
            style={{height: 20, width: 20, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
        <Text style={{color: '#E06437', fontSize: 20}}>Past Order</Text>
        <TouchableOpacity>
          {/* <Icon name="arrowleft" color="white" /> */}
        </TouchableOpacity>
      </View>

      {/* <ScrollView> */}
      <View style={styles.rest}>
        <View style={{width: '100%', marginTop: 10}}>
          <View style={styles.inner}>
            <View style={styles.rows}>
              <Text style={{fontWeight: 'bold'}}>{store_name}</Text>
              {/* <Text style={{color: 'grey'}}>{item.type}</Text> */}
            </View>
            <View style={styles.rows}>
              <Text style={{fontSize: 12, color: '#707070'}}>{address}</Text>
              {/* <Text style={{color: 'orange', fontSize: 12, marginTop: 10}}> */}
              {/* {item.price} */}
              {/* </Text> */}
            </View>
          </View>
          {/* <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          /> */}
          <TouchableOpacity
            onPress={() => navigation.navigate('UpdateQuantity')}
            style={styles.topButton}>
            <Text style={{color: '#E06437'}}>Select Products</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View style={styles.rest}>
          {/* <View style={styles.topone}>
            <Text style={styles.text}>Garden Of Eatin</Text>
          </View> */}
          <View style={{width: '100%', marginTop: 10}}>
            <FlatList
              data={forDetails}
              renderItem={renderItem1}
              keyExtractor={item => item.id}
            />
          </View>
          {/* <View style={{width: '100%', marginTop: 10}}>
            <FlatList
              data={updatedProducts}
              renderItem={renderItem1}
              keyExtractor={item => item.id}
            />
          </View> */}
        </View>
      </ScrollView>
      {/* </ScrollView> */}
      <TouchableOpacity
        disabled={forDetails.length ? false : true}
        onPress={() => {
          setModalVisible(true);
          const newArr = [];
          forDetails.forEach(element => {
            element.products.forEach(prod => {
              newArr.push({
                product_id: prod.id,
                quantity: prod.quantity ? prod.quantity : prod.multQty,
              });
            });
          });
          console.log('newArr', newArr);
          const data1 = {
            order_id: id,
            cart: newArr,
          };
          updateOrder({Auth: userData.api_token}, data1).then(res => {
            console.log('res', data1);
            if (res) {
              if (res.status == 'success') {
                setModalVisible(false);
                setShowModal(true);
              }
            } else {
              setModalVisible(false);
              Alert.alert('Something went wrong');
            }
          });
        }}
        style={styles.bottom}>
        <GradienButton title={'M O D I F Y  &  P L A C E  O R D E R'} />
      </TouchableOpacity>
      {myModal()}
      {myModal1()}
    </SafeAreaView>
  );
};
export default Modify;
