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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
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
      <KeyboardAwareScrollView style={styles.container}>
          <CustomStatusBar backgroundColor="#FB3238"/>
          
          <View style={{alignItems:'center', flexDirection:'row', backgroundColor:"#FB3238" }}>
              <TouchableOpacity onPress={()=>{Actions.pop()}}style={{padding:16}}>
                <MaterialIcons name="keyboard-arrow-left" style={{backgroundColor:'transparent'}} size={26} color="#fff" />
              </TouchableOpacity>
              <Text style={{color:'#fff', fontFamily:'Roboto-Medium',  fontSize:16}}>Login</Text>
          </View>
          <View style={{flex:.4, backgroundColor:'#FB3238', alignItems:'center', justifyContent:'center'}}>
              <Image style={{opacity:.5}} source={require('../../images/placeholder.png')}/>
          </View>  
          <View style={{flex:.5, padding:16, backgroundColor:'#fff'}}>
                <View style={{alignItems:'center', paddingTop:16}}>
                    <Text style={{color:'#000', fontFamily:'Roboto-Regular',  fontSize:14}}>ENTER YOUR MOBILE NUMBER TO LOGIN</Text>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between', paddingTop:30, paddingLeft:20, paddingRight:20}}>
                    <View style={{width:width*.15}}>
                        <TextField keyboardType={'numeric'} value={this.state.code}  label={'Code'} highlightColor={'#FB3238'} inputStyle={{ padding:.8}} />
                    </View>
                    <View style={{width:width*.6}}>
                        <TextField keyboardType={'numeric'} label={'Your Mobile Number'} highlightColor={'#FB3238'} inputStyle={{ padding:.8}} />
                    </View>
                </View>
                <View style={{ alignItems:'center', paddingTop:20}}>
                    <Text style={{color:'#000', opacity:.8, fontFamily:'Roboto-Medium',  fontSize:12}}>We will send you a one time password.</Text>
                </View>
                <View style={{alignItems:'center', justifyContent:'flex-end', paddingTop:height*.1}}>
                    <TouchableOpacity style={{width:width*.7, alignItems:'center', justifyContent:'center', height:height*.065, borderRadius:width*.7/2, backgroundColor:'#FB3238',}}>
                        <Text style={{color:'#fff', fontFamily:'Roboto-Medium',  fontSize:16}}>Login</Text>
                    </TouchableOpacity>
                </View>
          </View> 
         
    </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
   
  },
  
  });

