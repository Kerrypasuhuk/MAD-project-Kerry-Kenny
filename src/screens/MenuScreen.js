import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';

const MenuScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require('../assets/images/bacckgrounddua.jpeg')} style={styles.background}>
      <View style={styles.container}>
        <Image source={require('../assets/images/LogoKedua.png')} style={styles.logo} />
        <Text style={styles.title}>BROADCASTING MEDIA</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DokumentasiEvent')}>
            <Text style={styles.buttonText}>DOKUMENTASI EVENT</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ProfesionalVideo') }>
            <Text style={styles.buttonText}>PROFESIONAL VIDEO</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 40,
  },
  container: {
    alignItems: 'center',
  },
  logo: {
    width: 70,
    height: 70,
    marginBottom: -10,
    borderRadius: 5,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    fontStyle: 'italic',
  },
  buttonContainer: {
    width: '90%',
    marginTop: 90,
  },
  button: {
    backgroundColor: '#311432',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 25,
    paddingHorizontal: 40,
    borderRadius: 15,
    marginBottom: 60,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default MenuScreen;
