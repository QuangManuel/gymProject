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

function Navbar({navigation}: any): JSX.Element {
  const [text, onChangeText] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            flex: 5,
            justifyContent: 'center',
            flexDirection: 'column',
            paddingHorizontal: 13,
          }}>
          <Text style={{fontFamily: 'UTM Bebas', fontSize: 25, color: 'black'}}>
            QUẢN LÝ GÓI TẬP
          </Text>
        </View>
      </View>

      <View style={styles.body}>
        <View>
          <ImageBackground
            style={{
              height: 79,
              borderRadius: 20,
              marginTop: 20,
            }}
            source={require('../images/normalplan.png')}>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={{
                  height: 70,
                  width: 70,
                  justifyContent: 'center',
                  marginRight: 10,
                }}
                source={require('../images/standard_icon.png')}></Image>
              <Text
                style={{color: '#E84479', fontFamily: 'UTM Bebas', fontSize: 25}}>
                GÓI TẬP HIỆN TẠI{'\n'}
                <Text style={{fontSize: 20, color: 'white'}}>1 THÁNG</Text>
              </Text>
            </View>
          </ImageBackground>
        </View>

        <View style={{marginTop: 20, height: 35, flexDirection: 'row'}}>
          <Text style={{fontFamily: 'SVN-Gilroy Bold', fontSize: 15 , width: 110 ,marginRight: 10}}>Ngày đăng ký:</Text>
          <Text style={{fontFamily: 'SVN-Gilroy Bold', fontSize: 15}}>10/08/2023</Text>
        </View>

        <View style={{marginTop: 10, height: 35, flexDirection: 'row'}}>
          <Text style={{fontFamily: 'SVN-Gilroy Bold', fontSize: 15, width: 110 ,marginRight: 10}}>Ngày hết hạn:</Text>
          <Text style={{fontFamily: 'SVN-Gilroy Bold', fontSize: 15}}>10/09/2023</Text>
        </View>
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
