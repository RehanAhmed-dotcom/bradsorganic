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
  round: {
    width: 20,
    height: 20,
    borderRadius: 15,
    backgroundColor: 'orange',
    alignItems: 'flex-end',
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
    borderBottomColor: '#EA973E',
    borderBottomWidth: 1,
    width: '70%',
  },
  inner: {
    backgroundColor: 'white',
    padding: 15,
    // elevation: 3,
    marginTop: 1,
    marginBottom: 10,
    marginHorizontal: 15,
    borderRadius: 10,
  },
});
export default styles;
