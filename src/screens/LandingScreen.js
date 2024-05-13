import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';

const LandingScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('SignIn');
    }, 3000); // 3000 ms = 3 detik

    return () => clearTimeout(timer); // Bersihkan timer saat komponen di-unmount
  }, [navigation]);

  return (
    <ImageBackground source={require('../assets/images/backgroundsatu.jpeg')} style={styles.background}>
      <View style={styles.container}>
        <Image source={require('../assets/images/logo.jpeg')} style={styles.logo} />
        <Text style={styles.title}>BROADCASTING{"\n"}         MEDIA</Text>
      </View>
      <Text style={styles.footerText}>Extreme Broadcasting Media and Video Graphy Life Style, Action, and Commerce</Text>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100, // Adjust size as needed
    height: 80, // Adjust size as needed
    marginBottom: 20, // Space between logo and text
    borderRadius: 5,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle: 'italic',
  
  },
  footerText: {
    position: 'absolute', // Absolute position to place it at the bottom
    bottom: 20, // 20 pixels from the bottom
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20, // Add horizontal padding for better readability
  },
});

export default LandingScreen;
