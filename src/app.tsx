import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from '@shopify/restyle'

import Navigations from './navs'
import theme from './themes/light'

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Navigations />
      </ThemeProvider>
    </NavigationContainer>
  )
}

export default App
