import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Alert,
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  Modal,
  SafeAreaView,
  Keyboard,
  TextInput,
  ScrollView,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {SwipeListView} from 'react-native-swipe-list-view';
import styles from './styles';
import {
  bradDel,
  delFromCat,
  qtyChange,
  cart,
  addQuantity,
  subQuantityAll,
  notes,
  addQuantityAll,
  subQuantity,
} from '../../../redux/actions';
import {bradCart} from '../../../redux/actions';
import {placeOrder} from '../../../lib/api';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Entypo';
import GradienButton from '../../../components/GradientButton';
// import {} from 'react-native-gesture-handler';
import {useEffect} from 'react';
import {widthPercentageToDP} from 'react-native-responsive-screen';
const Product = ({item, onPress, pro, isInclude}) => {
  const dispatch = useDispatch();
  // console.log(pro, 'sdfk');
  // console.log('checking includes', pro.includes(item));
  return (
    <>
      <TouchableOpacity
        // onPress
        onPress={onPress}
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
            subQuantity({
              category: item.category,
              product: item,
            })(dispatch);

            subQuantityAll({
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
            itemQty={item.multQty}
            id={item.id}
            onChangeQty={(id, text) =>
              qtyChange({
                category: item.category,
                product: item,
                quantity: text,
              })(dispatch)
            }
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            addQuantity({
              category: item.category,
              product: item,
            })(dispatch);
            addQuantityAll({
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
      value={quantity.toString()}
      onChangeText={text => {
        setQuantity(text);
        // index == 0 ? setFirst(text) : setSecond(text);
        onChangeQty(id, text);
      }}
    />
  );
};

const PlaceOrder = ({navigation, route}) => {
  const {store, pro} = route.params;
  const dispatch = useDispatch();
  const {Cart, no, allProds, selectedProducts} = useSelector(
    ({BCART}) => BCART,
  );
  const {userData} = useSelector(({USER}) => USER);
  // const [first, setFirst] = useState('12');
  // const [awyn, setAwyn] = useState(0);
  const [keyHeight, setKeyHeight] = useState(0);
  const [product, setProduct] = useState([]);
  // const [ind, setInd] = useState(-1);
  // const [second, setSecond] = useState('12');
  // const [notes, setNotes] = useState('');
  const [hide, setHide] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  useEffect(() => {
    setProduct(selectedProducts);
  }, [Cart]);
  useEffect(() => {
    const showSubscription = Keyboard.addListener(
      'keyboardDidShow',
      (e: KeyboardEvent) => {
        setKeyboardStatus(true);
        setKeyHeight(e.endCoordinates.height);
      },
    );
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus(false);
      setKeyHeight(0);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);
  // console.log('keyboard', keyboardStatus);

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
              resizeMode: 'contain',
              marginTop: 50,
              width: 30,
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
                delFromCat({
                  category: item.category,
                  product: item,
                })(dispatch);
                bradDel(item.id)(dispatch);
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
          <Product
            pro={pro}
            item={item}
            onPress={() => {
              // pro[index] != item && setPro([...pro, item]);
              // findProdAndCategory(item);
              // selectProducts({
              //   category: item.category,
              //   product: item,
              // })(dispatch);
              // bradCart([item])(dispatch);
            }}
            isInclude={Cart.includes(item.name)}
          />
        )}
        keyExtractor={item => item.id}
      />
    </>
  );
  console.log('all products length', allProds.length);
  console.log('keyboard', keyboardStatus);
  return (
    <SafeAreaView style={styles.main}>
      {/* <ScrollView> */}
      {/* <KeyboardAvoidingView behavior="height"> */}
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
        <View style={{width: '100%', marginTop: 10}}>
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
              // bradCart(product)(dispatch);
              navigation.navigate('SelectQuantity');
            }}
            style={styles.topButton}>
            <Text style={{color: '#E06437'}}>Select More Products</Text>
          </TouchableOpacity>
          <View style={{height: 20}} />
        </View>
      </View>
      {/* {keyboardStatus ? ( */}
      {/* <TextInput
          multiline
          numberOfLines={5}
          value={notes}
          onChangeText={text => setNotes(text)}
          placeholder={'Do you have any special Notes?'}
          style={{
            backgroundColor: 'white',
            height: 150,
            borderRadius: 10,
            width: widthPercentageToDP(90),
            color: 'black',
            paddingHorizontal: 10,
            paddingTop: 10,
            marginTop: 10,
            marginBottom: 10,
          }}
        /> */}
      {/* ) : ( */}
      <ScrollView contentContainerStyle={{marginTop: keyboardStatus ? 50 : 0}}>
        {/* <KeyboardAvoidingView
                behavior="padding"
                // contentContainerStyle={{flex: 1}}
              > */}
        <View style={styles.rest}>
          {/* <View style={styles.topone}>
                  <Text style={styles.text}>Garden Of Eatin</Text>
                </View> */}
          <View style={{marginHorizontal: 15}}>
            {!keyboardStatus && !hide ? (
              <FlatList
                data={selectedProducts}
                renderItem={renderItem1}
                keyExtractor={item => item.category + 'a'}
              />
            ) : keyboardStatus && !hide ? (
              <FlatList
                data={selectedProducts}
                renderItem={renderItem1}
                keyExtractor={item => item.category + 'a'}
              />
            ) : null}

            {Cart.length ? (
              <TextInput
                multiline
                numberOfLines={5}
                value={no}
                onFocus={() => setHide(true)}
                autoFocus={false}
                onPressOut={() => setHide(false)}
                onBlur={() => setHide(false)}
                onChangeText={text => {
                  notes(text)(dispatch);
                }}
                placeholder={'Do you have any special Notes?'}
                style={{
                  backgroundColor: 'white',
                  height: 150,
                  borderRadius: 10,
                  width: widthPercentageToDP(90),
                  color: 'black',
                  paddingHorizontal: 10,
                  paddingTop: 10,
                  marginTop: 10,
                  marginBottom: 10,
                }}
              />
            ) : (
              <View></View>
            )}

            {keyboardStatus && !hide && <View style={{height: 200}} />}
          </View>
          {/* </KeyboardAvoidingView> */}
        </View>
      </ScrollView>
      {/* )} */}

      {/* </KeyboardAvoidingView> */}
      {/* </ScrollView> */}

      {/* </ScrollView> */}
      <TouchableOpacity
        disabled={Cart.length ? false : true}
        onPress={() => {
          setModalVisible(true);
          let newArr = [];
          selectedProducts.forEach(element => {
            element.products.forEach(prod => {
              newArr.push({
                product_id: prod.id,
                quantity: prod.multQty,
              });
            });
          });
          console.log('newArr', newArr.length);
          const data1 = {
            store_id: store.id,
            note: no,
            cart: newArr,
          };

          placeOrder({Auth: userData.api_token}, data1).then(res => {
            console.log('res', res);
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
        <GradienButton title={'P L A C E  O R D E R'} />
      </TouchableOpacity>
      {myModal()}
      {myModal1()}
    </SafeAreaView>
  );
};
export default PlaceOrder;
