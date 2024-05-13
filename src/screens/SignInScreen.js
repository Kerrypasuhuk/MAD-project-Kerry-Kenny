import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Pastikan ini sudah terinstal

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Asumsikan validasi dan autentikasi berhasil
    navigation.navigate('Welcome'); // Pastikan 'Welcome' adalah nama yang benar dari route ke WelcomeScreen
  };

  return (
    <ImageBackground source={require('../assets/images/backgroundsatu.jpeg')} style={styles.backgroundImage}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="angle-left" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Sign In</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Type your email address"
          placeholderTextColor="#666"
          keyboardType="email-address"
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Type your password"
          placeholderTextColor="#666"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.buttonText}>Create New Account</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      paddingHorizontal: 20,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: -100,
    },
    backButton: {
      marginRight: 10,
    },
    headerText: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
    },
    inputContainer: {
      marginTop: 60,
    },
    label: {
      color: 'white',
      fontSize: 16,
      marginBottom: 5,
    },
    input: {
      backgroundColor: 'white',
      color: 'black',
      height: 50,
      paddingHorizontal: 15,
      marginBottom: 20,
      borderRadius: 20,
    },
    signInButton: {
      marginTop: 60,
      backgroundColor: 'white',
      alignItems: 'center',
      padding: 8,
      borderRadius: 14,
    },
    signUpButton: {
      marginTop: 20,
      backgroundColor: 'grey',
      alignItems: 'center',
      padding: 8,
      borderRadius: 10,
    },
    buttonText: {
      color: 'black',
      fontSize: 16,
    },
  });
  
export default SignInScreen;
