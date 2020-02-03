import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Home from '../screen/Home'
import Login from '../screen/Login'
import AddTodo from '../screen/AddTodo'
import React from "react";

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Todo-App',
      }
    },
    Login,
    AddTodo
  },
  {
    defaultNavigationOptions: {
      headerTitleContainerStyle: {
        backgroundColor: 'yellow',
      },
      headerLeftContainerStyle: {
        backgroundColor: 'yellow',
      }
    }
  }
)

export default createAppContainer(AppNavigator)
