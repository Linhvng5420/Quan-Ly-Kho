export default class Shops{
  constructor(id, ten, soDienThoai, diaChi){
    this.id = id;
    this.ten = ten;
    this.soDienThoai = soDienThoai;
    this.diaChi = diaChi;
  }
  getID(){
    return this.id;
  }
  getTen(){
    return this.ten;
  }
  getSDT(){
    return this.soDienThoai;
  }
  getDiaChi(){
    return this.diaChi;
  }
}