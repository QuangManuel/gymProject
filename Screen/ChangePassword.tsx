import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import {Alert, Dimensions, KeyboardAvoidingView, Platform} from 'react-native';
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
  const [password, setPassword] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [parsedUserData, setParsedUserData] = React.useState(null);

  React.useEffect(() => {
    // Lấy thông tin tài khoản từ AsyncStorage
    AsyncStorage.getItem('userData')
      .then(userData => {
        if (userData) {
          const parsedUserData = JSON.parse(userData);
          setParsedUserData(parsedUserData);
        }
      })
      .catch(error => {
        console.error('Error fetching user data: ', error);
      });
  }, []);

  const handleChangePassword = async () => {
    if (!parsedUserData) {
      Alert.alert('Error', 'User data not available.');
      return;
    }

    if (newPassword !== confirmPassword) {
      Alert.alert('Error', "New password and confirm password don't match.");
      return;
    }

    try {
      const userDataString = await AsyncStorage.getItem('userData');
      if (userDataString) {
        const userData = JSON.parse(userDataString);
        userData.pass = newPassword;
        userData.passConfirm = newPassword;
        await AsyncStorage.setItem('userData', JSON.stringify(userData));
        setPassword(newPassword);
        Alert.alert('Success', 'Password changed successfully.');
        navigation.navigate('PersonalInfo');
      } else if (parsedUserData.pass !== password) {
        Alert.alert('Error', 'Current password is incorrect.');
        return;
      }
    } catch (error) {
      console.error(error);
    }
  };

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

            <View
              style={{
                position: 'absolute',
                marginTop: 170,
              }}>
              <Text style={{fontWeight: '500', fontSize: 15, color: '#000000'}}>
                Thay đổi ảnh
              </Text>
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
                    value={newPassword}
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
                    onChangeText={setConfirmPassword}
                    secureTextEntry
                    value={confirmPassword}
                  />
                </View>
              </View>
            </View>
          </View>

          <View style={styles.bottom}>
            <TouchableOpacity
              onPress={handleChangePassword}
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
