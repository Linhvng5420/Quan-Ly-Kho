import { Text, FlatList, StyleSheet, View, TextInput, Pressable, ScrollView, Image } from 'react-native';
import react, {useState} from 'react';

import Products from '../Products';
import Shops from '../Shops';
import Bill from '../Bill';
import ProductsBill from '../ProductsBill';
import ItemShopBill from '../ItemShopBill';
import StaticData from '../Data';

export default function ListBill({navigation}){
  const [listBillImport, setListImport] = useState(null);   
  const [listBillSell, setListSell] = useState(null);   
  const [id, setID] = useState('');   
  const setBillID=(bill)=>{
    alert("Đã chọn bill shop '" + bill.getShop() + "'\nGiá " + bill.getGia() + "!")
    setID(bill.getID())
  }
  const reset =()=>{
    let listImport = [];
    let listSell = [];
    for(let i = 0; i < StaticData.dataBill.length; i++){
      if(StaticData.dataBill[i].getType() == 1){
        listImport.push(StaticData.dataBill[i]);
      }else{
        listSell.push(StaticData.dataBill[i]);
      }
    } 
    setListImport(listImport)
    setListSell(listSell)
  }
  return(<View style={{height: '100%', backgroundColor: '#fff'}}>
    <View>
      <Pressable style={styles.btn}
        onPress={()=>{
          reset()
        }}
      >
        <Text style={styles.btnText}>LÀM MỚI</Text>
      </Pressable>
      <Text style={styles.title}>Hóa Đơn Nhập</Text>
      <FlatList
        style={styles.container}
        data={listBillImport}
        renderItem={({item}) => <ItemShopBill value={item} onPress={setBillID} />}
      />
      <Text style={styles.title}>Hóa Đơn Xuất</Text>
      <FlatList
        style={styles.container}
        data={listBillSell}
        renderItem={({item}) => <ItemShopBill value={item} onPress={setBillID} />}
      />
      <Pressable style={styles.btn} onPress={() => {
        if(id != ''){
          StaticData.dataBill.splice(StaticData.dataBill.findIndex((item) => item.getID() == id), 1)
          setID('')
          reset()
        }else{
          alert('Chưa Chọn Bill!')
        }
      }}>
        <Text style={styles.btnText}>XÓA</Text>
      </Pressable>
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
          navigation.navigate('ListProd')
        }}>
          <Image style={styles.navIcon} source={require('../../assets/search.png')} />
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
        <Pressable onPress={()=>{
          navigation.navigate('ScreenBill')
        }}>
          <Image style={styles.navIcon} source={require('../../assets/shop.png')} />
        </Pressable>
        <Pressable onPress={()=>{
          navigation.navigate('ListBill')
        }}>
          <Image style={styles.navIcon} source={require('../../assets/billAccess.png')} />
        </Pressable>
      </View>
  </View>);
}

const styles = StyleSheet.create({
  btn:{
    marginBottom: 10,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#0FF',
    paddingVertical: 10
  },
  btnText:{
    textAlign: 'center', 
    fontSize: 20
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
    height: '31%',
    backgroundColor: '#FFF',
    marginBottom: 5
  },
  title: {
    width: '100%',
    textAlign: 'center',
    paddingVertical: 13,
    fontSize: 25,
    fontWeight: 'bold',
    backgroundColor: '#0FF',
  },
});