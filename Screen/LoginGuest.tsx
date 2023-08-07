import React from 'react';
import {Dimensions, KeyboardAvoidingView} from 'react-native';
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
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');

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
                  fontWeight: '800',
                  textAlign: 'center',
                  marginBottom: 30,
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
                onChangeText={onChangeText}
                placeholder="Phone Number"
                value={text}
                keyboardType="name-phone-pad"
              />
            </View>
            <View style={styles.input}>
              <Image
                style={{
                  marginRight: 5,
                  marginTop: 13,
                  width: 16,
                  height: '42%',
                  alignSelf: 'flex-start',
                }}
                source={require('../images/password.png')}
              />
              <TextInput
                style={{width: '100%'}}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Password"
                secureTextEntry
              />
            </View>
            <Text
              style={{
                textAlign: 'right',
                marginRight: 7,
                width: width / 1.1,
              }}>
              <TouchableOpacity>
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 14,
                    color: '#E84479',
                  }}>
                  Quên mật khẩu?
                </Text>
              </TouchableOpacity>
            </Text>
          </View>

          <View style={styles.bottom}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('GuestPhoneVerify');
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
                  fontFamily: 'UTM-Bebas',
                  textAlign: 'center',
                  color: 'white',
                  fontWeight: 'bold',
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
                  fontFamily: 'UTM-Bebas',
                  textAlign: 'center',
                  color: 'white',
                  fontWeight: 'bold',
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
