import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import CustomStatusBar from '../Common/CustomStatusBar';
import TextField from 'react-native-md-textinput';
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {Actions} from 'react-native-router-flux'


const { width, height } = Dimensions.get('window');

export default class CreateProfile extends Component {

    constructor(props){
        super(props)
        this.state={
            
        }
    }

    _focusNextField(nextField) {
      this.refs[nextField].focus()
  }

    
  render() {
    return (
      <View   style={styles.container}>
          <CustomStatusBar backgroundColor="#FB3238"/>
            <View style={{alignItems:'center', flexDirection:'row', backgroundColor:'#FB3238', padding:8, paddingLeft:0 }}>
              <TouchableOpacity onPress={()=>{Actions.pop()}} style={{paddingLeft:16, paddingRight:16}}>
               <MaterialIcons name="keyboard-arrow-left" style={{backgroundColor:'transparent'}} size={26} color="#fff" />
              </TouchableOpacity>
              <Text style={{color:'#fff', fontFamily:'Roboto-Medium',  fontSize:16}}>Edit Profile</Text>
          </View>
            <KeyboardAwareScrollView resetScrollToCoords={{x:0, y:0}} extraScrollHeight={100} style={{paddingTop:height*.08}}>
                <View style={{alignItems:'center'}}>
                    <View style={{width:95, height:95, backgroundColor:'#000', borderRadius:95/2, borderWidth:1.5, borderColor:'red'}}>

                    </View>
                    <TouchableOpacity style={{flexDirection:'row', alignItems:'center', paddingTop:height*.02}}>
                        <MaterialIcons name="edit" style={{backgroundColor:'transparent', paddingRight:8}} size={18} color="#FB3238" />
                        <Text style={{color:'#FB3238', fontFamily:'Roboto-Medium',  fontSize:12}}>Edit Photo</Text>
                    </TouchableOpacity>
                </View>

               <View extraScrollHeight={150} style={{padding:16, paddingTop:0}}>
                 <TextField   onSubmitEditing={() => this._focusNextField('1')} returnKeyType='next' labelStyle={{fontFamily:'Roboto-Medium', fontSize:14 }} inputStyle={{fontFamily:'Roboto-Medium', fontSize:14, paddingTop:10  }} label={'Name'} highlightColor={'#FB3238'} borderColor={'#979797'} />
                 <TextField  ref={1} onSubmitEditing={() => this._focusNextField('2')} returnKeyType='next' labelStyle={{fontFamily:'Roboto-Medium', fontSize:14 }} inputStyle={{fontFamily:'Roboto-Medium', fontSize:14, paddingTop:10  }} label={'Email Id'} highlightColor={'#FB3238'} borderColor={'#979797'} />
                 <TextField keyboardType={'numeric'} ref={2} onSubmitEditing={() => this._focusNextField('3')} returnKeyType='next' labelStyle={{fontFamily:'Roboto-Medium', fontSize:14 }} inputStyle={{fontFamily:'Roboto-Medium', fontSize:14, paddingTop:10  }} label={'Phone Number'} highlightColor={'#FB3238'} borderColor={'#979797'} />
                 <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                  <View style={{width:width*.4}} >
                 <TextField ref={3} onSubmitEditing={() => this._focusNextField('4')} returnKeyType='next' labelStyle={{fontFamily:'Roboto-Medium', fontSize:14 }} inputStyle={{fontFamily:'Roboto-Medium', fontSize:14, paddingTop:10  }}  label={'Age'} highlightColor={'#FB3238'} borderColor={'#979797'} />
                 </View>
                  <View style={{width:width*.4}} >
                 <TextField ref={4} returnKeyType='done' labelStyle={{fontFamily:'Roboto-Medium', fontSize:14 }} inputStyle={{fontFamily:'Roboto-Medium', fontSize:14, paddingTop:10  }} label={'Sex'} highlightColor={'#FB3238'} borderColor={'#979797'} />
                 </View>
              </View>
                 <View style={{alignItems:'center', paddingTop:height*.03 }}>
                    <TouchableOpacity style={{width:width*.85, alignItems:'center', justifyContent:'center', height:height*.065, borderRadius:width*.7/2, backgroundColor:'#FB3238',}}>
                        <Text style={{color:'#fff', fontFamily:'Roboto-Medium',  fontSize:16}}>UPDATE PROFILE</Text>
                    </TouchableOpacity>
                </View>

          </View>

            </KeyboardAwareScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff'
   
  },
  
  
  });

