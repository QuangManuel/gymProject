import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import {Alert, Dimensions} from 'react-native';
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
  TextInput,
  FlatList,
  Image,
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

function Main({navigation}: any): JSX.Element {
  const [phonenumber, setPhone] = React.useState('');
  const [otp, setOtp] = React.useState('');

  useEffect(() => {
    
    const fetchGuestPhoneNumber = async () => {
      const phoneNumber = await AsyncStorage.getItem('guestPhoneNumber');
      if (phoneNumber) {
        setPhone(phoneNumber);
      }
    };
  
    fetchGuestPhoneNumber();
  }, []);

  return (
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
        <View style={{alignItems: 'center', paddingHorizontal: 20}}>
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
              marginBottom: 0,
            }}>
            Xác thực mã OTP
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 17,
              fontWeight: '400',
              textAlign: 'center',
              marginBottom: 30,
            }}>
            OTP gồm 6 chữ số đã được gửi đến số điện thoại {phonenumber}
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
            onChangeText={setOtp}
            placeholder="OTP"
            value={otp}
            keyboardType="name-phone-pad"
          />
        </View>

        <Text
          style={{
            textAlign: 'right',
            marginRight: 7,
          }}>
          <TouchableOpacity>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 14,
                color: '#676767',
              }}>
              Không nhận được OTP?&nbsp;
              <Text style={{color: '#E84479'}}>Gửi lại mã</Text>
            </Text>
          </TouchableOpacity>
        </Text>
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity
          onPress={() => {
            if (otp.trim() !== '' && /^[0-9]{6}$/.test(otp)) {
              navigation.navigate('Home');
            } else {
              Alert.alert('Warning!','Vui lòng nhập mã OTP')
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
              fontFamily: 'UTM-Bebas',
              textAlign: 'center',
              color: 'white',
              fontWeight: 'bold',
            }}>
            Xác minh
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    flex: 2,
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

export default Main;
