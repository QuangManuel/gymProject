import React from 'react';
import {Dimensions, KeyboardAvoidingView} from 'react-native';
import Swiper from 'react-native-swiper';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  ActivityIndicator,
  ImageBackground,
  TextInput,
  FlatList,
  Image,
  Pressable,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import LinearGradient from 'react-native-linear-gradient';

const {height} = Dimensions.get('window');
const {width} = Dimensions.get('window');

function Navbar_Guest({navigation}: any): JSX.Element {
  const [text, onChangeText] = React.useState('');
  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Image
            style={{width: 50, height: 50, borderRadius: 100, backgroundColor: '#C4C4C4'}}
            source={require('../images/gymaster_logo.png')}
          />
        </View>

        <View
          style={{
            flex: 5,
            justifyContent: 'center',
            flexDirection: 'column',
            paddingHorizontal: 13,
          }}>
          <Text style={{fontFamily: 'SVN-Gilroy Bold', fontSize: 16, color: 'black'}}>
            0919447744
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('MainHomeGuest');
          }}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}>
          <Image
            style={{width: 20, height: 20, borderRadius: 100}}
            source={require('../images/close.png')}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.body}>

        <View
          style={{
            height: 50,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Image
              style={{width: 25, height: 25, justifyContent: 'center', marginRight: 5,}}
              source={require('../images/khuyenmai.png')}
            />
          </View>

          <Text style={{justifyContent: 'center', flex: 9, fontFamily: 'SVN-Gilroy Bold', fontSize: 15, color: '#535763'}}>
            Khuyến mãi
          </Text>
        </View>

        <TouchableOpacity
          onPress={()=>{Linking.openURL('tel:+84 987651234');
          }}
          style={{
            height: 50,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Image
              style={{width: 25, height: 25, justifyContent: 'center', marginRight: 5,}}
              source={require('../images/support.png')}
            />
          </View>

          <Text style={{justifyContent: 'center', flex: 9, fontFamily: 'SVN-Gilroy Bold', fontSize: 15, color: '#535763'}}>
            Hỗ trợ
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity
        onPress={() => {
          navigation.navigate('OnBoarding');
        }}
        style={{marginTop: 10, flexDirection: 'row',}}>
        <Image 
        style={{width: 25, height: 25, justifyContent: 'center', marginRight: 5,}}
        source={require('../images/logout.png')}/>
        <Text style={{fontFamily: 'SVN-Gilroy Bold', fontSize: 15, color: '#E84479'}}>Đăng xuất</Text>
        </TouchableOpacity>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F2F4F6',
  },

  header: {
    flex: 1,
    marginHorizontal: 20,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#D1D3D4',
  },

  body: {
    flex: 8,
    paddingHorizontal: 20,
  },

  bottom: {
    flex: 1,
    marginHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#D1D3D4',
  },
});
export default Navbar_Guest;
