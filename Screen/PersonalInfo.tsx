import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import {Dimensions, KeyboardAvoidingView, Platform} from 'react-native';
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

function PersonalInfo({navigation}: any): JSX.Element {
  const [username, setUsername] = React.useState('');
  const [pass, setPass] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phonenumber, setPhone] = React.useState('');
  const [newUsername, setNewUsername] = React.useState('');

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const userDataString = await AsyncStorage.getItem('userData');
        if (userDataString) {
          const userData = JSON.parse(userDataString);
          setUsername(userData.username);
          setPass(userData.pass);
          setEmail(userData.email);
          setPhone(userData.phonenumber);
          console.log(userData)
        }
      } catch (error) {}
    };

    fetchInfo();
  }, []);

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
                height: '240%',
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
              <Text style={{fontWeight: '600', color: '#000000'}}>
                Username
              </Text>

              <View style={styles.input}>
                <TextInput
                  style={{width: '100%'}}
                  placeholder={username}
                  onChangeText={setNewUsername}
                  editable={true}
                />
              </View>
            </View>

            <View>
              <Text
                style={{fontWeight: '600', color: '#000000', marginTop: 15}}>
                Password
              </Text>

              <View style={styles.input}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <TextInput
                    style={{flex: 8}}
                    value={pass}
                    secureTextEntry
                    editable={false}
                  />

                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('ChangePassword');
                    }}
                    style={{
                      flex: 2,
                      alignSelf: 'center',
                    }}>
                    <Text style={{color: '#E84479', fontWeight: '500'}}>
                      Thay đổi
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View>
              <Text
                style={{fontWeight: '600', color: '#000000', marginTop: 15}}>
                Email
              </Text>

              <View style={styles.input}>
                <TextInput
                  style={{width: '100%'}}
                  value={email}
                  editable={false}
                />
              </View>
            </View>

            <View>
              <Text
                style={{fontWeight: '600', color: '#000000', marginTop: 15}}>
                Phone Number
              </Text>

              <View style={styles.input}>
                <TextInput
                  style={{width: '100%'}}
                  value={phonenumber}
                  editable={false}
                />
              </View>
            </View>
          </View>

          <View style={styles.bottom}>
            <TouchableOpacity
              onPress={() => {
                const updateInfo = async () => {
                  try {
                    const userDataString = await AsyncStorage.getItem('userData');
                    if (userDataString) {
                      const userData = JSON.parse(userDataString);
                      userData.username = newUsername; // Update the username
                      await AsyncStorage.setItem('userData', JSON.stringify(userData));
                      setUsername(newUsername); // Update the state with the new username
                      setNewUsername(''); // Clear the new username input
                      navigation.navigate('MainHome');
                    }
                  } catch (error) {
                    console.error(error);
                  }
                };
          
                updateInfo();
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
export default PersonalInfo;
