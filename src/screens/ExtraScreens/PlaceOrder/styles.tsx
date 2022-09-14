import {StyleSheet} from 'react-native';

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
  extraText: {
    marginHorizontal: 15,
    marginTop: 10,
  },
  rest: {
    // flex: 1,
    // paddingHorizontal: 15,
    // backgroundColor: 'red',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  bottom: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
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
    width: '100%',
    borderRadius: 5,
    marginTop: 20,
    // width:"90%",
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
  middle: {
    backgroundColor: '#ccc',
    height: 30,
    width: '50%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    flex: 1,
    backgroundColor: '#00000088',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plus: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    elevation: 3,
    borderRadius: 10,
    height: 30,
  },
  quantity: {
    // backgroundColor: 'red',
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    marginHorizontal: 15,
    // marginTop: 10,
    marginBottom: 5,
  },
  inner: {
    backgroundColor: 'white',
    padding: 15,
    elevation: 3,
    marginTop: 13,
    marginBottom: 10,

    // marginHorizontal: 15,
    // marginHorizontal: 5,
    borderRadius: 10,
    marginHorizontal: 15,
    // width: '90%',
  },
  inner1: {
    backgroundColor: 'white',
    padding: 15,
    elevation: 3,
    marginTop: 13,
    marginBottom: 10,
    // width: '100%',

    // marginHorizontal: 15,
    // marginHorizontal: 5,
    borderRadius: 10,
    // marginHorizontal: 15,
    // width: '90%',
  },
  rows: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',
    justifyContent: 'space-between',
  },
  buttons: {
    height: 40,
    width: '90%',
    backgroundColor: 'grey',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topButton: {
    marginTop: 20,
    backgroundColor: 'white',
    elevation: 4,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    marginHorizontal: 15,
    borderRadius: 10,
  },
});
export default styles;
