import { Text, SafeAreaView, StyleSheet, View, Button, Pressable, ScrollView, Image } from 'react-native';
import React from 'react';

export default ProdItem=(datas)=>{
  let product = datas.value;
  return(
    <Pressable style={styles.container} onPress={()=>{
      datas.onPress == null ? "" : datas.onPress(product)
    }}>
      <Image style={styles.icon} source={require('../assets/bill.png')} />
      <View style={styles.rightItem}>
        <Text style={styles.content}>{product.getTen()}</Text>
        <Text style={styles.contentP}>Kho:{product.getSoLuong()}  Giá: {product.getGiaBan()}</Text>
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5, // Giảm độ dày của đường viền xuống 50%
    alignSelf: 'center',
    marginTop: 10, // Giảm khoảng cách từ phía trên xuống 50%
    width: '70%', // Giảm chiều rộng xuống 50%
  },
  content: {
    paddingTop: 2, // Giảm khoảng cách từ phía trên của nội dung xuống 50%
    fontSize: 15, // Giảm cỡ chữ xuống 50%
    fontWeight: 'bold',
    textAlign: 'start',
    paddingLeft: 10,
    height: 25 // Giảm chiều cao xuống 50%
  },
  contentP: {
    alignSelf: 'flex-end',
    borderColor: '#0FF',
    borderWidth: 3, // Giảm độ dày của đường viền xuống 50%
    backgroundColor: '#FFF',
    fontSize: 15, // Giảm cỡ chữ xuống 50%
    fontWeight: 'bold',
    textAlign: 'left',
    paddingLeft:8,
    paddingTop:4,
    height: 30, // Giảm chiều cao xuống 50%
    width: 200, // Giảm chiều rộng xuống 50%
  },
  icon:{
    width: 50, // Giảm chiều rộng của biểu tượng xuống 50%
    height: 50, // Giảm chiều cao của biểu tượng xuống 50%
  },
  rightItem:{
    backgroundColor: '#0FF',
    marginLeft: 50, // Giảm khoảng cách từ mép trái của vật phẩm sang phải xuống 50%
    marginTop: -50, // Giảm khoảng cách từ phía trên của vật phẩm xuống 50%
  }
  
});