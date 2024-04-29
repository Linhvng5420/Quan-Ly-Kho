import Products from './Products';
import Bill from './Bill';

export default class StaticData{
  static phanChiaNgay = 86400000;
  static dataProds = [];
  static dataBill = [];
  static dataListSell = [];
  static dataListImport = [];
  static setData =()=>{
    StaticData.dataProds.push(new Products(1, 'Mau thu do an 01', '', 14, 120000, 'Mau thu do an',18));
    StaticData.dataProds.push(new Products(2, 'Sua tuoi', '', 90, 120000, 'Sua tuoi tiet trung', 90));
    StaticData.dataProds.push(new Products(3, 'Sua dau', '', 65, 120000, 'Sua dau tay it duong', 130));
    StaticData.dataProds.push(new Products(4, 'Ao DDC01', '', 21, 120000, 'Ao khoac da DDC form 01', 98));
    StaticData.dataProds.push(new Products(5, 'Ao DDC02', '', 21, 120000, 'Ao khoac da DDC form 02', 90));
    StaticData.dataProds.push(new Products(6, 'Tuong da T01', '', 90, 120000, 'Tuong da phong thuy', 58));
    StaticData.dataBill.push(new Bill(1, 'Shop Si Le Hong Anh', 100000, new Date(Date.now()), 1));
    StaticData.dataBill.push(new Bill(2, 'Shop DLOC', 120000, new Date(Date.now()), 2));
    StaticData.dataBill.push(new Bill(3, 'Shop Day Dep Minh Anh', 230000, new Date(Date.now()), 2));
    StaticData.dataBill.push(new Bill(4, 'Shop Si Le Minh Dai', 500000, new Date(Date.now()), 1));
    StaticData.dataBill.push(new Bill(5, 'Buon Chuyen Store', 150000, new Date(Date.now()), 1));
    StaticData.dataBill.push(new Bill(6, 'ADK Store', 200000, new Date(Date.now()), 1));
  }
}