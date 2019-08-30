import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ActionScreen from '../screens/ActionScreen';
import SearchScreen from '../screens/SearchScreen';
import ListScreen from '../screens/ListScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  { Home: HomeScreen },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home`
          : 'md-home'
      }
    />
  ),
};
HomeStack.path = '';

const ActionStack = createStackNavigator(
  {Action: ActionScreen},
  config
);
ActionStack.navigationOptions = {
  tabBarLabel: 'Add',
  tabBarIcon: ({ focused }) => (
  <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-add' : 'md-add'} />
  ),
};
ActionStack.path = '';

const ListStack = createStackNavigator(
  {List: ListScreen},
  config
);
ListStack.navigationOptions = {
  tabBarLabel: 'List',
  tabBarIcon: ({ focused }) => (
  <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-list' : 'md-list'} />
  ),
};
ListStack.path = '';

const SearchStack = createStackNavigator(
  {Search: SearchScreen},
  config
);
SearchStack.navigationOptions = {
  tabBarLabel: 'Search',
  tabBarIcon: ({ focused }) => (
  <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'} />
  ),
};
SearchStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  ActionStack,
  ListStack,
  SearchStack,
});

tabNavigator.path = '';

export default tabNavigator;
