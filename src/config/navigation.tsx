import {
  createAppContainer,
  NavigationContext,
  NavigationRoute,
  NavigationScreenProp
} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Home from '../screen/Home'
import Login from '../screen/Login'
import AddTodo from '../screen/AddTodo'

const AppNavigator = createStackNavigator(
  {
    Home,
    Login,
    AddTodo
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
)

export default createAppContainer(AppNavigator)
