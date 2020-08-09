import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen, CommentScreen } from '../screens';
import { screenNames } from '../constants/screenNames';

const Stack = createStackNavigator();
class HomeStackNavigator extends React.Component {
    render = () => {
      return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name={screenNames.home} component={HomeScreen}/>
            <Stack.Screen name={screenNames.comments} component={CommentScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
};

export default HomeStackNavigator;