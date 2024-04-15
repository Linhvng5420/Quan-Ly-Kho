import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Pressable,
  ScrollView,
  Image,
} from 'react-native';
import react, { useState } from 'react';

import Products from '../Products';
import Shops from '../Shops';
import Bill from '../Bill';
import ProdItem from '../ProdItem';
import StaticData from '../Data';
import ProductsBill from '../ProductsBill';

export default function ScBill({ navigation }) {
  const [listProds, setList] = useState(null);  
  const [listViewSell, setViewSell] = useState(null);  
  const [char, setChar] = useState('');  
  const [shop, setShop] = useState('');
  const [ma, setMa] = useState('');
  const [sl, setSL] = useState('');
  const changeMa=(value)=>{
    alert('Đã Chọn: ' + value.getTen())
    setMa(value.getID())
  }
  const pushList=(product)=>{
    if(product.getSoLuong() >= parseInt(sl)){
      StaticData.dataListSell.push(new ProductsBill(null, product.getID(), product.getTen(), null, sl, product.getGiaBan() * parseInt(sl)))
      let list = [];
      for (let i = 0; i < StaticData.dataListSell.length; i++){
        list.push(<ProdItem value={StaticData.dataListSell[i]} />)
      }
      setViewSell(list)
    }else{
      alert('Số Lượng Trong Kho Không Còn Đủ!')
    }  
  }
  return (
    <View style={{ height: '100%', backgroundColor: '#fff'}}>
      <ScrollView>
        <Text style={styles.title}>Tạo Đơn Hàng</Text>
        <View style={styles.container}>
          <View style={styles.form}>
            <TextInput placeholder="Nhập từ khóa....." style={styles.input} onChangeText={setChar}/>
            <Pressable style={styles.btnR} onPress={()=>{
              let list = [];
              for (let i = 0; i < StaticData.dataProds.length; i++){
                if((StaticData.dataProds[i].getTen().indexOf(char) > -1) || (StaticData.dataProds[i].getMoTa().indexOf(char) > -1) ){
                  list.push(
                    <ProdItem onPress={changeMa} value={StaticData.dataProds[i]} />
                  );
                }
              }
              setList(list)
            }}>
              <Text style={styles.btnText}>TÌM KIẾM</Text>
            </Pressable>
          </View>
          <ScrollView style={{height: 190, width: '100%'}}>{listProds}</ScrollView>
          <View style={styles.form}>
            <TextInput placeholder="Số Lượng" style={styles.input} value={sl}
            onChangeText={(index)=>{
              if(index[index.length - 1] <= '9' && index[index.length - 1] >= '0'){
                setSL(index)
              }else if(index == ""){
                setSL('')
              }
            }}/>
            <Pressable style={styles.btnR} onPress={()=>{
              if(sl != '' && ma != ''){
                for (let i = 0; i < StaticData.dataProds.length; i++) {
                  if(StaticData.dataProds[i].getID() == ma){
                    pushList(StaticData.dataProds[i])
                    setMa('')
                    setSL('')
                    break;
                  }
                }
              }else{
                alert('Chưa Chọn Sản Phẩm Hoặc Chưa Nhập Số Lượng!')
              }
            }}>
              <Text style={styles.btnText}>THÊM</Text>
            </Pressable>
          </View>
          <Text style={styles.title}>DANH SÁCH SẢN PHẨM</Text>
          <View style={styles.form}>
            <TextInput placeholder="Nhập tên Shop....." value={shop} style={styles.input} onChangeText={setShop}/>
            <Pressable style={styles.btnR} onPress={()=>{
              if(shop != ''){
                let tong = 0;
                for (let i = 0; i < StaticData.dataListSell.length; i++){
                  let index = StaticData.dataProds.findIndex((prod) => prod.getID() == StaticData.dataListSell[i].getProdID())
                  StaticData.dataProds[index].setSoLuong(StaticData.dataProds[index].getSoLuong() - StaticData.dataListSell[i].getSoLuong())
                  tong += StaticData.dataListSell[i].getGiaBan();
                }
                StaticData.dataBill.push(new Bill(null, shop, tong));
                alert('Thêm Thành Công!')
                StaticData.dataListSell = [];
                setViewSell(null)
                setShop('')
              }else{
                alert('Chưa Nhập Tên Shop')
              }
            }}>
              <Text style={styles.btnText}>Xác Nhận</Text>
            </Pressable>
          </View> 
          <ScrollView style={{height: 220, width: '100%'}}>{listViewSell}</ScrollView>  
        </View>
      </ScrollView>
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
            source={require('../../assets/shopAccess.png')}
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
    alignItems: 'center',
  },
  title: {
    width: '100%',
    textAlign: 'center',
    paddingVertical: 5,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#0FF',
  },
  input: {
    fontSize: 18,
    marginTop: 10,
    paddingLeft: 10,
    width: '55%',
    height: 45,
    borderWidth: 1,
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
  btnText: { 
    fontSize: 21, 
    marginTop: 10 
  },
  form:{
    width: '90%',
    marginBottom: 10
  }
});
