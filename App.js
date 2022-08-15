import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomePage from "./src/components/Homepage";
import PrivacyPolicies from "./src/components/PrivacyPolicies";


const navigator = createStackNavigator({
  Home: HomePage,
  Privacy:PrivacyPolicies
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'TMS TECHNIC WEBSITE ROUTER',
    headerTitleAlign: 'center',
    // headerStyle:{backgroundColor:"#002b57a1"},
    headerTintColor: '#002c57'
  },
});

export default createAppContainer(navigator);
