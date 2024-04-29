export default class Bill{
  constructor(id, shopName, tongGia, date, type){
    this.id = id;
    this.shopName = shopName;
    this.tongGia = tongGia;
    this.type = type;
    this.date = date;
  }
  getID(){
    return this.id;
  }
  getShop(){
    return this.shopName;
  }
  getGia(){
    return this.tongGia;
  }
  getType(){
    return this.type;
  }
  getNgay(){
    return this.date;
  }
}