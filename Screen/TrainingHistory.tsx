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

function TrainingHistory({navigation}: any): JSX.Element {
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
            LỊCH SỬ TẬP
          </Text>
        </View>
      </View>

      <View style={styles.body}>
        <View
          style={{
            ...styles.shadow,
            height: 80,
            width: '100%',
            marginTop: 10,
            backgroundColor: '#fff',
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 10,
            paddingHorizontal: 20
          }}>
          <View style={{flexDirection: 'column', flex: 1}}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={{flex: 1, fontFamily: 'SVN-Gilroy Bold', color: '#333333'}}>GYM QUẬN 10</Text>
              <Text style={{fontFamily: 'SVN-Gilroy Bold', color: '#333333'}}>27/07/2023 - 8:00</Text>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                }}>
                <Image 
                style={{width: 20, height: 20, marginRight: 4}}
                source={require('../images/username.png')}/>
                <Text style={{flex: 1, fontFamily: 'SVN-Gilroy Bold', color: '#333333'}}>PT: ĐĂNG KHOA</Text>
              </View>
            </View>
          </View>
        </View>
        
        <View
          style={{
            ...styles.shadow,
            height: 80,
            width: '100%',
            marginTop: 10,
            backgroundColor: '#fff',
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 10,
            paddingHorizontal: 20
          }}>
          <View style={{flexDirection: 'column', flex: 1}}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={{flex: 1, fontFamily: 'SVN-Gilroy Bold', color: '#333333'}}>GYM BÌNH CHÁNH</Text>
              <Text style={{fontFamily: 'SVN-Gilroy Bold', color: '#333333'}}>26/07/2023 - 15:20</Text>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                }}>
                <Image 
                style={{width: 20, height: 20, marginRight: 4}}
                source={require('../images/username.png')}/>
                <Text style={{flex: 1, fontFamily: 'SVN-Gilroy Bold', color: '#333333'}}>PT: HOÀNG PHÚC</Text>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            ...styles.shadow,
            height: 80,
            width: '100%',
            marginTop: 10,
            backgroundColor: '#fff',
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 10,
            paddingHorizontal: 20
          }}>
          <View style={{flexDirection: 'column', flex: 1}}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={{flex: 1, fontFamily: 'SVN-Gilroy Bold', color: '#333333'}}>GYM QUẬN 8</Text>
              <Text style={{fontFamily: 'SVN-Gilroy Bold', color: '#333333'}}>24/07/2023 - 9:28</Text>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                }}>
                <Image 
                style={{width: 20, height: 20, marginRight: 4}}
                source={require('../images/username.png')}/>
                <Text style={{flex: 1,fontFamily: 'SVN-Gilroy Bold', color: '#333333'}}>PT: MINH THIÊN</Text>
              </View>
            </View>
          </View>
        </View>

        
      </View>

      <View style={styles.bottom}>
        
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

  shadow: {
    shadowColor: '#9CA3AF',
    shadowRadius: 1,
    shadowOpacity: 1,
    elevation: 8,
    shadowOffset: {
      width: 0,
      height: 10,
    },
  },
});
export default TrainingHistory;
