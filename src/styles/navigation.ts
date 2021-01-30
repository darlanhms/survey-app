import { DefaultTheme, Theme } from '@react-navigation/native';

const NavigationTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#333333',
    text: '#FFFFFF',
    background: '#F4F6FA',
  },
};

export default NavigationTheme;
