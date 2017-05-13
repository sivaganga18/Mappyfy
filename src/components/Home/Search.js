import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Modal,
  Animated,
  ScrollView
} from 'react-native';
import MapView from 'react-native-maps';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SideMenu, List, ListItem } from 'react-native-elements';
import CustomStatusBar from '../Common/CustomStatusBar';
import {Actions} from 'react-native-router-flux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const { width, height } = Dimensions.get('window');

export default class Search extends Component {

    constructor(props){
        super(props)
    this.state ={ }
    }

   


   
  render() {
        searchList=[
            {
                name:'HSR layout',
                sub:'Bengaluru'

            },
            {
                name:'HSR layout',
                sub:'Bengaluru'

            },
            {
                name:'HSR layout',
                sub:'Bengaluru'

            },
            {
                name:'HSR layout',
                sub:'Bengaluru'

            },
            {
                name:'HSR layout',
                sub:'Bengaluru'

            },
            {
                name:'HSR layout',
                sub:'Bengaluru'

            },
        ]
       const searchResult = searchList.map((search, key)=>{
           return(
            <View key={key}  style={{paddingBottom:16}}>
             <TouchableOpacity  style={{flexDirection:'row', padding:16, alignItems:'center', paddingBottom:16}}>
                 <MaterialIcons name="location-on" style={{backgroundColor:'transparent'}} size={18} color="#6c6c6c" />
                 <View>
                 <Text style={{color:'#6c6c6c', fontFamily:'Roboto-Regular',  fontSize:14, paddingLeft:16, lineHeight:22}}>{search.name}</Text>
                 <Text style={{color:'#6c6c6c', fontFamily:'Roboto-Regular',  fontSize:12, opacity:.5, paddingLeft:16, }}>{search.sub}</Text>
                 </View>
             </TouchableOpacity>
             <View style={{height:1, opacity:.1, alignSelf:'flex-end', width:width*.87, backgroundColor:'#525252'}}/>
             </View>
           )
       })

    return (
        
    <View style={styles.container}>
         <CustomStatusBar backgroundColor="#EBEBEB"/>
         <KeyboardAwareScrollView>
         <View style={{flex:.18, backgroundColor:'#fff', shadowOffset:{width:1, height:1}, shadowOpacity:.2, shadowColor:'#000'}}>
                <TouchableOpacity onPress={() =>{Actions.pop()}} style={{padding:16}}>
                    <MaterialIcons name="keyboard-arrow-left" style={{backgroundColor:'transparent'}} size={26} color="#525252" />
                </TouchableOpacity>
                <View style={{alignItems:'center', }}>
                    <TextInput underlineColorAndroid='transparent' ref={(ref)=>{this.myTextInput = ref}} style={{alignSelf:'center',width:width*.9, height:height*.06, color:'#000', fontFamily:'Roboto-Regular',  fontSize:14, justifyContent:'center', paddingLeft:16,  borderRadius:6, backgroundColor:'#EBEBEB',}} placeholder='Search Address'/>
                </View>
         </View>
         <View style={{flex:.82,  backgroundColor:'#fff'}}>
             <ScrollView>
             <TouchableOpacity style={{flexDirection:'row', padding:16, marginTop:16, alignItems:'center', paddingTop:8}}>
                 <MaterialIcons name="my-location" style={{backgroundColor:'transparent'}} size={22} color="#6c6c6c" />
                 <Text style={{color:'#6c6c6c', fontFamily:'Roboto-Regular',  fontSize:14, paddingLeft:16}}>Current location</Text>
             </TouchableOpacity>
             <View style={{height:1, opacity:.1, alignSelf:'flex-end', width:width*.87, backgroundColor:'#525252'}}/>
             {searchResult}
             </ScrollView>
         </View>
         </KeyboardAwareScrollView>
           
    </View>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
   
  },
  map: {
   flex:1, 
   paddingTop:26,
  },
  textInput: {
        height: 50,
        fontSize: 14,
        color: '#000',
        textAlign:'center',
        justifyContent: 'center'
    },
 
  });

