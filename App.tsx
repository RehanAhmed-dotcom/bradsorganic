import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Store, persistor} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import Root from './src/navigator/root';
import {Provider} from 'react-redux';
const App = () => {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <Root />
      </PersistGate>
    </Provider>
  );
};

export default App;
