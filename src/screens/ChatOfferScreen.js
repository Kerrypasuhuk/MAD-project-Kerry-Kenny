import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Linking } from 'react-native';

const ChatOfferScreen = () => {
  const openWhatsApp = () => {
    const whatsappNumber = '6289625177452'; // Nomor WhatsApp Anda
    const url = `whatsapp://send?phone=${whatsappNumber}`;
    Linking.openURL(url).catch(() => {
      alert('Pastikan WhatsApp terpasang di perangkat Anda');
    });
  };

  const openLink = (url) => {
    Linking.openURL(url).catch(() => {
      alert('Gagal membuka tautan');
    });
  };

  return (
    <ImageBackground source={require('../assets/images/bacckgrounddua.jpeg')} style={styles.background}>
      <View style={styles.container}>
        <Image source={require('../assets/images/LogoKedua.png')} style={styles.logo} />
        <View style={styles.middleContainer}>
          <Image source={require('../assets/images/LogoWhatsapp.jpeg')} style={styles.whatsappLogo} />
          <TouchableOpacity style={styles.greenButton} onPress={openWhatsApp}>
            <Text style={styles.buttonText}>Lanjut</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.supportContainer}>
          <Text style={styles.supportText}>Dukungan Pelanggan</Text>
          <Text style={styles.supportText}>Hubungi Kami:</Text>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={() => openLink('whatsapp://send?phone=6289625177452')}>
              <Image source={require('../assets/images/LogoWA.jpeg')} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openLink('https://www.instagram.com/YOUR_INSTAGRAM_HANDLE')}>
              <Image source={require('../assets/images/LogoIG.jpeg')} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openLink('mailto:s2200567@student.unklab.ac.id')}>
              <Image source={require('../assets/images/LogoGMAIL.jpeg')} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 20,
  },
  middleContainer: {
    alignItems: 'center',
  },
  whatsappLogo: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  greenButton: {
    backgroundColor: 'green',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  supportContainer: {
    alignItems: 'flex-start',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  supportText: {
    color: 'white',
    fontSize: 14,
    marginBottom: 5,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  icon: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
  },
});

export default ChatOfferScreen;
