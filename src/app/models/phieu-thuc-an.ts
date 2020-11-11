import { PhieuDichVu } from './phieu-dich-vu';

export class PhieuThucAn implements PhieuDichVu {
    HienThi: boolean = true;
    Ma: string;
    MaThuePhong: string = '';
    MaNhanVien: string = '';
    ThoiGianLap: Date = new Date();
    LoaiDichVu: string = 'Phục vụ thức ăn';
    ThanhTien: number = 0;
    
	MaMonAn: string = '';
    SoLuong: number = 0;
    
    
    public constructor(init?:Partial<PhieuThucAn>) {
        Object.assign(this, init);

        let timeSec = (new Date()).valueOf().toString();
        this.Ma = 'PTA' + 
          timeSec.substring(0, 3) + '-' +
          timeSec.substring(3, 6) + '-' +
          timeSec.substring(6, 9) + '-' +
          timeSec.substr(9);
    }
}
