import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Scene, Router} from 'react-native-router-flux';
import Home from './src/components/Home/Home';
import Search from './src/components/Home/Search';
import Login from './src/components/Authentication/Login';
import OTP from './src/components/Authentication/OTP';
import CreateAddress from './src/components/Address/CreateAddress';
import MyAddress from './src/components/Address/MyAddress';
import CreateProfile from './src/components/Profile/CreateProfile';
import Pages from './pages';

export default class App extends Component {
  render() {
    return (
      <Router>
          <Scene key='root'>
            <Scene key="pages" hideNavBar={true} component={Pages}initial={true}   />
            <Scene key="home" hideNavBar={true} component={Home}  />
            <Scene key="search" hideNavBar={true} component={Search} />
            <Scene key="login" hideNavBar={true} component={Login}/>
            <Scene key="otp" hideNavBar={true} component={OTP}/>
            <Scene key="createadress" hideNavBar={true} component={CreateAddress}/>
            <Scene key="myadress" hideNavBar={true} component={MyAddress}  />
            <Scene key="createprofile" hideNavBar={true} component={CreateProfile} />
          </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  });

