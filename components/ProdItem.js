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
        <Text style={styles.contentP}>Giá: {product.getGiaBan()}</Text>
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
    paddingTop: 12,
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    height: 50
  },
  contentP: {
    alignSelf: 'flex-end',
    borderColor: '#0FF',
    borderWidth: 1,
    backgroundColor: '#FFF',
    paddingTop: 12,
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    height: 50,
    width: 190,
  },
  icon:{
    width: 100,
    height: 100,
    borderColor: '#0FF',
    borderWidth: 1
  },
  rightItem:{
    backgroundColor: '#0FF',
    marginLeft: 100,
    marginTop: -100,
  }
});