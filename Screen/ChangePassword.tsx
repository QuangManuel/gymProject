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

function ChangePassword({navigation}: any): JSX.Element {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [newpassword, setNewPassword] = useState('');
  const [confirmpassword, confirmPassword] = useState('');

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerStyle={styles.container}>
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <View
              style={{
                backgroundColor: '#778591',
                width: '100%',
                height: '130%',
                alignItems: 'center',
              }}>
              <View
                style={{
                  position: 'absolute',
                  marginTop: 40,
                  borderRadius: 100,
                  borderWidth: 5,
                  borderColor: '#F2F4F6',
                }}>
                <Image
                  style={{width: 120, height: 120, borderRadius: 100}}
                  source={require('../images/avatar.jpg')}
                />
              </View>
            </View>
          </View>

          <View style={styles.body}>
            <View>
              <Text
                style={{fontWeight: '600', color: '#000000', marginTop: 15}}>
                Password
              </Text>

              <View style={styles.input}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <TextInput
                    style={{flex: 8}}
                    onChangeText={setPassword}
                    secureTextEntry
                    value={password}
                  />
                </View>
              </View>
            </View>

            <View>
              <Text
                style={{fontWeight: '600', color: '#000000', marginTop: 15}}>
                New Password
              </Text>

              <View style={styles.input}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <TextInput
                    style={{flex: 8}}
                    onChangeText={setNewPassword}
                    secureTextEntry
                    value={newpassword}
                  />
                </View>
              </View>
            </View>

            <View>
              <Text
                style={{fontWeight: '600', color: '#000000', marginTop: 15}}>
                Confirm Password
              </Text>

              <View style={styles.input}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <TextInput
                    style={{flex: 8}}
                    onChangeText={confirmPassword}
                    secureTextEntry
                    value={confirmpassword}
                  />
                </View>
              </View>
            </View>
          </View>

          <View style={styles.bottom}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('PersonalInfo');
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
                CẬP NHẬT
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
    backgroundColor: '#F2F4F6',
  },

  header: {
    flex: 10,
    backgroundColor: 'red',
    alignItems: 'center',
  },

  body: {
    flex: 10,
    paddingHorizontal: 20,
    marginTop: 200,
  },

  bottom: {
    flex: 2,
    paddingHorizontal: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: '#A8A8A9',
    paddingHorizontal: 2,
    width: '100%',
    marginTop: 5,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#F3F3F3',
    color: '#676767',
    flexDirection: 'row',
  },
});
export default ChangePassword;
