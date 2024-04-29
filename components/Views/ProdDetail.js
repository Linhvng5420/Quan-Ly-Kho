import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Pressable,
  TextInput,
  Image,
  Alert,
} from 'react-native';
import react from 'react';

import Products from '../Products';
import Shops from '../Shops';
import Bill from '../Bill';
import ProductsBill from '../ProductsBill';
import StaticData from '../Data';
import { StackActions } from '@react-navigation/native';
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

export default function ProdDetail({ navigation, route }) {
  var data = route.params;
  const [name, setChangeName] = useState(data.ten)
  const [cost, setChangeCost] = useState(String(data.giaBan))
  const [quanlity, setChangeQuanlity] = useState(String(data.soLuong))
  const [sub, setChangeSub] = useState(data.mota)
  const [selectedImage, setSelectedImage] = useState(data.anh)

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri)
    } else {
      alert('You did not select any image.');
    }
  }
  const onDelete = () => {
    StaticData.dataProds = StaticData.dataProds.filter((item) => {
      return item.id != data.id
    })
    navigation.goBack()
    return Alert.alert("Xoa thanh cong")
  }
  const onUpdate = () => {
    data.anh = selectedImage
    data.ten = name
    data.giaBan = parseInt(cost)
    data.soLuong = parseInt(quanlity)
    data.mota = sub
    for (let i = 0; i < StaticData.dataProds; i++)
      StaticData.dataProds.forEach((e) => {
        if (StaticData.dataProds.id == data.id) {
          StaticData.dataProds = data
        }
      })
    return Alert.alert('Sua thanh cong');

  }

  return (
    <View style={{ height: '100%', backgroundColor: '#FFF' }}>
      <ScrollView>
        <Text style={styles.title}>Chi Tiết Sản Phẩm</Text>
        <View style={styles.container}>
          <View style={styles.borderImg}>
            <Pressable onPress={pickImageAsync}>
              <Image
                source={selectedImage != '' ? { uri: selectedImage } : require('../../assets/bill.png')}
                style={styles.img}
              />
            </Pressable>
          </View>
          <TextInput
            placeholder="Nhập tên sản phẩm....."
            value={name}
            onChangeText={(text) => { setChangeName(text); }}
            style={styles.input}
          />
          <TextInput
            placeholder="Nhập số lượng....."
            value={quanlity}
            onChangeText={(text) => { setChangeQuanlity(text); }}
            style={styles.input}
            editable={false} 
          />
          <TextInput
            placeholder="Nhập giá....."
            value={cost}
            onChangeText={(text) => { setChangeCost(text); }}
            style={styles.input}
          />
          <TextInput
            placeholder="Nhập mô tả sản phẩm....."
            value={sub}
            onChangeText={(text) => { setChangeSub(text); }}
            style={styles.inputArea}
          />
          <View style={{ width: '90%' }}>
            <Pressable style={styles.btnLeft} onPress={onDelete}>
              <Text style={styles.btnText}>XÓA</Text>
            </Pressable>
            <Pressable style={styles.btnRight} onPress={onUpdate}>
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
