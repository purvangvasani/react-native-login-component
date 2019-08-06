# Login Component in React Native

The main purpose of this application is to have a login component with all the functionality available in it. The app uses redux store and validations.


## Dependencies of this project:

```python
react: 16.8.3
react-native: 0.59.8
native-base: ^2.12.1
react-native-easy-toast: ^1.2.0
react-native-gesture-handler: ^1.2.1
react-navigation: ^3.11.0
react-redux: ^7.0.3
redux: ^4.0.1
```

## Auth Screen

Here, two buttons are available. If you have already registered with the app, you may proceed with the Login Screen. If you are new to the app, you may proceed with the Signup Screen.

![Auth Screen](https://github.com/purvangvasani/react-native-login-component/blob/master/app/ScreenShots/AuthScreen.png?raw=true)

## Log In Screen

User can log in with the app using his/her credentials which includes Email id and Password.
If the user forgets his/her password, he/she can view from the Forget Password screen.

![Log In Screen](https://github.com/purvangvasani/react-native-login-component/blob/master/app/ScreenShots/LoginScreen.png?raw=true)

## Sign Up Screen

If the user is new with the application, he/she will be redirected to the Sign-Up screen. User has to add Fullname, Email, and Password to register.

![Sign up Screen](https://github.com/purvangvasani/react-native-login-component/blob/master/app/ScreenShots/SignupScreen.png?raw=true)

## Forget Password Screen

Users can also reset the password in case they forget it. The user has to enter the Email id. The application will then search in the database. If it matches one of the entries of the database, then the old password will be displayed to the user. And if not, then the user has to register again. 

![Forget Password Screen](https://github.com/purvangvasani/react-native-login-component/blob/master/app/ScreenShots/ForgetPassword.png?raw=true)
