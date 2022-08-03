import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from '@shopify/restyle';

import Navigations from './navs';
import {themes} from './themes/index';

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={themes[0]}>
        <Navigations />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
