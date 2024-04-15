export default class ProductsBill{
  constructor(billID, prodID, ten, anh, soLuong, gia){
    this.billID = billID;
    this.prodID = prodID;
    this.ten = ten;
    this.anh = anh;
    this.soLuong = soLuong;
    this.gia = gia;
  }
  getBillID(){
    return this.billID;
  }
  getProdID(){
    return this.prodID;
  }
  getSoLuong(){
    return this.soLuong;
  }
  getGiaBan(){
    return this.gia;
  }
  getTen(){
    return this.ten;
  }
  getAnh(){
    return this.anh;
  }
}