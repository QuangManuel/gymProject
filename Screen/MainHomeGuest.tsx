import React from 'react';
import {Dimensions, KeyboardAvoidingView} from 'react-native';
import Swiper from 'react-native-swiper';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

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
import LinearGradient from 'react-native-linear-gradient';

const {height} = Dimensions.get('window');
const {width} = Dimensions.get('window');

function MainHomeGuest({navigation}: any): JSX.Element {
  const [text, onChangeText] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.topBar}>
          <View style={styles.appLogo}>
            <Image
              style={{width: 45, height: 45}}
              source={require('../images/gym_logo.png')}
            />
          </View>

          <View style={styles.profileLogo}>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Navbar_Guest');
              }}>
              <Image
                style={{
                  width: 45,
                  height: 45,
                  borderRadius: 100,
                  justifyContent: 'center',
                  backgroundColor: '#C4C4C4'
                }}
                source={require('../images/gymaster_logo.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <KeyboardAvoidingView
        style={{flex: 8}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.body}>
            <View style={[styles.nearAddress, shadow]}>
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 100,
                  marginRight: 5,
                  justifyContent: 'center',
                }}>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                  }}
                  source={require('../images/kinhlup.png')}
                />
              </View>

              <TextInput
                style={{
                  width: '100%',
                  fontFamily: 'UTM Bebas',
                  fontSize: 17,
                }}
                onChangeText={onChangeText}
                placeholder="TÌM KIẾM ĐỊA ĐIỂM GẦN NHẤT?"
                value={text}
                keyboardType="name-phone-pad"
              />
            </View>

            <View style={styles.swiperList}>
              <Swiper
                loop
                autoplay // Enable automatic sliding
              >
                <ImageBackground
                  style={{...styles.imageSwiper}}
                  resizeMode="cover"
                  source={require('../images/bannerswipe.jpg')}>
                  <LinearGradient
                    style={{
                      height: height / 1,
                      paddingHorizontal: 30,
                      flex: 1,
                      justifyContent: 'flex-end',
                    }}
                    useAngle={true}
                    angle={-90}
                    angleCenter={{x: 0.2, y: 0.5}}
                    colors={[`rgba(0,0,0,0.0)`, '#000']}>
                    <Text
                      style={{fontSize: 25, color: '#fff', fontFamily: 'UTM Bebas'}}>
                      PHÒNG TẬP GẦN ĐÂY
                    </Text>

                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('Home');
                      }}
                      style={{
                        backgroundColor: '#E84479',
                        marginTop: 10,
                        paddingHorizontal: 10,
                        borderRadius: 10,
                        height: 40,
                        width: 100,
                        justifyContent: 'center',
                        marginBottom: 20,
                      }}>
                      <Text
                        style={{
                          fontSize: 20,
                          fontFamily: 'UTM Bebas',
                          textAlign: 'center',
                          color: 'white',
                        }}>
                        KHÁM PHÁ
                      </Text>
                    </TouchableOpacity>
                  </LinearGradient>
                </ImageBackground>

                <ImageBackground
                  style={{...styles.imageSwiper}}
                  resizeMode="cover"
                  source={require('../images/home-thumbnail.jpg')}>
                  <LinearGradient
                    style={{
                      height: height / 1,
                      paddingHorizontal: 30,
                      flex: 1,
                      justifyContent: 'flex-end',
                    }}
                    useAngle={true}
                    angle={-90}
                    angleCenter={{x: 0.2, y: 0.5}}
                    colors={[`rgba(0,0,0,0.0)`, '#000']}>
                    <Text
                      style={{fontSize: 25, color: '#fff', fontFamily: 'UTM Bebas'}}>
                      THỰC PHẨM CHỨC NĂNG
                    </Text>

                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('Home');
                      }}
                      style={{
                        backgroundColor: '#E84479',
                        marginTop: 10,
                        paddingHorizontal: 10,
                        borderRadius: 10,
                        height: 40,
                        width: 100,
                        justifyContent: 'center',
                        marginBottom: 20,
                      }}>
                      <Text
                        style={{
                          fontSize: 20,
                          fontFamily: 'UTM Bebas',
                          textAlign: 'center',
                          color: 'white',
                        }}>
                        KHÁM PHÁ
                      </Text>
                    </TouchableOpacity>
                  </LinearGradient>
                </ImageBackground>
              </Swiper>
            </View>

            <View style={{marginTop: 20}}>
              <Text style={{fontSize: 25, fontFamily: 'UTM Bebas'}}>
                DỊCH VỤ NỔI BẬT
              </Text>
            </View>

            <View style={styles.serviceBanner}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View style={{marginRight: 15, height: 500}}>
                  <View style={styles.serviceImage}>
                    <Image
                      style={{
                        height: '100%',
                        width: 250,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                      }}
                      source={require('../images/bannerswipe.jpg')}
                    />
                  </View>

                  <View style={[styles.serviceContent, shadow]}>
                    <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text
                        style={{
                          fontSize: 16,
                          marginBottom: -10,
                          fontFamily: 'UTM Bebas'
                        }}>
                        FITNESS
                      </Text>
                      <Text
                        style={{
                          marginVertical: 10,
                          fontFamily: 'UTM Bebas',
                          fontSize: 25,
                          color: 'black',
                        }}>
                        THUÊ TRAINER
                      </Text>
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('Home');
                        }}
                        style={{
                          backgroundColor: '#E84479',
                          paddingHorizontal: 10,
                          borderRadius: 15,
                          height: 40,
                          width: 100,
                          justifyContent: 'center',
                        }}>
                        <Text
                          style={{
                            fontSize: 17,
                            fontFamily: 'UTM Bebas',
                            textAlign: 'center',
                            color: 'white',
                          }}>
                          TÌM HIỂU NGAY
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                <View style={{marginRight: 15}}>
                  <View style={styles.serviceImage}>
                    <Image
                      style={{
                        height: '100%',
                        width: 250,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                      }}
                      source={require('../images/bannerswipe.jpg')}
                    />
                  </View>

                  <View style={[styles.serviceContent, shadow]}>
                    <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text
                        style={{
                          fontSize: 16,
                          marginBottom: -10,
                          fontFamily: 'UTM Bebas'
                        }}>
                        HỖ TRỢ
                      </Text>
                      <Text
                        style={{
                          marginVertical: 10,
                          fontFamily: 'UTM Bebas',
                          fontSize: 25,
                          color: 'black',
                        }}>
                        THỰC PHẨM CHỨC NĂNG
                      </Text>
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('Home');
                        }}
                        style={{
                          backgroundColor: '#E84479',
                          paddingHorizontal: 10,
                          borderRadius: 15,
                          height: 40,
                          width: 100,
                          justifyContent: 'center',
                        }}>
                        <Text
                          style={{
                            fontSize: 17,
                            fontFamily: 'UTM Bebas',
                            textAlign: 'center',
                            color: 'white',
                          }}>
                          tìm hiểu ngay
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </ScrollView>
            </View>

            <ImageBackground
              style={{
                height: 79,
                borderRadius: 20,
                marginTop: 20,
              }}
              source={require('../images/normalplan.png')}>
              <View
                style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  style={{
                    height: 70,
                    width: 70,
                    justifyContent: 'center',
                    marginRight: 10,
                  }}
                  source={require('../images/standard_icon.png')}></Image>
                <Text
                  style={{color: '#E84479', fontSize: 25, fontFamily:'UTM Bebas'}}>
                  GIẢM GIÁ ĐẾN 20% {'\n'}
                  <Text style={{fontSize: 17, color: 'white'}}>
                    TOÀN BỘ CHƯƠNG TRÌNH
                  </Text>
                </Text>
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <View style={styles.bottom}>
        <TouchableOpacity
          style={styles.bottomTabs}
          onPress={() => {
            navigation.navigate('MainHome');
          }}>
          <Image
            style={{width: 25, height: 25}}
            source={require('../images/home.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomTabs}>
          <Image
            style={{width: 21, height: 27}}
            source={require('../images/location.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomTabs}>
          <Image
            style={{width: 25, height: 25}}
            source={require('../images/kinhlup.png')}
          />
        </TouchableOpacity>
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
    paddingHorizontal: 20,
    textAlign: 'right',
    flex: 1,
    alignItems: 'flex-end',
  },

  topBar: {
    flexDirection: 'row',
    paddingVertical: 15,
    width: '100%',
    flex: 1,
  },

  appLogo: {
    flex: 1,
    textAlign: 'left',
    justifyContent: 'center',
  },

  profileLogo: {
    flex: 1,
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  // top: {
  //   backgroundColor: 'gray',
  //   flex: 1,
  // },

  body: {
    backgroundColor: '#F2F4F6',
    flex: 8,
    padding: 20,
  },

  nearAddress: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    height: 50,
    borderRadius: 7,
    paddingHorizontal: 15,
    alignItems: 'center',
  },

  swiperList: {
    marginTop: 20,
    height: 200,
  },

  imageSwiper: {
    flex: 1,
    height: 200,
    borderTopRightRadius: 10,
    justifyContent: 'flex-end',
  },

  serviceBanner: {
    marginTop: 10,
    width: '100%',
    height: 250,
    borderRadius: 10,
    flexDirection: 'row',
  },

  serviceImage: {
    height: 130,
    borderRadius: 10,
  },

  serviceContent: {
    height: 120,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
  },

  bottom: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
  },

  bottomTabs: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const shadow = {
  shadowColor: '#9CA3AF',
  shadowRadius: 1,
  shadowOpacity: 1,
  elevation: 8,
  shadowOffset: {
    width: 0,
    height: 10,
  },
};

export default MainHomeGuest;
