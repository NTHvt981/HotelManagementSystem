import { PhieuDichVu } from './phieu-dich-vu';

export class PhieuThueXe implements PhieuDichVu {
    HienThi: boolean = true;
    Ma: string;
    MaThuePhong: string = '';
    MaNhanVien: string = '';
    ThoiGianLap: Date = new Date();
    LoaiDichVu: string = 'Thuê xe';
    ThanhTien: number = 0;
    
	MaXe: string = '';
	GioThue: number = 0;
    NgayThue: number = 0;
    
    public constructor(init?:Partial<PhieuThueXe>) {
        Object.assign(this, init);

        let timeSec = (new Date()).valueOf().toString();
        this.Ma = 'PTX' + 
          timeSec.substring(0, 3) + '-' +
          timeSec.substring(3, 6) + '-' +
          timeSec.substring(6, 9) + '-' +
          timeSec.substr(9);
    }
}
