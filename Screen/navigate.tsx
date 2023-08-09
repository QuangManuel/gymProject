import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
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

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import OnBoarding from './OnBoarding';
import Login from './Login';
import LoginGuest from './LoginGuest';
import GuestPhoneVerify from './GuestPhoneVerify';
import Register from './Register';
import CCCD from './CCCD';
import MembershipPhoneVerify from './MembershipPhoneVerify';
import PlanSubcription from './PlanSubcription';
import Payment from './Payment';
import PaymentSuccess from './MainHome';
import Main from './GuestPhoneVerify';
import MainHome from './MainHome';
import Navbar from './Navbar';
import PersonalInfo from './PersonalInfo';
import ChangePassword from './ChangePassword';
import TrainingHistory from './TrainingHistory';
import MainHomeGuest from './MainHomeGuest';
import Navbar_Guest from './Navbar_Guest';
import SubManage from './SubManage';

const Stack = createNativeStackNavigator();

function navigate(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="OnBoarding" component={OnBoarding} />

        <Stack.Screen name="Login" component={Login} options={{ headerShown: true }}/>

        <Stack.Screen name="LoginGuest" component={LoginGuest} options={{ headerShown: true }}/>

        <Stack.Screen name="GuestPhoneVerify" component={GuestPhoneVerify} options={{ headerShown: true }}/>

        <Stack.Screen name="Register" component={Register} options={{ headerShown: true }}/>

        <Stack.Screen name="CCCD" component={CCCD} options={{ headerShown: true }}/>

        <Stack.Screen name="MembershipPhoneVerify" component={MembershipPhoneVerify} options={{ headerShown: true }}/>

        <Stack.Screen name="PlanSubcription" component={PlanSubcription} options={{ headerShown: true }} />

        <Stack.Screen name="Payment" component={Payment} options={{ headerShown: true }} />

        <Stack.Screen name="MainHome" component={MainHome} options={{ headerShown: false }} />

        <Stack.Screen name="MainHomeGuest" component={MainHomeGuest} options={{ headerShown: false }} />

        <Stack.Screen name="Navbar" component={Navbar} options={{ headerShown: false }} />
        
        <Stack.Screen name="Navbar_Guest" component={Navbar_Guest} options={{ headerShown: false }} />

        <Stack.Screen name="PersonalInfo" component={PersonalInfo} options={{ headerShown: true }} />

        <Stack.Screen name="ChangePassword" component={ChangePassword} options={{ headerShown: true }} />
        
        <Stack.Screen name="TrainingHistory" component={TrainingHistory} options={{ headerShown: true }} />

        <Stack.Screen name="SubManage" component={SubManage} options={{ headerShown: true }} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default navigate;
