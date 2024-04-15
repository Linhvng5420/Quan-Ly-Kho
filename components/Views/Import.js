import { Text, StyleSheet, View, ScrollView, Pressable, TextInput, Image } from 'react-native';
import react, {useState} from 'react';

import Products from '../Products';
import Shops from '../Shops';
import Bill from '../Bill';
import StaticData from '../Data';
import ProdItem from '../ProdItem';
import ProductsBill from '../ProductsBill';

export default function ImportP({navigation}){
  const [ma, setMa] = useState('');
  const [sl, setSL] = useState('');
  const [ten, setTen] = useState('Chưa Có Sản Phẩm Được Chọn');
  const changeMa_Ten = (value) => {
    setMa(value.getID())
    setTen(value.getTen())
  };
  let list = [];
  for (let i = 0; i < StaticData.dataProds.length; i++) {
    list.push(
      <ProdItem onPress={changeMa_Ten} value={StaticData.dataProds[i]} />
    );
  }
  
  return(<View style={{height: '100%', backgroundColor: '#fff'}}>
    <View>
      <Text style={styles.title}>Nhập Hàng</Text>
      <View style={styles.container}>
        <Text style={styles.selectP}>{ten}</Text>
        <View style={styles.form}>
          <TextInput placeholder="Nhập số lượng....." style={styles.input} value={sl}
            onChangeText={(index)=>{
              if(index[index.length - 1] <= '9' && index[index.length - 1] >= '0'){
                setSL(index)
              }else if(index == ""){
                setSL('')
              }
            }}
          />
          <Pressable style={styles.btnR} onPress={()=>{
            if(sl != '' && ma != ''){
              for (let i = 0; i < StaticData.dataProds.length; i++) {
                if(StaticData.dataProds[i].getID() == ma){
                  StaticData.dataProds[i].setSoLuong(StaticData.dataProds[i].getSoLuong() + parseInt(sl));
                  setMa('')
                  setTen('Chưa Có Sản Phẩm Được Chọn')
                  setSL('')
                  alert('Thêm Thành Công!')
                  break;
                }
              }
            }else{
              alert('Chưa Chọn Sản Phẩm Hoặc Chưa Nhập Số Lượng!')
            }
          }}>
            <Text style={{ fontSize: 21, marginTop: 10 }}>THÊM</Text>
          </Pressable>
        </View>
      </View>
      <Text style={styles.title}>Danh Sách Sản Phẩm</Text>
      <ScrollView style={{height: '60%', marginTop: 10}}>{list}</ScrollView>
    </View>
    <View style={styles.navbar}>
        <Pressable onPress={()=>{
          navigation.navigate('Home')
        }}>
          <Image style={styles.navIcon} source={require('../../assets/home.png')} />
        </Pressable>
        <Pressable onPress={()=>{
          navigation.navigate('Add')
        }}>
          <Image style={styles.navIcon} source={require('../../assets/add.png')} />
        </Pressable>
        <Pressable onPress={()=>{
          navigation.navigate('Find')
        }}>
          <Image style={styles.navIcon} source={require('../../assets/search.png')} />
        </Pressable>
        <Pressable onPress={()=>{
          navigation.navigate('Import')
        }}>
          <Image style={styles.navIcon} source={require('../../assets/addPAccess.png')} />
        </Pressable>
        <Pressable onPress={()=>{
          navigation.navigate('ScreenBill')
        }}>
          <Image style={styles.navIcon} source={require('../../assets/shop.png')} />
        </Pressable>
        <Pressable onPress={()=>{
          navigation.navigate('ListBill')
        }}>
          <Image style={styles.navIcon} source={require('../../assets/bill.png')} />
        </Pressable>
      </View>
  </View>);
}

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    marginTop: 10,
    paddingLeft: 10,
    width: '55%',
    height: 45,
    borderWidth: 1,
  },
  selectP: {
    fontSize: 18,
    textAlign: 'center',
    width: '90%',
    padding: 10,
    borderWidth: 1,
    marginTop: 10
  },
  navIcon:{
    width: 30,
    height: 30,
    marginHorizontal: 10
  },
  navbar:{
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
    borderRadius: 25
  },
  container: {
    alignItems: 'center',
  },
  title: {
    width: '100%',
    textAlign: 'center',
    paddingVertical: 13,
    fontSize: 25,
    fontWeight: 'bold',
    backgroundColor: '#0FF',
  },
  btnR: {
    position: 'absolute',
    right: 0,
    marginTop: 10,
    width: '40%',
    height: 45,
    backgroundColor: '#0FF',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
  },
  form:{
    width: '90%',
    marginBottom: 10
  }
});