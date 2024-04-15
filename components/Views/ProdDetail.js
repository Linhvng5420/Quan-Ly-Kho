import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Pressable,
  TextInput,
  Image,
} from 'react-native';
import react, {useState} from 'react';

import Products from '../Products';
import Shops from '../Shops';
import Bill from '../Bill';
import StaticData from '../Data';
import ProductsBill from '../ProductsBill';

export default ProdDetail = ({navigation, route}) => {  
  const product = route.params.product
  const [ten, setTen] = useState(product.getTen());  
  const [gia, setGia] = useState(product.getGiaBan());
  const [mota, setMota] = useState(product.getMoTa());
  return (
    <View style={{ height: '100%', backgroundColor: '#FFF' }}>
      <ScrollView>
        <Text style={styles.title}>Chi Tiết Sản Phẩm</Text>
        <View style={styles.container}>
          <View style={styles.borderImg}>
            <Image
              source={require('../../assets/bill.png')}
              style={styles.img}
            />
          </View>
          <TextInput
            placeholder="Nhập tên sản phẩm....."
            style={styles.input}
            value={ten}
            onChangeText={setTen}
          />
          <Text style={styles.input}>{product.getSoLuong()}</Text>
          <TextInput
            placeholder="Nhập giá....."
            style={styles.input}
            value={gia + ''}
            onChangeText={setGia}
          />
          <TextInput
            placeholder="Nhập mô tả sản phẩm....."
            style={styles.inputArea}
            value={mota}
            onChangeText={setMota}
          />
          <View style={{ width: '90%' }}>
            <Pressable style={styles.btnLeft} onPress={() => {
              navigation.navigate('Home');
              StaticData.dataProds.splice(StaticData.dataProds.findIndex((prod) => prod.getID() == product.getID()), 1)
              alert('Xóa Thành Công!')
            }}>
              <Text style={styles.btnText}>XÓA</Text>
            </Pressable>
            <Pressable style={styles.btnRight} onPress={() => {
              let index = StaticData.dataProds.findIndex((prod) => prod.getID() == product.getID())
              StaticData.dataProds[index].setTen(ten)
              StaticData.dataProds[index].setGiaBan(parseInt(gia))
              StaticData.dataProds[index].setMoTa(mota)
              alert('Sửa Thành Công!')
              navigation.navigate('Home');              
            }}>
              <Text style={styles.btnText}>SỬA</Text>
            </Pressable>
          </View>
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
  borderImg: {
    width: '90%',
    borderWidth: 1,
    marginTop: 45,
    padding: 10,
  },
  img: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  input: {
    padding: 5,
    marginTop: 15,
    borderWidth: 1,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 5,
    fontSize: 21,
  },
  inputArea: {
    padding: 5,
    height: 90,
    marginTop: 15,
    textAlignVertical: 'top',
    borderWidth: 1,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 5,
    fontSize: 21,
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
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  title: {
    width: '100%',
    textAlign: 'center',
    paddingVertical: 13,
    fontSize: 25,
    fontWeight: 'bold',
    backgroundColor: '#0FF',
    marginBottom: 50,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 20,
  },
  btnLeft: {
    marginTop: 10,
    width: '48%',
    backgroundColor: '#0FF',
    paddingVertical: 10,
  },
  btnRight: {
    position: 'absolute',
    top: 10,
    right: 0,
    width: '48%',
    backgroundColor: '#0FF',
    paddingVertical: 10,
  },
});
