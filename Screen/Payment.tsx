import React, { useEffect } from 'react';
import {Dimensions, KeyboardAvoidingView} from 'react-native';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Modal,
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

function Payment({navigation}: any): JSX.Element {
  const [text, cardNumber] = React.useState('');
  const [number, dateExpire] = React.useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

  const plans = [
    {
      name: '1 Tháng',
      price: '300.000VNĐ',
      icon: require('../images/standard_icon.png'),
      background: require('../images/normalplan.png'),
    },
  ];
  const [selectedPlan, setSelectedPlan] = useState(plans[0].name);

  const handlePlanSelect = plan => {
    setSelectedPlan(plan);
  };

  useEffect(() => {
    if (modalVisible && isPaymentSuccessful) {
      const timer = setTimeout(() => {
        setModalVisible(false);
        setIsPaymentSuccessful(false);
        navigation.navigate('MainHome'); 
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [modalVisible, isPaymentSuccessful, navigation]);

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerStyle={styles.container}>
        <SafeAreaView style={styles.container}>
          <View style={styles.body}>
            <View
              style={{alignItems: 'center', marginVertical: 20, width: 330}}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 24,
                  fontWeight: '800',
                  textAlign: 'center',
                  marginBottom: 0,
                }}>
                Chọn phương thức thanh toán
              </Text>
            </View>

            <View style={styles.container}>
              {plans.map(plan => (
                <View
                  key={plan.name}
                  style={[
                    styles.planButton,
                    selectedPlan === plan.name
                      ? styles.selectedPlan
                      : styles.unselectedPlan,
                  ]}
                  onPress={() => handlePlanSelect(plan.name)}>
                  <ImageBackground
                    source={plan.background}
                    style={styles.backgroundImage}
                    resizeMode="cover"
                    imageStyle={styles.backgroundImageStyle}>
                    <View style={styles.iconContainer}>
                      <Image
                        source={plan.icon}
                        style={styles.planIcon}
                        resizeMode="contain"
                      />
                    </View>

                    <View style={styles.planContainer}>
                      <View style={styles.planTextContainer}>
                        <Text
                          style={
                            selectedPlan === plan.name
                              ? styles.selectedText
                              : styles.unselectedText
                          }>
                          {plan.name}
                        </Text>
                      </View>

                      <View style={styles.planTextContainer}>
                        <Text
                          style={
                            selectedPlan === plan.name
                              ? styles.selectedText
                              : styles.unselectedText
                          }>
                          {plan.price}
                        </Text>
                      </View>
                    </View>
                  </ImageBackground>
                </View>
              ))}
            </View>

            <Image
              source={{uri: 'https://pngimg.com/d/credit_card_PNG23.png'}}
              style={{width: 360, height: 225}}
            />

            <View style={styles.input}>
              <TextInput
                style={{width: '100%'}}
                placeholder="Credit Card Number"
                value={cardNumber}
                keyboardType="name-phone-pad"
              />
            </View>

            <View style={styles.dateCVV}>
              <View style={styles.dateInput}>
                <TextInput
                  style={{width: '100%'}}
                  placeholder="Date Expires"
                  value={dateExpire}
                  keyboardType="name-phone-pad"
                />
              </View>

              <View style={styles.dateInput}>
                <TextInput
                  style={{width: '100%'}}
                  placeholder="Date Expires"
                  value={cardNumber}
                  keyboardType="name-phone-pad"
                />
              </View>
            </View>

            <View style={styles.input}>
              <TextInput
                style={{width: '100%'}}
                placeholder="Name"
                value={cardNumber}
                keyboardType="name-phone-pad"
              />
            </View>
          </View>

          <View style={styles.bottom}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(false);
                setIsPaymentSuccessful(false);
              }}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  {isPaymentSuccessful ? (
                    <>
                      <Image
                        source={require('../images/greentick.png')}
                        style={{width: 70, height: 70}}
                      />
                      <Text style={styles.modalText}>
                        Thanh toán thành công
                      </Text>
                      <Pressable
                        onPress={() => {
                          setModalVisible(false);
                          setIsPaymentSuccessful(false);
                        }}>
                      </Pressable>
                    </>
                  ) : (
                    <ActivityIndicator size="large" color="#0000ff" />
                  )}
                </View>
              </View>
            </Modal>

            <TouchableOpacity
              onPress={() => {
                setIsPaymentSuccessful(true);
                setModalVisible(true);
              }}
              style={{
                backgroundColor: '#29BF25',
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
                Đăng ký thôi
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottom: {
    flex: 1,
    paddingHorizontal: 30,
    marginTop: 30,
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

  planSelection: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    width: '100%',
  },

  planButton: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
    borderRadius: 10,
  },
  backgroundImage: {
    width: 330,
    height: 67,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  backgroundImageStyle: {
    borderRadius: 10,
  },
  iconContainer: {
    marginRight: 5,
  },
  planIcon: {
    width: 60,
    height: 60,
  },
  planContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  planTextContainer: {
    justifyContent: 'center',
  },
  selectedPlan: {
    backgroundColor: '#f1f1f1',
  },
  unselectedPlan: {
    backgroundColor: '#f1f1f1',
  },
  selectedText: {
    color: '#E84479',
    fontSize: 16,
    fontWeight: 'bold',
  },
  unselectedText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  payBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  dateCVV: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    height: 50,
    paddingHorizontal: 13,
    textAlign: 'center',
  },

  dateInput: {
    margin: 5,
    borderWidth: 1,
    borderColor: '#A8A8A9',
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: '#F3F3F3',
    color: '#676767',
    flex: 1,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  modalText: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default Payment;
