import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import CustomStatusBar from '../Common/CustomStatusBar';
import TextField from 'react-native-md-textinput';
import {Actions} from 'react-native-router-flux'


const { width, height } = Dimensions.get('window');

export default class Login extends Component {

    constructor(props){
        super(props)
        this.state={
             code : '+91'
        }
    }

    
  render() {
    return (
      <View style={styles.container}>
          <CustomStatusBar backgroundColor="#FB3238"/>
          <View style={{alignItems:'center', flexDirection:'row', }}>
              <TouchableOpacity onPress={()=>{Actions.pop()}} style={{padding:16}}>
              <MaterialIcons name="keyboard-arrow-left" style={{backgroundColor:'transparent'}} size={26} color="#fff" />
              </TouchableOpacity>
              <Text style={{color:'#fff', fontFamily:'Roboto-Medium',  fontSize:16}}>One Time Password</Text>
          </View>
          <View style={{paddingLeft:26, paddingRight:26, paddingTop:height*.1, flex:1, }}>
              <View style={{paddingBottom:20,  alignItems:'center',}}>
                  <Text style={{color:'#fff', fontFamily:'Roboto-Medium',  fontSize:18}}>Verfication Code</Text>
              </View>
              <View>
                  <Text style={{color:'#fff', textAlign:'center', fontFamily:'Roboto-Medium',  fontSize:14, lineHeight:24}}>Please type the verfication code sent {'\n'}to +91 90432 96578  <MaterialIcons name="edit" style={{backgroundColor:'transparent', paddingRight:8}} size={16} color="#fff" /></Text>
              </View>
              <View style={{paddingTop:height*.04}}>
                  <TextInput keyboardType={'numeric'} style={styles.textInput}  placeholder='Enter Your Mobile Number' underlineColorAndroid='transparent' placeholderTextColor='#FD989B'   />
                  <View style={{ backgroundColor: '#EFEFEF', height: 2, marginTop: 2, }} />
              </View>
              <TouchableOpacity style={{padding:16, paddingLeft:8, paddingRight:8 }}>
                  <Text style={{color:'#fff', textAlign:'center', fontFamily:'Roboto-Medium',  fontSize:14, lineHeight:24}}>Resend OTP ?</Text>
              </TouchableOpacity>
              <View style={{paddingTop:height*.06}}>
              <TouchableOpacity style={{width:width*.85, height:height*.07, borderRadius:width*.85/2, backgroundColor:'#fff', alignSelf:'center', justifyContent:'center'}}>
                  <Text style={{color:'#FB3238', textAlign:'center', backgroundColor:'transparent', fontFamily:'Roboto-Bold',  fontSize:18}}>ENTER</Text>
              </TouchableOpacity>
              </View>
          </View>
          
               
               
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#FB3238'
   
  },
  textInput: {
        height: 50,
        fontSize: 14,
        color: '#fff',
        textAlign:'center',
        justifyContent: 'center'
    },
  
  });

