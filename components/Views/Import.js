import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Pressable,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import react, { useState } from 'react';

import Products from '../Products';
import Shops from '../Shops';
import Bill from '../Bill';
import ProdItemBill from '../ProdItemBill';
import StaticData from '../Data';
import ProductsBill from '../ProductsBill';

export default function ScBill({ navigation }) {
  const [listProds, setList] = useState(null);  
  const [choose, setChoose] = useState(false);  
  const [listImport, setImport] = useState([]);  
  const [newID, setID] = useState(StaticData.dataBill[StaticData.dataBill.length - 1].getID() + 1);
  const [char, setChar] = useState('');  
  const [ncc, setNCC] = useState('');
  const [ma, setMa] = useState('');
  const [sl, setSL] = useState('');
  const changeMa=(value)=>{
    setChoose(true)
    setMa(value.getID())
  }
  const pushList=(product)=>{
    StaticData.dataListImport.push(new ProductsBill(null, product.getID(), product.getTen(), product.getAnh(), parseInt(sl), product.getGiaBan() * parseInt(sl)))
    setImport(StaticData.dataListImport)
  }
  return (
    <View style={{ height: '100%', backgroundColor: '#fff'}}>
      <ScrollView>
        <Text style={styles.title}>Tạo Đơn Nhập Hàng</Text>
        <View style={styles.container}>
          <View style={styles.form}>
            <TextInput placeholder="Nhập từ khóa....." style={styles.input} onChangeText={setChar}/>
            <Pressable style={styles.btnR} onPress={()=>{
              let list = [];
              for (let i = 0; i < StaticData.dataProds.length; i++){
                if((StaticData.dataProds[i].getTen().indexOf(char) > -1) || (StaticData.dataProds[i].getMoTa().indexOf(char) > -1) ){
                  list.push(StaticData.dataProds[i]);
                }
              }
              setList(list)
            }}>
              <Text style={styles.btnText}>TÌM KIẾM</Text>
            </Pressable>
          </View>
          <FlatList
            style={{height: 190, width: '100%'}}
            data={listProds}
            renderItem={({item}) => <ProdItemBill onPress={changeMa} value={item} />}
          />          
          <View style={styles.form}>
            <TextInput placeholder="Nhập số lượng....." style={styles.input}
            value={sl}
            editable={choose}
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
                    setChoose(false)
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
            <TextInput placeholder="Nhập Tên Nhà Cung Cấp" value={ncc} style={styles.input} onChangeText={setNCC}/>
            <Pressable style={styles.btnR} onPress={()=>{
              if(ncc != ''){
                let tong = 0;
                for (let i = 0; i < listImport.length; i++){
                  let index = StaticData.dataProds.findIndex((prod) => prod.getID() == listImport[i].getProdID())
                  StaticData.dataProds[index].setSoLuong(StaticData.dataProds[index].getSoLuong() + listImport[i].getSoLuong())
                  tong += listImport[i].getGiaBan();
                }
                StaticData.dataBill.push(new Bill(newID, ncc, tong, new Date(), 1));
                setID(StaticData.dataBill[StaticData.dataBill.length - 1].getID() + 1)
                alert('Thêm Thành Công!')
                StaticData.dataListImport = [];
                setImport([])
                setNCC('')
              }else{
                alert('Chưa Nhập Tên Nhà Cung Cấp!')
              }
            }}>
              <Text style={styles.btnText}>Xác Nhận</Text>
            </Pressable>
          </View>
          <FlatList
            style={{height: 220, width: '100%'}}
            data={listImport}
            renderItem={({item}) => <ProdItemBill value={item} />}
          />
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
            navigation.navigate('ListProd');
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
            source={require('../../assets/addPAccess.png')}
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
