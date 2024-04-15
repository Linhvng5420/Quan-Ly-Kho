export default class Products{
  constructor(id, ten, anh, soLuong, giaBan, mota){
    this.id = id;
    this.ten = ten;
    this.anh = anh;
    this.soLuong = soLuong;
    this.giaBan = giaBan;
    this.mota = mota;
  }
  getID(){
    return this.id;
  }
  getTen(){
    return this.ten;
  }
  getAnh(){
    return this.anh;
  }
  getSoLuong(){
    return this.soLuong;
  }
  getGiaBan(){
    return this.giaBan;
  }
  getMoTa(){
    return this.mota;
  }
  setTen(ten){
    this.ten = ten;
  }
  setSoLuong(sl){
    this.soLuong = sl;
  }
  setGiaBan(gia){
    this.giaBan = gia;
  }
  setMoTa(mt){
    this.mota = mt;
  }
  
}