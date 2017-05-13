import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Text,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Pages extends Component {

  render() {
    const screenList = [
      {
        name: 'Home',
        link: 'home'
      },
      {
        name: 'Search',
        link: 'search'
      },
      {
        name: 'Login',
        link: 'login'
      },
      {
        name: 'OTP',
        link: 'otp'
      },
      {
        name: 'Create Address',
        link: 'createadress'
      },
      {
        name: 'Create Profile',
        link: 'createprofile'
      },
      {
        name: 'My Address',
        link: 'myadress'
      },
      

    ];
    const screenListView = screenList.map((screen, key) => {
      return (<Text style={{padding: 10}} key={key} onPress={Actions[screen.link]}>{screen.name}</Text>);
    })
    return (
      <View style={{flex: 1, flexDirection: 'row', marginTop: 40}}>
        <ScrollView>
          <Text style={{color: '#FB3238', fontSize: 18, flex: 1, flexDirection: 'column', textAlign: 'center', flexWrap: 'wrap', height: 40}}>Mappfy Screen List</Text>
          <View style={{alignItems: 'center'}}>
            {screenListView}
          </View>
        </ScrollView>
      </View>
    );
  }
}
