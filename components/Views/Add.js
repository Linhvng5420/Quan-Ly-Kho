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

          //<Pressable style={styles.btn} onPress={() => {}}>
            //<Text style={styles.btnText}>Chọn Ảnh Mô Tả</Text>
          //</Pressable>

export default function Add({ navigation }) {
  const [ten, setTen] = useState('');  
  const [sl, setSL] = useState('');
  const [gia, setGia] = useState('');
  const [mota, setMota] = useState('');
  const [newID, setID] = useState(StaticData.dataProds[StaticData.dataProds.length - 1].getID() + 1);
  return (
    <View style={{ height: '100%', backgroundColor: '#fff' }}>
      <ScrollView>
        <Text style={styles.title}>Thêm Sản Phẩm</Text>
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
            onChangeText={setTen}
            value={ten}
          />
          <TextInput
            placeholder="Nhập số lượng sản phẩm....."
            style={styles.input}
            onChangeText={setSL}
            value={sl}
          />
          <TextInput 
            placeholder="Nhập giá....." 
            style={styles.input} 
            onChangeText={setGia}
            value={gia}
          />
          <TextInput
            placeholder="Nhập mô tả sản phẩm....."
            style={styles.inputArea}
            onChangeText={setMota}
            value={mota}
          />
          <Pressable style={styles.btn} onPress={() => {
            StaticData.dataProds.push(new Products(newID, ten, 'demo', parseInt(sl), parseInt(gia), mota))
            setID(StaticData.dataProds[StaticData.dataProds.length - 1].getID() + 1)
            alert('Thêm Thành Công!')
            setTen('')
            setSL('')
            setGia('')
            setMota('')
          }}>
            <Text style={styles.btnText}>THÊM</Text>
          </Pressable>
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
            source={require('../../assets/addAccess.png')}
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
    marginTop: 30,
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
  btn: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#0FF',
    paddingVertical: 10,
  },
});
