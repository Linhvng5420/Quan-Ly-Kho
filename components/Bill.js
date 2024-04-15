export default class Bill{
  constructor(id, shopName, tongGia){
    this.id = id;
    this.shopName = shopName;
    this.tongGia = tongGia;
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
}