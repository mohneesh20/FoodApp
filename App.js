import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Homescreen from './src/screens/Homescreen';
import ResultShow from './src/screens/ResHow';
const navigator=createStackNavigator({
  Home:Homescreen,
  Result:ResultShow
},
{
  initialRouteName:'Home',
  defaultNavigationOptions:{
    title:'FoodApp'
  }
});
export default createAppContainer(navigator);