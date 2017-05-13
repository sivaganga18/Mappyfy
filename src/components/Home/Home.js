import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Modal
} from 'react-native';
import MapView from 'react-native-maps';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SideMenu, List, ListItem } from 'react-native-elements';
import {Actions} from 'react-native-router-flux';
import CustomStatusBar from '../Common/CustomStatusBar';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let id = 0;

 const customStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#242f3e',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#746855',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#242f3e',
      },
    ],
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#d59563',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#d59563',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#263c3f',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#6b9a76',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        color: '#38414e',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#212a37',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9ca5b3',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#746855',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#1f2835',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#f3d19c',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [
      {
        color: '#2f3948',
      },
    ],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#d59563',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#17263c',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#515c6d',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#17263c',
      },
    ],
  },
];

export default class Home extends Component {

    constructor(props){
        super(props)
        this.state={
             region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      modalVisible: false,
     
        }
    }

   
    onSideMenuChange (isOpen: boolean) {
  this.setState({
    isOpen: isOpen
  })
}

toggleSideMenu () {
  this.setState({
    isOpen: !this.state.isOpen
  })
}

setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

    
  render() {
      const MenuComponent = (
    <View style={{flex: 1, }}>
      <View style={{flex: .25, backgroundColor: '#FB3238', justifyContent:'flex-end', alignItems:'center', paddingBottom:8}}>
          <View style={{width:80, height:80, borderRadius:80/2, backgroundColor:'#000', borderWidth:2, borderColor:'#fff', justifyContent:'center', alignItems:'center'}}>
              <Entypo name="user" style={{backgroundColor:'transparent'}} size={40} color="#FB3238" />

          </View>
          <Text style={{color:'#fff', fontFamily:'Roboto-Medium',fontSize:14, paddingTop:8}}>Bala Subramani</Text>
          <TouchableOpacity >
          <Text style={{color:'#fff', fontFamily:'Roboto-Regular',fontSize:12, paddingTop:8}}>Edit Profile</Text>
          </TouchableOpacity>
      </View>
      <View style={{flex: .7, backgroundColor: '#fff', paddingTop:8}}>
          <TouchableOpacity style={{flexDirection:'row',alignItems:'center',padding:16, paddingTop:16, paddingBottom:8 }}>
              <MaterialIcons name="home" style={{backgroundColor:'transparent'}} size={22} color="#FB3238" />
              <Text style={{color:'#FB3238', fontFamily:'Roboto-Medium',fontSize:14,paddingLeft:16}}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flexDirection:'row',alignItems:'center', padding:16, paddingTop:16, paddingBottom:8}}>
              <MaterialCommunityIcons name="logout" style={{backgroundColor:'transparent'}} size={22} color="#FB3238" />
              <Text style={{color:'#FB3238', fontFamily:'Roboto-Medium',fontSize:14,paddingLeft:16}}>Logout</Text>
          </TouchableOpacity>
      </View>
     
    </View>
  )

    return (
         <SideMenu
      isOpen={this.state.isOpen}
      onChange={this.onSideMenuChange.bind(this)}
      menu={MenuComponent}
      openMenuOffset={width*.6}>
      <View style={styles.container}>
        <CustomStatusBar backgroundColor="#FB3238"/>
        <View style={{ alignItems:'center', flexDirection:'row', backgroundColor:'#FB3238', padding:8, paddingLeft:0 }}>
             <TouchableOpacity onPress={()=>{this.onSideMenuChange(true)}} style={{paddingLeft:16, paddingRight:16, flexDirection:'row', alignItems:'center'}}>
              <MaterialIcons name="menu" style={{backgroundColor:'transparent'}} size={22} color="#fff" />
              <Text style={{paddingLeft:16, color:'#fff', fontFamily:'Roboto-Medium',fontSize:16,}}>Mappyfy</Text>
            </TouchableOpacity>
          </View>
            <MapView
          provider={this.props.provider}
          style={styles.map}
          initialRegion={this.state.region}/>
            <View style={{position:'absolute', backgroundColor:'transparent', alignItems:'center', marginTop:height*.15, marginLeft:width*.065,  }}>     
                  <View style={{flexDirection:'row', justifyContent:'space-around',  alignItems:'center',shadowOffset:{width:1, height:1}, shadowOpacity:.2, shadowColor:'#000' }}>
                      <View style={{width:width*.72, height:height*.085, padding:16, borderTopLeftRadius:3, alignSelf:'center', borderBottomLeftRadius:3,  backgroundColor:'#fff', }}>
                      <TouchableOpacity onPress={() =>{Actions.search()}} style={{width:width*.72,  }}>  
                          <View style={{flexDirection:'row', alignItems:'center',}}>
                              <MaterialIcons name="search" style={{backgroundColor:'transparent', paddingRight:16}} size={20} color="#FB3238" />
                              <Text style={{color:'#FB3238', fontFamily:'Roboto-Regular',fontSize:14, opacity:.8}}>Search Address</Text>
                          </View>
                      </TouchableOpacity>
                      </View>
                      <View style={{width:width*.15,height:height*.085, backgroundColor:'#fff', borderTopRightRadius:3, borderBottomRightRadius:3, }}>
                      <TouchableOpacity onPress={() =>{this.setModalVisible(true)}} style={{ width:width*.15,height:height*.085,borderLeftWidth:1, borderColor:'#D8D8D8', alignItems:'center', justifyContent:'center',height:52,   }}>
                          <MaterialIcons name="share" style={{backgroundColor:'transparent'}} size={20} color="#FB3238" />
                      </TouchableOpacity>
                      </View>
                   </View>                 
            </View>
             <View style={{position:'absolute', bottom:height*.15, right:width*.05, alignSelf:'flex-end'}}>
                <TouchableOpacity style={{marginLeft:width*.02, width:50, alignItems:'center', justifyContent:'center', height:50, borderRadius:25, backgroundColor:'#fff',shadowOffset:{width:1, height:1}, shadowOpacity:.2, shadowColor:'#000'}}>
                    <MaterialIcons name="my-location" style={{backgroundColor:'transparent'}} size={25} color="#FB3238" />
                </TouchableOpacity>
              </View>

              <View style={{position:'absolute', bottom:0}}>
                <TouchableOpacity style={{ width:width*1,padding:16, alignItems:'center', flex:1, justifyContent:'center', backgroundColor:'#FB3238'}}>
                   <Text style={{color:'#fff', fontWeight:'700'}}>CREATE ADDRESS</Text>
                </TouchableOpacity>
              </View>

              <Modal
          animationType={"none"}
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <TouchableOpacity onPress={() =>{this.setModalVisible(false)}} style={{flex:1, justifyContent:'flex-end', backgroundColor:'rgba(0, 0, 0, 0.5)'}}>
              <View style={{height:height*.165, backgroundColor:'#fff',}}>
                <TouchableOpacity style={{padding:16, alignItems:'center',  flexDirection:'row'}}>
                    <Ionicons name="logo-whatsapp" style={{backgroundColor:'transparent', paddingRight:16}} size={22} color="#6c6c6c" />
                    <Text style={{color:'#6c6c6c', fontFamily:'Roboto-Medium',  fontSize:14,}}>Share on Whats app</Text>
                </TouchableOpacity>
                <View style={{height:1, opacity:.1, alignSelf:'flex-end', width:width*1, backgroundColor:'#525252'}}/>
                <TouchableOpacity style={{padding:16,  alignItems:'center',  flexDirection:'row'}}>
                    <Ionicons name="ios-contact" style={{backgroundColor:'transparent', paddingRight:16}} size={24} color="#6c6c6c" />
                    <Text style={{color:'#6c6c6c', fontFamily:'Roboto-Medium',  fontSize:14,}}>Share on Contacts</Text>
                </TouchableOpacity>

              </View>
         </TouchableOpacity>
        </Modal>

    </View>
    </SideMenu>
    );
  }
}

Home.propTypes = {
  provider: MapView.ProviderPropType,
};

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

