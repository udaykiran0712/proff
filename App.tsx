import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './displays/Home';
import FeedMax from './displays/FeedMax';
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="FeedDetail" component={FeedMax} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
