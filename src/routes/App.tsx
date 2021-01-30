import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeRouter from './Home';

export type AppStackParamList = {
  Home: undefined;
};

const AppDrawer = createDrawerNavigator<AppStackParamList>();

const AppRouter: React.FC = () => (
  <AppDrawer.Navigator initialRouteName="Home">
    <AppDrawer.Screen
      name="Home"
      component={HomeRouter}
      options={{
        title: 'Survey App',
      }}
    />
  </AppDrawer.Navigator>
);

export default AppRouter;
