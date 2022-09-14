import React, {useEffect, useState} from 'react';
import {
  View,
  Alert,
  Text,
  Modal,
  ActivityIndicator,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import SplashScreen from 'react-native-splash-screen';
import Input from '../../../components/input';
import {login} from '../../../lib/api';
import {useDispatch} from 'react-redux';
// import Icon from 'react-native-vector-icons/AntDesign';
import GradientButton from '../../../components/GradientButton';
import {logged} from '../../../redux/actions';
const Login = ({navigation}) => {
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

  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const dispatch = useDispatch();
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  // console.log(username);
  // console.log(password);
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.first}>
        <Text style={styles.text}>Brads Organic</Text>
        {/* <Icon name="arrowleft" /> */}
      </View>
      <View style={styles.second}>
        <View style={styles.inputView}>
          <Input
            placeholder={'Username'}
            value={username}
            setValue={setUserName}
            secure={false}
          />
        </View>
        <View style={styles.inputView1}>
          <Input
            secure={true}
            placeholder={'Password'}
            value={password}
            setValue={setPassword}
          />
        </View>
        <TouchableOpacity style={styles.inputView1}>
          <Text style={{color: '#E06437', fontWeight: 'bold'}}>
            Forgot Password
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (username && password) {
              setModalVisible(true);
              login({username, password}).then(res => {
                // console.log(res.status);
                if (res) {
                  if (res.status == 'success') {
                    setModalVisible(false);
                    logged(res.userdata)(dispatch);
                  }
                } else {
                  setModalVisible(false);
                  Alert.alert('Please enter valid username and password.');
                }
              });
            } else {
              Alert.alert('Please enter valid username and password.');
            }
          }}
          style={styles.inputView1}>
          <GradientButton title="L O G I N" />
        </TouchableOpacity>
      </View>
      {myModal1()}
    </SafeAreaView>
  );
};
export default Login;
