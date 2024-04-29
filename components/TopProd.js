import { Text, StyleSheet, View, Button, Pressable, ScrollView, Image } from 'react-native';
import React from 'react';

export default ProdItem = (datas) => {
  let product = datas.value;
  return (
    <View style={styles.container} >
      <Pressable>
        <Image style={styles.icon} source={product.getAnh() != '' ? { uri: product.getAnh() } : require('../assets/bill.png')}
        />
        <View style={styles.rightItem}>
          <Text style={styles.contentTen}>{product.getTen()}</Text>
          <Text style={styles.contentGia}>Giá: {product.getGiaBan()}</Text>
          <Text style={styles.contentMoTa}>{product.getMoTa()}</Text>
        </View>
      </Pressable>
      <Pressable style={styles.btn} onPress={() => {
        datas.onPressL()
      }}>
        <Text style={styles.txtBtn}>{'-'}</Text>
      </Pressable>
      <Pressable style={styles.btnR} onPress={() => {
        datas.onPressR()
      }}>
        <Text style={styles.txtBtn}>{'-'}</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    borderColor: '#0FF',
    borderWidth: 1,
    alignSelf: 'center',
    marginVertical: 20,
    paddingHorizontal: 20,
    width: '100%',
  },
  contentTen: {
    paddingHorizontal: 5,
    fontSize: 21,
    fontWeight: 'bold',
  },
  contentGia: {
    paddingHorizontal: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  contentMoTa: {
    paddingHorizontal: 5,
    fontSize: 16,
  },
  icon: {
    width: 120,
    height: 120,
    borderColor: '#0FF',
    borderWidth: 1
  },
  rightItem: {
    backgroundColor: '#0FF',
    height: 120,
    marginLeft: 120,
    marginTop: -120,
    justifyContent: 'center'
  },
  btn:{
    position: 'absolute',
    top: 25,
  },
  btnR:{
    position: 'absolute',
    top: 25,
    right: 0
  },
  txtBtn:{
    fontSize: 50,
  }
});