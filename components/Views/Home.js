import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  Pressable,
  ScrollView,
  Image,
} from 'react-native';
import react, { useState } from 'react';

import Products from '../Products';
import Shops from '../Shops';
import Bill from '../Bill';
import ProductsBill from '../ProductsBill';
import ProdItem from '../ProdItem';
import StaticData from '../Data';

export default function Home({ navigation }) {
  const changeNav = (value) => {
    navigation.navigate('Details', {product: value})
  };
  const [listProds, setList] = useState(null);
  return (
    <View style={{ height: '100%', backgroundColor: '#fff' }}>
      <View>
        <Text style={styles.title}>Danh Sách Sản Phẩm</Text>
        <Pressable
          style={styles.btn}
            oonPress={() => {
              let newList = []; // Tạo một mảng mới để chứa các phần tử mới
            
              // Thêm các phần tử mới vào mảng newList
              for (let i = 0; i < StaticData.dataProds.length; i++) {
                newList.push(
                  <ProdItem onPress={changeNav} value={StaticData.dataProds[i]} />
                );
              }
            
              // Cập nhật state list với mảng mới đã được tạo
              setList(newList);
            }}
            >
          <Text style={styles.btnText}>LÀM MỚI</Text>
        </Pressable>
        <ScrollView style={styles.container}>{listProds}</ScrollView>
      </View>
      <View style={styles.navbar}>
        <Pressable
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Image
            style={styles.navIcon}
            source={require('../../assets/homeAccess.png')}
          />
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate('Add');
          }}>
          <Image
            style={styles.navIcon}
            source={require('../../assets/add.png')}
          />
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate('Find');
          }}>
          <Image
            style={styles.navIcon}
            source={require('../../assets/search.png')}
          />
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate('Import');
          }}>
          <Image
            style={styles.navIcon}
            source={require('../../assets/addP.png')}
          />
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate('ScreenBill');
          }}>
          <Image
            style={styles.navIcon}
            source={require('../../assets/shop.png')}
          />
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate('ListBill');
          }}>
          <Image
            style={styles.navIcon}
            source={require('../../assets/bill.png')}
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    marginTop: 10,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#0FF',
    paddingVertical: 10,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 20,
  },
  navIcon: {
    width: 30,
    height: 30,
    marginHorizontal: 10,
  },
  navbar: {
    width: '100%',
    height: '7%',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#0FF',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  container: {
    backgroundColor: '#FFF',
    height: '77%',
  },
  title: {
    width: '100%',
    height: '8%',
    textAlign: 'center',
    paddingVertical: 13,
    fontSize: 25,
    fontWeight: 'bold',
    backgroundColor: '#0FF',
  },
});
