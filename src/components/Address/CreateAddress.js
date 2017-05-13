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
import {Actions} from 'react-native-router-flux';


const { width, height } = Dimensions.get('window');

export default class CreateAddress extends Component {

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
      <View style={styles.container}>
          <CustomStatusBar backgroundColor="#FB3238"/>
          
          <View style={{alignItems:'center', flexDirection:'row', backgroundColor:'#FB3238', padding:8, paddingLeft:0 }}>
              <TouchableOpacity onPress={()=>{Actions.pop()}} style={{paddingLeft:16, paddingRight:16}}>
               <MaterialIcons name="keyboard-arrow-left" style={{backgroundColor:'transparent'}} size={26} color="#fff" />
              </TouchableOpacity>
              <Text style={{color:'#fff', fontFamily:'Roboto-Medium',  fontSize:16}}>Create Address</Text>
          </View>

          <KeyboardAwareScrollView resetScrollToCoords={{x:0, y:0}} extraScrollHeight={100} style={{padding:16, paddingTop:0,  }}>
              <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                  <View style={{width:width*.4}} >
                 <TextField onSubmitEditing={() => this._focusNextField('1')} returnKeyType='next' labelStyle={{fontFamily:'Roboto-Medium', fontSize:14,  }} inputStyle={{fontFamily:'Roboto-Medium', fontSize:14, paddingTop:10  }}  label={'Label'} highlightColor={'#FB3238'} borderColor={'#979797'} />
                 </View>
                  <View style={{width:width*.4}} >
                 <TextField ref={1} onSubmitEditing={() => this._focusNextField('2')} returnKeyType='next' labelStyle={{fontFamily:'Roboto-Medium', fontSize:14 }} inputStyle={{fontFamily:'Roboto-Medium', fontSize:14, paddingTop:10  }} label={'Building Number'} highlightColor={'#FB3238'} borderColor={'#979797'} />
                 </View>
              </View>
                 <TextField  ref={2} onSubmitEditing={() => this._focusNextField('3')} returnKeyType='next' labelStyle={{fontFamily:'Roboto-Medium', fontSize:14,  }} inputStyle={{fontFamily:'Roboto-Medium', fontSize:14, paddingTop:10  }} label={'Building Name'} highlightColor={'#FB3238'} borderColor={'#979797'} />
                 <TextField  ref={3} onSubmitEditing={() => this._focusNextField('4')} returnKeyType='next' labelStyle={{fontFamily:'Roboto-Medium', fontSize:14,  }} inputStyle={{fontFamily:'Roboto-Medium', fontSize:14, paddingTop:10  }} label={'Address Line 1'} highlightColor={'#FB3238'} borderColor={'#979797'} />
                 <TextField  ref={4} onSubmitEditing={() => this._focusNextField('5')} returnKeyType='next' labelStyle={{fontFamily:'Roboto-Medium', fontSize:14,  }} inputStyle={{fontFamily:'Roboto-Medium', fontSize:14, paddingTop:10  }} label={'Address Line 2'} highlightColor={'#FB3238'} borderColor={'#979797'} />
                 <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                  <View style={{width:width*.4}} >
                 <TextField ref={5} onSubmitEditing={() => this._focusNextField('6')} returnKeyType='next' labelStyle={{fontFamily:'Roboto-Medium', fontSize:14,  }} inputStyle={{fontFamily:'Roboto-Medium', fontSize:14, paddingTop:10  }}  label={'State'} highlightColor={'#FB3238'} borderColor={'#979797'} />
                 </View>
                  <View style={{width:width*.4}} >
                 <TextField ref={6} onSubmitEditing={() => this._focusNextField('7')} returnKeyType='next' labelStyle={{fontFamily:'Roboto-Medium', fontSize:14,  }} inputStyle={{fontFamily:'Roboto-Medium', fontSize:14, paddingTop:10  }} label={'City'} highlightColor={'#FB3238'} borderColor={'#979797'} />
                 </View>
              </View>
                <View style={{width:width*.4}} >
                 <TextField ref={7}  returnKeyType='done' labelStyle={{fontFamily:'Roboto-Medium', fontSize:14,  }} inputStyle={{fontFamily:'Roboto-Medium', fontSize:14, paddingTop:10  }} label={'Pincode'} highlightColor={'#FB3238'} borderColor={'#979797'} />
                 </View>
                 <View style={{alignItems:'center', paddingTop:height*.1, paddingBottom:20}}>
                    <TouchableOpacity style={{width:width*.8, alignItems:'center', justifyContent:'center', height:height*.065, borderRadius:width*.7/2, backgroundColor:'#FB3238',}}>
                        <Text style={{color:'#fff', fontFamily:'Roboto-Medium',  fontSize:16}}>CREATE ADDRESS</Text>
                    </TouchableOpacity>
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

