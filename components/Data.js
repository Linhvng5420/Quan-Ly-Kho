import Products from './Products';
import Bill from './Bill';

export default class StaticData{
  static dataProds = [];
  static dataBill = [];
  static dataListSell = [];
  static setData =()=>{
    StaticData.dataProds.push(new Products(1, 'Mau thu do an 01', 'demo', 14, 120000, 'Mau thu do an'));
    StaticData.dataProds.push(new Products(2, 'Sua tuoi', 'demo', 90, 120000, 'Sua tuoi tiet trung'));
    StaticData.dataProds.push(new Products(3, 'Sua dau', 'demo', 65, 120000, 'Sua dau tay it duong'));
    StaticData.dataProds.push(new Products(4, 'Ao DDC01', 'demo', 21, 120000, 'Ao khoac da DDC form 01'));
    StaticData.dataProds.push(new Products(5, 'Ao DDC02', 'demo', 21, 120000, 'Ao khoac da DDC form 02'));
    StaticData.dataProds.push(new Products(6, 'Tuong da T01', 'demo', 90, 120000, 'Tuong da phong thuy'));
    StaticData.dataBill.push(new Bill(1, 'Shop Si Le Hong Anh', 100000));
    StaticData.dataBill.push(new Bill(2, 'Shop DLOC', 120000));
    StaticData.dataBill.push(new Bill(3, 'Shop Day Dep Minh Anh', 230000));
    StaticData.dataBill.push(new Bill(4, 'Shop Si Le Minh Dai', 500000));
    StaticData.dataBill.push(new Bill(5, 'Buon Chuyen Store', 150000));
    StaticData.dataBill.push(new Bill(6, 'ADK Store', 200000));
  }
}