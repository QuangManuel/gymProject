import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Dimensions, KeyboardAvoidingView, Platform} from 'react-native';
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

const {height} = Dimensions.get('window');
const {width} = Dimensions.get('window');

function Register({navigation}: any): JSX.Element {
  const [inputs, setInputs] = React.useState({
    username: "",
    phonenumber: "",
    email: "",
    birthday: "",
    pass: "",
    passConfirm: "",
  });

  const [errors, setErrors] = React.useState({});


  const validate = () => {
    let isValid = true;

    if (!inputs.username) {
      handleError("Vui lòng nhập Username", "username");
      isValid = false;
    }
    if (!inputs.phonenumber) {
      handleError("Vui lòng nhập Phone Number", "phonenumber");
      isValid = false;
    } else if (!inputs.phonenumber.match(/^[0-9]{10}$/)) {
      handleError("Vui lòng nhập Phone Number", "phonenumber");
      isValid = false;
    }
    if (!inputs.email) {
      handleError("Vui lòng nhập Email", "email");
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError("Vui lòng nhập Email", "email");
      isValid = false;
    }
    if (!inputs.birthday) {
      handleError("Vui lòng nhập Birthday", "birthday");
      isValid = false;
    } else if (!inputs.birthday.match(/^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/)) {
      handleError("Vui lòng nhập Birthday đúng định dạng MM/DD/YYYY", "birthday");
      isValid = false;
    }
    if (!inputs.pass) {
      handleError("Vui lòng nhập Password", "pass");
      isValid = false;
    } else if (inputs.pass.length < 8) {
      handleError("Password phải có tối thiểu 8 ký tự", "pass");
      isValid = false;
    }
    if (!inputs.passConfirm) {
      handleError("Vui lòng nhập Confirm Password", "passConfirm");
      isValid = false;
    } else if (inputs.passConfirm != inputs.pass) {
      handleError("Password không trùng khớp", "passConfirm");
      isValid = false;
    }

    if (isValid) register();
  };

  const register = () => {
    setTimeout(() => {
      try {
        AsyncStorage.setItem('userData', JSON.stringify(inputs));
        navigation.navigate('CCCD');
      } catch (error) {}
    }, 1000);
  }

  const handleOnChange = (text: string, input: string) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const handleError = (text: string, input: string) => {
    setErrors((prevState) => ({ ...prevState, [input]: text }));
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.container}>
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
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              color: 'black',
              fontSize: 33,
              fontFamily: 'UTM Bebas',
              textAlign: 'center',
              marginBottom: 30,
            }}>
            Tạo tài khoản
          </Text>
        </View>

        <View style={styles.input}>
          <Image
            style={{
              marginRight: 10,
              marginTop: 12,
              width: 20,
              height: '50%',
              alignSelf: 'flex-start',
            }}
            source={require('../images/username.png')}
          />
          <TextInput
            style={{width: '100%', fontFamily:'SVN-Gilroy Medium'}}
            onChangeText={ (text) => handleOnChange(text, "username") }
            placeholder="Username"
            onFocus={() => handleError(null, "username")}
            error={errors.username}
          />
        </View>
        {errors.username && <Text style={styles.textError}>{errors.username}</Text>}
        

        <View style={styles.input}>
        <Image
            style={{
              marginRight: 10,
              marginTop: 12,
              width: 18,
              height: '50%',
              alignSelf: 'flex-start',
            }}
            source={require('../images/phonenumber.png')}
          />
          <TextInput
            style={{width: '100%', fontFamily:'SVN-Gilroy Medium'}}
            onChangeText={ (text) => handleOnChange(text, "phonenumber") }
            placeholder="Phone Number"
            onFocus={() => handleError(null, "phonenumber")}
            error={errors.phonenumber}
          />
        </View>
        {errors.phonenumber && <Text style={styles.textError}>{errors.phonenumber}</Text>}

        <View style={styles.input}>
        <Image
            style={{
              marginRight: 10,
              marginTop: 15,
              width: 17,
              height: '42%',
              alignSelf: 'flex-start',
            }}
            source={require('../images/email.png')}
          />
          <TextInput
            style={{width: '100%', fontFamily:'SVN-Gilroy Medium'}}
            onChangeText={ (text) => handleOnChange(text, "email") }
            placeholder="Email"
            onFocus={() => handleError(null, "email")}
            error={errors.email}
          />
        </View>
        {errors.email && <Text style={styles.textError}>{errors.email}</Text>}

        <View style={styles.input}>
        <Image
            style={{
              marginRight: 10,
              marginTop: 13,
              width: 20,
              height: '42%',
              alignSelf: 'flex-start',
            }}
            source={require('../images/cake.png')}
          />
          <TextInput
            style={{width: '100%', fontFamily:'SVN-Gilroy Medium'}}
            onChangeText={ (text) => handleOnChange(text, "birthday") }
            placeholder="Birthday"
            onFocus={() => handleError(null, "birthday")}
            error={errors.birthday}
          />
        </View>
        {errors.birthday && <Text style={styles.textError}>{errors.birthday}</Text>}

        <View style={styles.input}>
        <Image
            style={{
              marginRight: 10,
              marginTop: 13,
              width: 16,
              height: '42%',
              alignSelf: 'flex-start',
            }}
            source={require('../images/password.png')}
          />
          <TextInput
            style={{width: '100%', fontFamily:'SVN-Gilroy Medium'}}
            placeholder="Password"
            onChangeText={ (text) => handleOnChange(text, "pass") }
            secureTextEntry
            onFocus={() => handleError(null, "pass")}
            error={errors.pass}
          />
        </View>
        {errors.pass && <Text style={styles.textError}>{errors.pass}</Text>}

        <View style={styles.input}>
        <Image
            style={{
              marginRight: 10,
              marginTop: 13,
              width: 16,
              height: '42%',
              alignSelf: 'flex-start',
            }}
            source={require('../images/password.png')}
          />
          <TextInput
            style={{width: '100%', fontFamily:'SVN-Gilroy Medium'}}
            placeholder="Confirm Password"
            onChangeText={ (text) => handleOnChange(text, "passConfirm") }
            secureTextEntry
            onFocus={() => handleError(null, "passConfirm")}
            error={errors.passConfirm}
          />
        </View>
        {errors.passConfirm && <Text style={styles.textError}>{errors.passConfirm}</Text>}
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity
          onPress={() => {
            validate();
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

  textError: {
    paddingHorizontal: 10,
    width: width / 1.1,
    flexDirection: 'row',
    color: "red",
    fontSize: 14,
  },
});

export default Register;
