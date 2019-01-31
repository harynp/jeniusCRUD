import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import LoginScreen from "./screens/login";
import DashboardScreen from "./screens/dashboard";
import RegisterScreen from "./screens/register";
import UpgradeScreen from "./screens/update";

const AppSwitchNavigator = createSwitchNavigator({
  Login: {
    screen: LoginScreen
  },
  Dashboard: {
    screen: DashboardScreen
  },
  Register: {
    screen: RegisterScreen
  },
  Upgrade: {
    screen: UpgradeScreen
  }
});

const AppContainer = createAppContainer(AppSwitchNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
