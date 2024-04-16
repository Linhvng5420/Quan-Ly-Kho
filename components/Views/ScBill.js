import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Pressable,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Alert } from "react-native";
import react, { useState } from "react";

import Products from "../Products";
import Shops from "../Shops";
import Bill from "../Bill";
import ProdItem from "../ProdItem";
import StaticData from "../Data";
import ProductsBill from "../ProductsBill";

export default function ScBill({ navigation }) {
  const [listProds, setList] = useState(null);
  const [listViewSell, setViewSell] = useState(null);
  const [char, setChar] = useState("");
  const [shop, setShop] = useState("");
  const [ma, setMa] = useState("");
  const [sl, setSL] = useState("");

  const changeMa = (value) => {
    alert("Đã Chọn: " + value.getTen());
    setMa(value.getID());
  };

  const pushList = (product) => {
    if (product.getSoLuong() >= parseInt(sl)) {
      // Decrease the quantity of the product
      product.setSoLuong(product.getSoLuong() - parseInt(sl));

      StaticData.dataListSell.push(
        new ProductsBill(
          null,
          product.getID(),
          product.getTen(),
          null,
          sl,
          product.getGiaBan() * parseInt(sl)
        )
      );
      let list = [];
      for (let i = 0; i < StaticData.dataListSell.length; i++) {
        list.push(<ProdItem value={StaticData.dataListSell[i]} />);
      }
      setViewSell(list);
    } else {
      alert("Số Lượng Trong Kho Không Còn Đủ!");
    }
  };

  return (
      <View style={{ height: "100%", backgroundColor: "white" }}>
        <ScrollView>
          <View style={styles.container}>
            {/*Hien thi ds san pham khi nhan tim kiem */}
            <View style={styles.form}>
              <TextInput
                placeholder="Tìm Kiếm Sản Phẩm"
                style={styles.input}
                onChangeText={setChar}
              />
              <Pressable
                style={styles.btnR}
                onPress={() => {
                  let list = [];
                  for (let i = 0; i < StaticData.dataProds.length; i++) {
                    if (
                      StaticData.dataProds[i].getTen().indexOf(char) > -1 ||
                      StaticData.dataProds[i].getMoTa().indexOf(char) > -1
                    ) {
                      list.push(
                        <ProdItem
                          onPress={changeMa}
                          value={StaticData.dataProds[i]}
                        />
                      );
                    }
                  }
                  setList(list);
                }}
              >
                <Text style={styles.btnText}>TÌM KIẾM 🔎</Text>
              </Pressable>
            </View>

            {/* hien thi ds sp */}
            <ScrollView style={{ height: 350, width: "100%" }}>
              {listProds}
            </ScrollView>

            {/* Them So Luong */}
            <View style={{ width: "90%", marginBottom: 5, marginRight: -340 }}>
              <TextInput
                placeholder="SL"
                style={{
                  fontSize: 20,
                  marginTop: 5,
                  paddingLeft: 10,
                  width: "20%",
                  height: 30,
                  borderWidth: 1,
                  borderRadius: 5,
                }}
                value={sl}
                onChangeText={(index) => {
                  if (
                    index[index.length - 1] <= "9" &&
                    index[index.length - 1] >= "0"
                  ) {
                    setSL(index);
                  } else if (index == "") {
                    setSL("");
                  }
                }}
              />
              <Pressable
                style={{
                  position: "absolute",
                  left: 90,
                  marginTop: 5,
                  width: "20%",
                  height: 30,
                  alignItems: "center",
                  borderColor: "green",
                  borderWidth: 1,
                  borderRadius: 5,
                }}
                onPress={() => {
                  if (sl != "" && ma != "") {
                    for (let i = 0; i < StaticData.dataProds.length; i++) {
                      if (StaticData.dataProds[i].getID() == ma) {
                        pushList(StaticData.dataProds[i]);
                        setMa("");
                        setSL("");
                        break;
                      }
                    }
                  } else {
                    alert("Chưa Chọn Sản Phẩm! \nChưa Nhập Số Lượng!");
                  }

                  let list = [];
                  for (let i = 0; i < StaticData.dataProds.length; i++) {
                    if (
                      StaticData.dataProds[i].getTen().indexOf(char) > -1 ||
                      StaticData.dataProds[i].getMoTa().indexOf(char) > -1
                    ) {
                      list.push(
                        <ProdItem
                          onPress={changeMa}
                          value={StaticData.dataProds[i]}
                        />
                      );
                    }
                  }

                  setList(list);
                }}
              >
                <Text
                  style={{ fontSize: 20, color: "green", fontWeight: "bold" }}
                >
                  THÊM
                </Text>
              </Pressable>
            </View>

            {/* DANH SÁCH SẢN PHẨM */}
            <Text style={styles.title}>SẢN PHẨM ĐÃ THÊM</Text>
            <View style={styles.form}>
              <TextInput
                placeholder="Nhập tên Bill"
                value={shop}
                style={styles.input}
                onChangeText={setShop}
              />
              <Pressable
                style={styles.btnR}
                onPress={() => {
                  if (shop != "") {
                    let tong = 0;
                    for (let i = 0; i < StaticData.dataListSell.length; i++) {
                      let index = StaticData.dataProds.findIndex(
                        (prod) =>
                          prod.getID() == StaticData.dataListSell[i].getProdID()
                      );
                      StaticData.dataProds[index].setSoLuong(
                        StaticData.dataProds[index].getSoLuong() -
                          StaticData.dataListSell[i].getSoLuong()
                      );
                      tong += StaticData.dataListSell[i].getGiaBan();
                    }
                    StaticData.dataBill.push(new Bill(null, shop, tong));
                    alert("Đã Tạo Bill!");
                    StaticData.dataListSell = [];
                    setViewSell(null);
                    setShop("");
                  } else {
                    alert("Chưa Nhập Tên Bill");
                  }
                }}
              >
                <Text
                  style={{ fontSize: 20, color: "green", fontWeight: "bold" }}
                >
                  TẠO BILL ✅
                </Text>
              </Pressable>
            </View>
            <ScrollView style={{ width: "100%" }}>{listViewSell}</ScrollView>
          </View>
        </ScrollView>

        <View style={styles.navbar}>
          <Pressable
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Image
              style={styles.navIcon}
              source={require("../../assets/home.png")}
            />
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate("Add");
            }}
          >
            <Image
              style={styles.navIcon}
              source={require("../../assets/add.png")}
            />
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate("Find");
            }}
          >
            <Image
              style={styles.navIcon}
              source={require("../../assets/search.png")}
            />
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate("Import");
            }}
          >
            <Image
              style={styles.navIcon}
              source={require("../../assets/addP.png")}
            />
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate("ScreenBill");
            }}
          >
            <Image
              style={styles.navIcon}
              source={require("../../assets/shopAccess.png")}
            />
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate("ListBill");
            }}
          >
            <Image
              style={styles.navIcon}
              source={require("../../assets/bill.png")}
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
    width: "100%",
    height: 50, // Set a fixed height for the navbar
    position: "absolute",
    bottom: 0,
    backgroundColor: "#20c7b7",
    flexDirection: "row",
    justifyContent: "space-around", // Adjust as needed
    alignItems: "center",
  },
  
  container: {
    alignItems: "center",
  },

  title: {
    width: "100%",
    textAlign: "center",
    paddingVertical: 5,
    fontSize: 15,
    fontWeight: "bold",
    backgroundColor: "#2ECC71",
  },

  //box input
  input: {
    fontSize: 20,
    marginTop: 10,
    paddingLeft: 10,
    width: "55%",
    height: 30,
    borderWidth: 1,
    borderRadius: 5,
  },

  //button search, add, submit
  btnR: {
    position: "absolute",
    right: 0,
    marginTop: 10,
    width: "40%",
    height: 30,
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "green",
  },
  btnText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
  },

  form: {
    width: "90%",
    marginBottom: 10,
  },
});
