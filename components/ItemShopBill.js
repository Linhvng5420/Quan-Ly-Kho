import { Text, SafeAreaView, StyleSheet, View, Button, Pressable, ScrollView, Image } from 'react-native';
import React from 'react';

export default ItemSB=(datas)=>{
  let bill = datas.value;
  return(
    <Pressable style={styles.container}>
        <Text style={styles.content}>{bill.getShop()}</Text>
        <Text style={styles.contentP}>Giá: {bill.getGia()}</Text>
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
    backgroundColor: '#0FF',
  },
  content: {
    paddingTop: 12,
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    height: 50,
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
    width: '80%',
  },
});