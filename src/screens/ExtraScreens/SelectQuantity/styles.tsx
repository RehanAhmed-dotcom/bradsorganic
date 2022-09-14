import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 15,
  },
  rest: {
    flex: 1,
    // paddingHorizontal: 15,
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  round: {
    width: 20,
    height: 20,
    borderRadius: 15,
    backgroundColor: 'orange',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  text: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white',
  },
  topone: {
    // width: wp(90),
    // width: '90%',
    borderRadius: 5,
    marginTop: 20,

    marginBottom: 10,
    // width: '90%',
    height: 30,
    backgroundColor: '#EA973E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginTop: 20,
  },
  button: {
    alignItems: 'center',
    marginTop: 20,
  },
  line: {
    marginTop: 20,
    borderBottomColor: 'orange',
    borderBottomWidth: 1,
    width: '70%',
  },
  inner: {
    backgroundColor: 'white',
    padding: 15,
    elevation: 3,
    marginBottom: 10,
    // marginHorizontal: 15,
    // marginHorizontal: 5,
    borderRadius: 10,
    // marginHorizontal: 15,
    // width: '90%',
  },
  bottom: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  buttons: {
    height: 40,
    width: '90%',
    backgroundColor: 'grey',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rows: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',
    justifyContent: 'space-between',
  },
});
export default styles;
