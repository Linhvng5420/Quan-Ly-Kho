import { Text, SafeAreaView, StyleSheet, View, Button, Pressable, ScrollView, Image } from 'react-native';
import React from 'react';

export default ItemSB=(datas)=>{
  let bill = datas.value;
  return(
    <Pressable style={styles.container} onPress={()=>{datas.onPress(bill)}}>
        <Text style={styles.content}>{bill.getShop()}</Text>
        <Text style={styles.contentP}>Giá: {bill.getGia()}</Text>
        <Text style={styles.contentDate}>
          {bill.getNgay().getDate()}/{bill.getNgay().getMonth() + 1}/{bill.getNgay().getFullYear()}
        </Text>
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
    padding: 10,
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  contentDate: {
    padding: 5,
    fontSize: 21,
    textAlign: 'center',
    backgroundColor: '#FFF'
  },
  contentP: {
    alignSelf: 'flex-end',
    borderColor: '#0FF',
    borderWidth: 1,
    backgroundColor: '#FFF',
    padding: 5,
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '80%',
  },
});