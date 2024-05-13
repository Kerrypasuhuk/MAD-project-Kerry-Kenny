import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';

const DocumentationEventScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require('../assets/images/bacckgrounddua.jpeg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>DOKUMENTASI EVENT</Text>
        <Text style={[styles.price, styles.strikeText]}>Rp. 2.000.000</Text>
        <View style={styles.line} />
        <Text style={styles.price}>Rp. 1.000.000</Text>
        <View style={styles.listContainer}>
          <View style={styles.item}>
            <Text style={styles.itemText}>2 Professional Videographer</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.itemText}>1 Professional Photographer</Text>
          </View>
          <View style={styles.item}>
            <Text style={[styles.itemText, styles.strikeText]}>Creative Brainstorming</Text>
            <View style={styles.line} />
          </View>
          <View style={styles.item}>
            <Text style={[styles.itemText, styles.strikeText]}>Electric Stabilizer</Text>
            <View style={styles.line} />
          </View>
          <View style={styles.item}>
            <Text style={[styles.itemText, styles.strikeText]}>Lighting</Text>
            <View style={styles.line} />
          </View>
          <View style={styles.item}>
            <Text style={[styles.itemText, styles.strikeText]}>Recorder</Text>
            <View style={styles.line} />
          </View>
          <View style={styles.item}>
            <Text style={styles.itemText}>Video Output 1 menit</Text>
          </View>
          <View style={styles.item}>
            <Text style={[styles.itemText, styles.strikeText]}>Durasi Shooting 6 jam</Text>
            <View style={styles.line} />
          </View>
          <View style={styles.item}>
            <Text style={styles.itemText}>Durasi Pengerjaan 10 hari</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.itemText}>Video Output 3-5 menit</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.itemText}>Video Dokumentasi 30-45 menit</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.itemText}>Soft Copy dalam Flashdisk</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.itemText}>Figura Ukuran 40x60 1 pcs</Text>
            <View style={styles.line} />
          </View>
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
    flexDirection: 'column', // Mengubah menjadi column
    alignItems: 'center', // Mengatur agar teks berada di tengah
    marginBottom: 10,
  },
  itemText: {
    color: 'white',
    fontSize: 16,
    marginRight: 10,
    textAlign: 'center',
  },
  strikeText: {
    textDecorationLine: 'line-through', // Mencoret teks
    color: 'rgba(255,255,255,0.5)', // Mengatur warna teks menjadi lebih gelap
  },
  line: {
    width: '70%', // Mengatur lebar garis putih
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

export default DocumentationEventScreen;
