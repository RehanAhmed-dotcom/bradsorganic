import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    // marginBottom: 100,
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
    // backgroundColor: 'red',
  },
  rest: {
    flex: 1,
    // paddingHorizontal: 15,
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  bottom: {
    height: 100,
    position: 'absolute',
    bottom: 0,
    width: '100%',
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
    fontSize: 12,
    color: 'white',
  },
  container: {
    flex: 1,
    // backgroundColor: colors.background.light,
  },

  listItemContainer: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 25,
    borderRadius: 10,
    // height: sizes.itemHeight,
    // paddingHorizontal: sizes.spacing.regular,
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    // borderTopColor: colors.seperatorLine,
    // borderTopWidth: 1,
  },

  listItemLabel: {
    // color: colors.text.dark,
    fontSize: 16,
    fontWeight: 'bold',
  },

  sectionHeaderContainer: {
    // height: sizes.headerHeight,
    // backgroundColor: colors.background.dark,
    justifyContent: 'center',
    backgroundColor: '#EA973E',
    marginHorizontal: 25,
    borderRadius: 5,
    height: 25,
    marginTop: 20,
    alignItems: 'center',
    // paddingHorizontal: sizes.spacing.regular,
  },

  sectionHeaderLabel: {
    // color: colors.background.light,
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },

  listHeaderContainer: {
    // height: sizes.listHeaderHeight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topone: {
    width: '90%',
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
  inner: {
    backgroundColor: 'white',
    padding: 15,
    elevation: 3,
    marginBottom: 10,
    // marginHorizontal: 15,
    // marginHorizontal: 5,
    borderRadius: 10,
    marginHorizontal: 15,
    // width: '90%',
  },
  rows: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',
    justifyContent: 'space-between',
  },
});
export default styles;
