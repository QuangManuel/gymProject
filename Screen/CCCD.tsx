import React from 'react';
import {Dimensions} from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';
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

function CCCD({navigation}: any): JSX.Element {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  const [{ cameraRef }, { takePicture }] = useCamera(null);
  const captureHandle = async () => {
    try {
      const data = await takePicture();
    } catch (error) {}
  }

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
        <View style={{alignItems: 'center', paddingHorizontal: 20,
}}>
          <Text
            style={{
              color: 'black',
              fontSize: 33,
              fontFamily: 'UTM Bebas',
              textAlign: 'center',
            }}>
            Xác minh danh tính
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 17,
              fontFamily: 'SVN-Gilroy Medium',
              textAlign: 'center',
              marginBottom: 30,
            }}>
            Vui lòng chụp ảnh căn cước cá nhân để chúng tôi xác minh đó là bạn.
          </Text>
        </View>

        <View style={styles.input}>
          <RNCamera
            ref={cameraRef}
            type={RNCamera.Constants.Type.front}
            style={styles.preview}
          >
            <TouchableOpacity
              onPress={() => captureHandle()}
              style={{
                backgroundColor: '#E84479',
                marginTop: 10,
                paddingHorizontal: 30,
                borderRadius: 100,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'UTM Bebas',
                  textAlign: 'center',
                  color: 'white',
                }}>
                Chụp ảnh
              </Text>
            </TouchableOpacity>
          </RNCamera>
        </View>

      </View>

      <View style={styles.bottom}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('MembershipPhoneVerify');
          }}
          style={{
            backgroundColor: '#E84479',
            marginTop: 10,
            paddingHorizontal: 30,
            borderRadius: 100,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'UTM Bebas',
              textAlign: 'center',
              color: 'white',
            }}>
            Tiếp theo
          </Text>
          <Image
            style={{
              marginLeft: 5,
              marginTop: 15,
              width: 20,
              height: '42%',
              alignSelf: 'flex-start',
            }}
            source={require('../images/RightArrow.png')}
          />
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
    width: 300,
    height: 300,
    borderRadius: 8,
    backgroundColor: '#F3F3F3',
    color: '#676767',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  preview: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

export default CCCD;
