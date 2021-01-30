import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';

import AppRouter from './routes/App';
import NavigationTheme from './styles/navigation';
import theme from './styles/theme';

const App: React.FC = () => (
  <NavigationContainer theme={NavigationTheme}>
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor="#383838" />
      <AppRouter />
    </ThemeProvider>
  </NavigationContainer>
);

export default App;
