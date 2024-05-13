import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Pastikan ini sudah terinstal

const SignUpScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ImageBackground source={require('../assets/images/backgroundsatu.jpeg')} style={styles.backgroundImage}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="angle-left" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Sign Up</Text>
      </View>
      <View style={styles.content}>
        <TouchableOpacity style={styles.photoButton}>
          <Text style={styles.photoButtonText}>Add Photo</Text>
        </TouchableOpacity>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          value={fullName}
          onChangeText={setFullName}
          placeholder="Enter your full name"
          placeholderTextColor="#999"
        />
        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          placeholderTextColor="#999"
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          placeholderTextColor="#999"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      paddingHorizontal: 20,
      paddingTop: 50,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: -20,
    },
    headerText: {
      color: 'white',
      fontSize: 24,
      marginLeft: 10,
      fontWeight: 'bold',
      
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center', // Menambahkan ini untuk memusatkan semua elemen di tengah
    },
    photoButton: {
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      padding: 15,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 30,
      width: 120,            // Diameter of the circle
      height: 120,           // Diameter of the circle
      borderRadius: 60,     // Half of the width and height to make it a perfect circle
    },
    photoButtonText: {
      color: 'white',
      fontSize: 16,
    },
    label: {
      color: 'white',
      marginBottom: 5,
      alignSelf: 'flex-start', // Arahkan label ke kiri
    },
    input: {
      backgroundColor: 'white',
      color: 'black',
      paddingHorizontal: 15,
      height: 40,
      marginBottom: 10,
      width: '100%',          // Menambahkan ini agar input mengambil lebar penuh
      borderRadius: 25,       // Melengkungkan sisi-sisi input
    },
    continueButton: {
      backgroundColor: 'white',
      alignItems: 'center',
      padding: 10,
      width: '100%',          // Menambahkan ini agar tombol mengambil lebar penuh
      borderRadius: 25, 
      marginTop: 40,      // Melengkungkan sisi-sisi tombol
    },
    buttonText: {
      color: 'black',
      fontSize: 16,
    },
  });
  

export default SignUpScreen;
