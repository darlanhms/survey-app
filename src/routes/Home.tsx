import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { DrawerNavigationProp } from '@react-navigation/drawer';
import Home from '../screens/Home';
import { AppStackParamList } from './App';

const HomeStack = createStackNavigator();

interface Props {
  navigation: DrawerNavigationProp<AppStackParamList, 'Home'>;
}

const HomeRouter: React.FC<Props> = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#333333',
      },
      headerLeft: () => (
        <Icon
          name="bars"
          color="white"
          size={23}
          style={{ marginLeft: 20 }}
          onPress={() => navigation.openDrawer()}
        />
      ),
    }}
  >
    <HomeStack.Screen name="Survey App" component={Home} />
  </HomeStack.Navigator>
);

export default HomeRouter;
