import { Text, SafeAreaView, StyleSheet, View, TextInput, Pressable, ScrollView, Image } from 'react-native';
import react, {useState} from 'react';

import Products from '../Products';
import Shops from '../Shops';
import Bill from '../Bill';
import ProductsBill from '../ProductsBill';
import ItemShopBill from '../ItemShopBill';
import StaticData from '../Data';

export default function ListBill({navigation}){
  const [listBill, setList] = useState(null);
  
  
  return(<View style={{height: '100%', backgroundColor: '#fff'}}>
    <View>
      <Text style={styles.title}>Danh Sách Hóa Đơn</Text>
        <Pressable style={styles.btn}
          onPress={()=>{
            let list = [];
            for(let i = 0; i < StaticData.dataBill.length; i++){
              list.push(
                <ItemShopBill
                  value={StaticData.dataBill[i]}
                />
              );
            } 
            setList(list)
          }}
        >
          <Text style={styles.btnText}>LÀM MỚI 🔄️</Text>
        </Pressable>
      <ScrollView style={styles.container}>{listBill}</ScrollView>
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
    marginTop: 10,
    width: '40%',
    alignSelf: 'center',
    backgroundColor: '#2ECC71',
    paddingVertical: 5,
    borderRadius:10,
  },
  btnText:{
    textAlign: 'center', 
    fontSize: 25,
    color:'white',
  },
  navIcon:{
    width: 30,
    height: 30,
    marginHorizontal: 10
  },
  
  navbar: {
    width: "100%",
    height: 50,
    position: "absolute",
    bottom: 0,
    backgroundColor: "#20c7b7",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  container: {
    height: '77%',
    backgroundColor: '#FFF',
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