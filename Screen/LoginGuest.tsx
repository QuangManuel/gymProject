import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {Alert, Dimensions, KeyboardAvoidingView, Platform} from 'react-native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
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

const {height} = Dimensions.get('window');
const {width} = Dimensions.get('window');

function LoginGuest({navigation}: any): JSX.Element {
  const [phonenumber, setPhone] = React.useState('');
  const phoneNumberRegex = /^[0-9]{10}$/;

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerStyle={styles.container}>
        <SafeAreaView style={styles.container}>
          {/* <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Text style={{paddingHorizontal: 10, color: 'white'}}>Back</Text>
        </TouchableOpacity>
      </View> */}

          <View style={styles.body}>
            <View style={{alignItems: 'center'}}>
              <Image
                style={{
                  width: 150,
                  height: 150,
                  marginBottom: 10,
                }}
                source={require('../images/gymaster_logo_pink.png')}
              />
              <Text
                style={{
                  color: 'black',
                  fontSize: 33,
                  textAlign: 'center',
                  marginBottom: 30,
                  fontFamily: 'UTM Bebas',
                }}>
                Đăng nhập Khách
              </Text>
            </View>

            <View style={styles.input}>
              <Image
                style={{
                  marginRight: 5,
                  marginTop: 12,
                  width: 18,
                  height: '50%',
                  alignSelf: 'flex-start',
                }}
                source={require('../images/phonenumber.png')}
              />
              <TextInput
                style={{width: '100%'}}
                onChangeText={setPhone}
                placeholder="Phone Number"
                value={phonenumber}
                keyboardType="name-phone-pad"
              />
            </View>
          </View>

          <View style={styles.bottom}>
            <TouchableOpacity
              onPress={async () => {
                if (
                  phonenumber.trim() !== '' &&
                  phoneNumberRegex.test(phonenumber)
                ) {
                  await AsyncStorage.setItem('guestPhoneNumber', phonenumber);
                  navigation.navigate('GuestPhoneVerify', {
                    phoneNumber: phonenumber,
                  });
                } else {
                  Alert.alert('Warning!', 'Vui lòng nhập số điện thoại');
                }
              }}
              style={{
                backgroundColor: '#E84479',
                marginTop: 10,
                paddingHorizontal: 30,
                borderRadius: 100,
                height: 50,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'UTM Bebas',
                  textAlign: 'center',
                  color: 'white',
                }}>
                Đăng nhập
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Login');
              }}
              style={{
                backgroundColor: '#939393',
                marginTop: 10,
                paddingHorizontal: 30,
                borderRadius: 100,
                height: 50,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'UTM Bebas',
                  textAlign: 'center',
                  color: 'white',
                }}>
                Đăng nhập thành viên
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
  },

  header: {
    backgroundColor: 'red',
    width: 70,
    height: 50,
    flex: 1,
    justifyContent: 'center',
  },

  top: {
    backgroundColor: 'gray',
    flex: 1,
    justifyContent: 'center',
  },

  body: {
    backgroundColor: '#FFFFFF',
    flex: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottom: {
    flex: 4,
    paddingHorizontal: 30,
  },

  input: {
    margin: 5,
    borderWidth: 1,
    borderColor: '#A8A8A9',
    paddingHorizontal: 10,
    width: width / 1.1,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#F3F3F3',
    color: '#676767',
    flexDirection: 'row',
  },
});

export default LoginGuest;
