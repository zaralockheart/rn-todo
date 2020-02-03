import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Home from '../screen/Home'
import AddTodo from '../screen/AddTodo'
import React from 'react'

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Todo-App',
      },
    },
    AddTodo: {
      screen: AddTodo,
      navigationOptions: {
        title: 'Add Todo List',
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerTitleContainerStyle: {
        backgroundColor: 'yellow',
      },
      headerLeftContainerStyle: {
        backgroundColor: 'yellow',
      },
    },
  },
)

export default createAppContainer(AppNavigator)
