import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions} from 'react-native';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  ImageBackground,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function OnBoarding({navigation}: any): JSX.Element {
  const {height} = Dimensions.get('window');
  return (
    <SafeAreaView style={styles.container}>
      {/* <View>
        <Text>Trang Kế bên nè</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Text>Quay về Home</Text>
        </TouchableOpacity>
      </View> */}

      <View style={styles.background}>
        <ImageBackground
          source={require('../images/home-thumbnail.jpg')}
          resizeMode="cover"
          style={styles.imageBackground}>
          <LinearGradient
            style={{
              height: height / 2,
              paddingHorizontal: 30,
            }}
            colors={[`rgba(0,0,0,0.1)`, '#000']}>
            <Text
              style={{
                fontSize: 32,
                fontFamily: 'UTM-Bebas',
                textAlign: 'center',
                color: 'white',
                fontWeight: 'bold',
              }}>
              GYMASTER{'\n'}
              <Text style={{fontSize: 27, fontFamily: 'regular'}}>
                Thay đổi để cuộc sống tốt hơn!
              </Text>
            </Text>

            <Text
              style={{
                fontSize: 20,
                fontFamily: 'UTM-Bebas',
                textAlign: 'center',
                color: 'white',
                marginTop: 30,
              }}>
              đừng lãng phí thời gian và bắt đầu cuộc sống mới cùng GYMASTER
              ngay hôm nay!
            </Text>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Register');
              }}
              style={{
                backgroundColor: '#E84479',
                marginTop: 20,
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
                GET STARTED
              </Text>
            </TouchableOpacity>

            <Text
              style={{
                marginTop: 20,
                justifyContent: 'center',
                fontSize: 18,
                fontFamily: 'UTM-Bebas',
                textAlign: 'center',
                color: 'white',
                fontWeight: 'bold',
              }}>
              <Text>Đã có tài khoản?&nbsp;</Text>
              <Text
                style={{color: '#E84479'}}
                onPress={() => {
                  navigation.navigate('Login');
                }}>
                Đăng nhập ngay
              </Text>
            </Text>
          </LinearGradient>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },

  background: {
    flex: 1,
    backgroundColor: 'red',
  },

  imageBackground: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default OnBoarding;
