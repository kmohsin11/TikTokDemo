import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import { screenNames } from '../constants/screenNames';

const Stack = createStackNavigator();
class HomeStackNavigator extends React.Component {
    render = () => {
      return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name={screenNames.home} component={HomeScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
};

export default HomeStackNavigator;