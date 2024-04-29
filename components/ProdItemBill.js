import { Text, SafeAreaView, StyleSheet, View, Button, Pressable, ScrollView, Image } from 'react-native';
import React from 'react';

export default ProdItem = (datas) => {
  let product = datas.value;
  return (
    <Pressable style={styles.container} onPress={() => {
      datas.onPress == null ? "" : datas.onPress(product)
    }}>
      <Image style={styles.icon} source={product.getAnh() != '' ? { uri: product.getAnh() } : require('../assets/bill.png')}
      />
      <View style={styles.rightItem}>
        <Text style={styles.content}>{product.getTen()}</Text>
        <Text style={styles.contentP}>SL: {product.getSoLuong()} Giá: {product.getGiaBan()}</Text>
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    borderColor: '#0FF',
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: 20,
    width: '90%',
  },
  content: {
    paddingTop: 10,
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    height: 40
  },
  contentP: {
    alignSelf: 'flex-end',
    borderColor: '#0FF',
    borderWidth: 1,
    backgroundColor: '#FFF',
    paddingTop: 10,
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    height: 40,
    width: 210,
  },
  icon: {
    width: 80,
    height: 80,
    borderColor: '#0FF',
    borderWidth: 1
  },
  rightItem: {
    backgroundColor: '#0FF',
    marginLeft: 80,
    marginTop: -80,
  }
});