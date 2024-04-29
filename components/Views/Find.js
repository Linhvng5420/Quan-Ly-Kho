import {
  Text,
  TextInput,
  StyleSheet,
  View,
  Pressable,
  FlatList,
  Image,
} from 'react-native';
import react, { useState } from 'react';

import StaticData from '../Data';
import ProdItem from '../ProdItem';

export default function Find({ navigation }) {
  const changeNav = (value) => {
    navigation.navigate('Details', value);
  };
  const [listProds, setList] = useState(null);  
  const [char, setChar] = useState('');  
  return (
    <View style={{ height: '100%', backgroundColor: '#fff' }}>
      <View>
        <Text style={styles.title}>Tìm Sản Phẩm</Text>
        <TextInput placeholder="Nhập từ khóa....." style={styles.input} onChangeText={setChar} />
        <Pressable style={styles.btn} onPress={()=>{
          let list = [];
          for (let i = 0; i < StaticData.dataProds.length; i++){
            if((StaticData.dataProds[i].getTen().indexOf(char) > -1) || (StaticData.dataProds[i].getMoTa().indexOf(char) > -1) ){
              list.push(StaticData.dataProds[i]);
            }
          }
          setList(list)
        }}>
          <Text style={{ fontSize: 21, marginTop: 10 }}>TÌM KIẾM</Text>
        </Pressable>
        <Text style={styles.title}>Danh Sách Sản Phẩm</Text>
        <FlatList
          style={styles.container}
          data={listProds}
          renderItem={({item}) => <ProdItem onPress={changeNav} value={item} />}
        />
      </View>
      <View style={styles.navbar}>
        <Pressable
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Image
            style={styles.navIcon}
            source={require('../../assets/home.png')}
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
            navigation.navigate('ListProd');
          }}>
          <Image
            style={styles.navIcon}
            source={require('../../assets/searchAccess.png')}
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
    height: '60%',
  },
  title: {
    width: '100%',
    textAlign: 'center',
    paddingVertical: 13,
    fontSize: 25,
    fontWeight: 'bold',
    backgroundColor: '#0FF',
  },
  input: {
    fontSize: 18,
    alignSelf: 'center',
    marginTop: '2.5%',
    paddingLeft: 10,
    width: '90%',
    height: 45,
    borderColor: '#000',
    borderWidth: 1,
  },
  btn: {
    marginTop: 10,
    marginBottom: '2.5%',
    width: '90%',
    height: 45,
    backgroundColor: '#0FF',
    alignSelf: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
  },
});
