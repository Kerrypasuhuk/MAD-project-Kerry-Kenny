import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require('../assets/images/bacckgrounddua.jpeg')} style={styles.background}>
      <View style={styles.container}>
        <Image source={require('../assets/images/LogoKedua.png')} style={styles.logo} />
        <Text style={styles.title}>Selamat Datang di Broadcasting Media</Text>
        <Text style={styles.subtitle}>Jasa Pengambilan Video Profesional dan Berpengalaman</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Menu')}>
          <Text style={styles.buttonText}>Click Here</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: -20,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    color: 'white',
    fontSize: 13,
    marginBottom: 90,
  },
  button: {
    backgroundColor: '#8B4513', // Warna cokelat tua
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
