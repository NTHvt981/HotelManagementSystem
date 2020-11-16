export class PhieuTinhLuong {
    Ma: string;
    MaNhanVien = '';
	MucLuong = 0;
	SoNgayLam = 0;
	SoTienThuong = 0;
    SoTienTra = 0;
    NgayTraLuong = new Date();

    public constructor(init?:Partial<PhieuTinhLuong>) {
        Object.assign(this, init);
        
        let timeSec = (new Date()).valueOf().toString();
        this.Ma = 'PTL' + 
          timeSec.substring(0, 3) + '-' +
          timeSec.substring(3, 6) + '-' +
          timeSec.substring(6, 9) + '-' +
          timeSec.substr(9);
    }
}
