import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfesionalVideoScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground source={require('../assets/images/bacckgrounddua.jpeg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>PROFESIONAL VIDEO</Text>
        <Text style={[styles.price, styles.strikeText]}>Rp. 4.000.000</Text>
        <View style={styles.line} />
        <Text style={styles.price}>Rp. 2.500.000</Text>
        <View style={styles.listContainer}>
          <View style={styles.item}>
            <Text style={styles.itemText}>2 Professional Videographer</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.itemText}>1 Professional Photographer</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.itemText}>Creative Brainstorming</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.itemText}>Electric Stabilizer</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.itemText}>Lighting</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.itemText}>Recorder</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.itemText}>Video Output 1 menit</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.itemText}>Durasi Shooting 6 jam</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.itemText}>Durasi Pengerjaan 10 hari</Text>
          </View>
          <View style={styles.item}>
            <Text style={[styles.itemText, styles.strikeText]}>Video Output 3-5 menit</Text>
            <View style={styles.line} />
          </View>
          <View style={styles.item}>
            <Text style={[styles.itemText, styles.strikeText]}>Video Dokumentasi 30-45 menit</Text>
            <View style={styles.line} />
          </View>
          <View style={styles.item}>
            <Text style={[styles.itemText, styles.strikeText]}>Soft Copy dalam Flashdisk</Text>
            <View style={styles.line} />
          </View>
          <View style={styles.item}>
            <Text style={[styles.itemText, styles.strikeText]}>Figura Ukuran 40x60 pcs</Text>
            <View style={styles.line} />
          </View>
          <View style={styles.line} />
        </View>
        <TouchableOpacity style={styles.orderButton} onPress={() => navigation.navigate('ChatOffer')}>
          <Text style={styles.buttonText}>Order</Text>
        </TouchableOpacity>
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
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  price: {
    color: 'white',
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  listContainer: {
    width: '100%',
    alignItems: 'center',
  },
  item: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10,
  },
  itemText: {
    color: 'white',
    fontSize: 16,
    marginRight: 10,
    textAlign: 'center',
  },
  strikeText: {
    textDecorationLine: 'line-through',
    color: 'rgba(255,255,255,0.5)',
  },
  line: {
    width: '70%',
    height: 1,
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  orderButton: {
    backgroundColor: 'orange',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ProfesionalVideoScreen;
