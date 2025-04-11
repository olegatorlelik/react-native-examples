import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from '@navigations/roots/app';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App: FC = () => {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
