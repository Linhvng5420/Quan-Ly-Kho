export default class Products{
  constructor(id, ten, anh, soLuong, giaBan, mota, daBan){
    this.id = id;
    this.ten = ten;
    this.anh = anh;
    this.soLuong = soLuong;
    this.giaBan = giaBan;
    this.mota = mota;
    this.daBan = daBan;
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
  getDaBan(){
    return this.daBan;
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
  setDaBan(daBan){
    this.daBan = daBan;
  }
  
}