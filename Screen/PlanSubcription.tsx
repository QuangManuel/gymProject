import React from 'react';
import {Dimensions} from 'react-native';
import {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
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

function PlanSubcription({navigation}: any): JSX.Element {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');

  const plans = [
    {
      name: '1 Tháng',
      price: '300.000VNĐ',
      icon: require('../images/standard_icon.png'),
      background: require('../images/normalplan.png'),
    },
    {
      name: '2 Tháng',
      price: '570.000VNĐ (TIẾT KIỆM 5%)',
      icon: require('../images/standard_icon.png'),
      background: require('../images/normalplan.png'),
    },
    {
      name: '3 Tháng',
      price: '810.000VNĐ (TIẾT KIỆM 10%)',
      icon: require('../images/standard_icon.png'),
      background: require('../images/normalplan.png'),
    },
    {
      name: '6 Tháng',
      price: '1.500.000VNĐ (TIẾT KIỆM 15%)',
      icon: require('../images/premium_icon.png'),
      background: require('../images/normalplan.png'),
    },
    {
      name: '1 Năm luôn ní',
      price: '2.900.000VNĐ (TIẾT KIỆM 20%)',
      icon: require('../images/premium_icon.png'),
      background: require('../images/normalplan.png'),
    },
  ];
  const [selectedPlan, setSelectedPlan] = useState(plans[0].name);

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

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
            Chọn gói tập đi ní
          </Text>
        </View>

        <View style={styles.planSelection}>
          {plans.map(plan => (
            <TouchableOpacity
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
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Payment');
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
            Thanh Toán
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
});

export default PlanSubcription;
