import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
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

function Navbar({navigation}: any): JSX.Element {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const userDataString = await AsyncStorage.getItem('userData');
        if (userDataString) {
          const userData = JSON.parse(userDataString);
          setUsername(userData.username);
          setEmail(userData.email);
          console.log(userData)
        }
      } catch (error) {}
    };

    fetchInfo();
  }, []);

  const logout=() => {
    navigation.navigate('OnBoarding');
  }
  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Image
            style={{width: 50, height: 50, borderRadius: 100}}
            source={require('../images/avatar.jpg')}
          />
        </View>

        <View
          style={{
            flex: 5,
            justifyContent: 'center',
            flexDirection: 'column',
            paddingHorizontal: 13,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 16, color: 'black'}}>
            {username}
          </Text>
          <Text style={{color: '#535763'}}>{email}</Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('MainHome');
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
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('PersonalInfo');
          }}
          style={{
            height: 50,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Image
              style={{width: 25, height: 25, justifyContent: 'center', marginRight: 5,}}
              source={require('../images/profileinfo.png')}
            />
          </View>

          <Text style={{justifyContent: 'center', flex: 9, fontWeight: 'bold', fontSize: 15, color: '#535763'}}>
            Cập nhật thông tin cá nhân
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('TrainingHistory');
          }}
          style={{
            height: 50,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Image
              style={{width: 25, height: 25, justifyContent: 'center', marginRight: 5,}}
              source={require('../images/history.png')}
            />
          </View>

          <Text style={{justifyContent: 'center', flex: 9, fontWeight: 'bold', fontSize: 15, color: '#535763'}}>
            Lịch sử tập
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('PersonalInfo');
          }}
          style={{
            height: 50,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Image
              style={{width: 25, height: 27, justifyContent: 'center', marginRight: 5,}}
              source={require('../images/quanly.png')}
            />
          </View>

          <Text style={{justifyContent: 'center', flex: 9, fontWeight: 'bold', fontSize: 15, color: '#535763'}}>
            Quản lý gói tập
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('PersonalInfo');
          }}
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

          <Text style={{justifyContent: 'center', flex: 9, fontWeight: 'bold', fontSize: 15, color: '#535763'}}>
            Khuyến mãi
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={()=>{Linking.openURL('tel:8777111223');
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

          <Text style={{justifyContent: 'center', flex: 9, fontWeight: 'bold', fontSize: 15, color: '#535763'}}>
            Hỗ trợ
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity
        onPress={() => {
          logout();
        }}
        style={{marginTop: 10, flexDirection: 'row',}}>
        <Image 
        style={{width: 25, height: 25, justifyContent: 'center', marginRight: 5,}}
        source={require('../images/logout.png')}/>
        <Text style={{fontWeight: 'bold', fontSize: 15, color: '#E84479'}}>Đăng xuất</Text>
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
export default Navbar;
