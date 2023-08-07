import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function Home({navigation}: any): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      {/* PHẦN HEADER  */}
      <View style={styles.header}>
      <TouchableOpacity
          onPress={() => {
            navigation.navigate('OnBoarding');
          }}>
          <Text>Qua trang màn hình chờ</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Payment');
          }}>
          <Text>Qua trang thanh toán luôn</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.btnLogin}
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text>Qua Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
  header: {
    flex:1, 
    backgroundColor:'green'
  },

  body: {
    flex:8,
    backgroundColor:'yellow'
  },

  footer: {
    flex:1
  },
  btnLogin: {
    borderWidth: 1,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});

export default Home;
