import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from '../screens/IndexScreen';
import SearchScreen from '../screens/SearchScreen';
import TVScreen from '../screens/TVScreen';
import ShowScreen from '../screens/ShowScreen';
import WebScreen from '../screens/WebScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MovieStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="MoviesIndex" component={IndexScreen} options={{ title: 'Movies' }} />
    <Stack.Screen name="MovieDetails" component={ShowScreen} options={{ title: 'Movie Details' }} />
    <Stack.Screen name="MovieWeb" component={WebScreen} options={{ title: 'Web View' }} />
  </Stack.Navigator>
);

const SearchStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="SearchIndex" component={SearchScreen} options={{ title: 'Search' }} />
    <Stack.Screen name="SearchDetails" component={ShowScreen} options={{ title: 'Details' }} />
    <Stack.Screen name="SearchWeb" component={WebScreen} options={{ title: 'Web View' }} />
  </Stack.Navigator>
);

const TVStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="TVIndex" component={TVScreen} options={{ title: 'TV Shows' }} />
    <Stack.Screen name="TVDetails" component={ShowScreen} options={{ title: 'Show Details' }} />
    <Stack.Screen name="TVWeb" component={WebScreen} options={{ title: 'Web View' }} />
  </Stack.Navigator>
);

const AppStack = () => (
  <Tab.Navigator>
    <Tab.Screen 
      name="MoviesTab" 
      component={MovieStack} 
      options={{ headerShown: false, tabBarLabel: 'Movies' }}
    />
    <Tab.Screen 
      name="SearchTab" 
      component={SearchStack} 
      options={{ headerShown: false, tabBarLabel: 'Search' }}
    />
    <Tab.Screen 
      name="TVTab" 
      component={TVStack} 
      options={{ headerShown: false, tabBarLabel: 'TV Shows' }}
    />
  </Tab.Navigator>
);

export default AppStack;