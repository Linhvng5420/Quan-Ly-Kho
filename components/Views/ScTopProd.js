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

import Products from '../Products';
import Shops from '../Shops';
import Bill from '../Bill';
import StaticData from '../Data';
import ProductsBill from '../ProductsBill';
import TopProd from '../TopProd';

export default function Find({ navigation }) {
  let listTop = [];
  listTop.push(StaticData.dataProds[0]);
  for (let i = 1; i < StaticData.dataProds.length; i++){
    if(StaticData.dataProds[i].getDaBan() >= listTop[0].getDaBan()){
      listTop.unshift(StaticData.dataProds[i]);
    }else if(StaticData.dataProds[i].getDaBan() <= listTop[listTop.length - 1].getDaBan()){
      listTop.push(StaticData.dataProds[i]);      
    }else{
      for (let j = 1; j < listTop.length; j++){
        if(StaticData.dataProds[i].getDaBan() >= listTop[j].getDaBan()){
          listTop.splice(j, 0, StaticData.dataProds[i]);
          break
        }
      }
    }
  }
  const [index, setIndex] = useState(0);
  const onPressL=()=>{
    if(index == 0){
      setIndex(4)
    }else{
      setIndex(index-1)
    }
  }
  const onPressR=()=>{
    if(index == 4){
      setIndex(0)
    }else{
      setIndex(index+1)
    }    
  }
  return (
    <View style={{ height: '100%', backgroundColor: '#fff' }}>
      <View>
        <Text style={styles.title}>Sản Phẩm Tiêu Biểu</Text>
        <TopProd value={listTop[index]} onPressL={onPressL} onPressR={onPressR}/>
        <Text style={styles.title}>Chi Tiết Thông Tin</Text>
        <Text style={styles.txtTop}>TOP {index + 1}</Text>
        <View>
          <View style={styles.borderImg}>
            <Image style={styles.icon} source={listTop[index].getAnh() != '' ? { uri: listTop[index].getAnh() } : require('../../assets/bill.png')}
            />
          </View>
          <Text style={styles.txtName}>{listTop[index].getTen()}</Text>
          <Text style={styles.txtInfo}>Tồn Kho: {listTop[index].getSoLuong()}</Text>
          <Text style={styles.txtInfo}>Đã Bán: {listTop[index].getDaBan()}</Text>
          <Text style={styles.txtInfo}>Giá Bán: {listTop[index].getGiaBan()}</Text>
          <Text style={styles.txtInfo}>Mô Tả: {listTop[index].getMoTa()}</Text>
        </View>
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
  txtTop:{
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#0FF'
  },
  txtName:{
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  },
  txtInfo:{
    paddingHorizontal: 34,
    fontSize: 21
  },
  borderImg: {
    alignSelf: 'center',
    width: '90%',
    borderWidth: 1,
    padding: 10,
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
  title: {
    width: '100%',
    textAlign: 'center',
    paddingVertical: 13,
    fontSize: 25,
    fontWeight: 'bold',
    backgroundColor: '#0FF',
  },
  icon:{
    alignSelf: 'center',
    width: 150,
    height: 150
  }
});
