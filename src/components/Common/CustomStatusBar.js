import React from 'react';
import {Image, Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function CustomStatusBar (props) {
  const statusBarColor = props.backgroundColor ? props.backgroundColor: '#FFFFFF';
  if (Platform.OS === 'ios') {
    return (
      <View style={{backgroundColor: statusBarColor, height: 24}}>
        <StatusBar/>
      </View>
    )
  } else {
    return (<StatusBar backgroundColor={statusBarColor}/>);
  }
}
