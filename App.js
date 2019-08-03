/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation'
import LoginScreen from './app/screen/LoginScreen'
import SignupScreen from './app/screen/SignupScreen'
import ForgetPassword from './app/screen/ForgetPassword'
import { Container, Button } from 'native-base';
import HeaderComponent from './app/component/HeaderComponent'
import Styles from './app/screen/Styles'
import theme from './Theme/theme'


class App extends Component {
  
  handleLogIn=()=>{
    this.props.navigation.navigate('Login')
  }

  handleSignUp=()=>{
    this.props.navigation.navigate('Signup')
  }
  
  render() {
    return (
      <Container>
        
        {/* <HeaderComponent /> */}
        
        <View style={Styles.container}>
        
          <View style={Styles.containerOne}>
            <Image source={require('./app/images/app_logo.jpg')} style={Styles.imageAppLogo}/>
            <Text style={Styles.appTitle}>Simple Login Application</Text>
          </View>
        
          <View style={Styles.containerTwo}>
          
            <View style={Styles.buttonPosition}>
              <Button light block onPress={this.handleLogIn}>
                <Text style={Styles.buttonLogInText}>LOG IN</Text>
              </Button>
            </View>
            
            <View style={Styles.buttonPosition}>
              <Button transparent light block onPress={this.handleSignUp} style={Styles.buttonLoginStyle}>
                <Text style={Styles.buttonSignUpText}>SIGN UP</Text>
              </Button>
            </View>

          </View> 
        
        </View>
        
      </Container>
    );
  }
}

const AppNavigator = createStackNavigator({
  Auth:{
    screen: App,
    navigationOptions: () => ({
      header: null
    }),
  },
  Login:{
    screen: LoginScreen,
    navigationOptions: () => ({
      title: `Log In`,
    }),
  },
  Signup:{
    screen: SignupScreen,
    navigationOptions: () => ({
      title: `Sign Up`,
    }),
  },
  ForgetPassword:{
    screen: ForgetPassword,
    navigationOptions: () => ({
      title: `Forget Password`,
    }),
  }
})

export default createAppContainer(AppNavigator)