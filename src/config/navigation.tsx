import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from "../screen/Home"
import Login from "../screen/Login"

const AppNavigator = createStackNavigator({
	Login,
	Home
});

export default createAppContainer(AppNavigator);
