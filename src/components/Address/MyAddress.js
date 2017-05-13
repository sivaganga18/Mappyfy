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
import {Actions} from 'react-native-router-flux'


const { width, height } = Dimensions.get('window');

export default class MyAddress extends Component {

    constructor(props){
        super(props)
        this.state={
            
        }
    }

    
  render() {

      const addressList=[
          {
              name:'Bala Subramani',
              des:'workspace',
              fulladdress:'223, kasturi nagar, NGFT layout, banaswadi, near kanthi sweets bangalore - 560 023'
          },
          {
              name:'Bala Subramani',
              des:'workspace',
              fulladdress:'223, kasturi nagar, NGFT layout, banaswadi, near kanthi sweets bangalore - 560 023'
          },
          {
              name:'Bala Subramani',
              des:'workspace',
              fulladdress:'223, kasturi nagar, NGFT layout, banaswadi, near kanthi sweets bangalore - 560 023'
          },
          {
              name:'Bala Subramani',
              des:'workspace',
              fulladdress:'223, kasturi nagar, NGFT layout, banaswadi, near kanthi sweets bangalore - 560 023'
          },
          {
              name:'Bala Subramani',
              des:'workspace',
              fulladdress:'223, kasturi nagar, NGFT layout, banaswadi, near kanthi sweets bangalore - 560 023'
          },
          {
              name:'Bala Subramani',
              des:'workspace',
              fulladdress:'223, kasturi nagar, NGFT layout, banaswadi, near kanthi sweets bangalore - 560 023'
          },
          {
              name:'Bala Subramani',
              des:'workspace',
              fulladdress:'223, kasturi nagar, NGFT layout, banaswadi, near kanthi sweets bangalore - 560 023'
          },
          {
              name:'Bala Subramani',
              des:'workspace',
              fulladdress:'223, kasturi nagar, NGFT layout, banaswadi, near kanthi sweets bangalore - 560 023'
          },
          ]
        const addressView = addressList.map((address, key)=>{
             return (
            <View key={key} style={{paddingBottom:16}}>
            <View style={{paddingTop:8,  backgroundColor:'#fff', borderRadius:6, shadowOffset:{width:1, height:1}, shadowOpacity:.2, shadowColor:'#000'}}>
                    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                        <View style={{paddingLeft:16}}>
                        <Text style={{color:'#525252', fontFamily:'Roboto-Medium',  fontSize:14, lineHeight:24}}>{address.name}</Text>
                        <Text style={{color:'#26CA1D', fontFamily:'Roboto-Medium',  fontSize:12}}>{address.des}</Text>
                        </View>
                        <Menu onSelect={(value) => {
                            switch (value) {
                                case 1:
                                   
                                    break;
                                case 2:
                                    
                                    break;
                            }}}>
                        <MenuTrigger style={{paddingLeft:16, paddingRight:8}}>
                            <MaterialIcons name="more-vert" style={{backgroundColor:'transparent', }} size={22} color="#C4C2C2" />
                        </MenuTrigger>
                         <MenuOptions optionsContainerStyle={{width:width*.3, padding:8, marginRight:1000}}>
                                 <MenuOption value={1}>
                                     <Text style={{color:'#525252', lineHeight:18, fontFamily:'Roboto-Medium',  fontSize:12}}>Edit</Text>
                                 </MenuOption>
                                 <MenuOption value={2}>
                                     <Text style={{color:'#525252', lineHeight:18, fontFamily:'Roboto-Medium',  fontSize:12}}>Share</Text>
                                 </MenuOption>
                                 <MenuOption value={2}>
                                     <Text style={{color:'#525252', lineHeight:18, fontFamily:'Roboto-Medium',  fontSize:12}}>Delete</Text>
                                 </MenuOption>
                             </MenuOptions>
                        </Menu>
                    </View>
                    <View style={{padding:16, paddingTop:8, paddingBottom:8}}>
                        <Text style={{color:'#525252', lineHeight:18, fontFamily:'Roboto-Medium',  fontSize:12}}>{address.fulladdress}</Text>
                    </View>
                </View>
                </View>
             )
        })

    return (
      <MenuContext style={styles.container}>
          <CustomStatusBar backgroundColor="#FB3238"/>
            <View style={{alignItems:'center', flexDirection:'row', backgroundColor:'#FB3238', padding:8, paddingLeft:0 }}>
              <TouchableOpacity onPress={()=>{Actions.pop()}} style={{paddingLeft:16, paddingRight:16}}>
               <MaterialIcons name="keyboard-arrow-left" style={{backgroundColor:'transparent'}} size={26} color="#fff" />
              </TouchableOpacity>
              <Text style={{color:'#fff', fontFamily:'Roboto-Medium',  fontSize:16}}>My Address</Text>
          </View>
            <ScrollView style={{padding:16,  }}>
                <View style={{paddingBottom:16}}>
                {addressView}
                </View>
            </ScrollView>  
      </MenuContext>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
   
    backgroundColor:'#F4F4F4'
   
  },
  
  
  });

