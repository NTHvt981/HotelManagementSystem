import { SelectItem } from 'primeng/api';

export class PhieuThuePhong {
    Ma: string = '';
    MaKhach: string = '';
    MaPhong: string = '';
    MaLeTan: string = '';

    ThoiGianThue: Date = new Date();
    ThoiGianTra: Date = new Date();
    GioThue: number = 0;
    NgayThue: number = 0;
    TinhTrang: string = 'Chưa thanh toán';
    HienThi = true;

    public constructor(init?:Partial<PhieuThuePhong>) {
        Object.assign(this, init);
        
        let timeSec = (new Date()).valueOf().toString();
        this.Ma = 'PTP' + 
          timeSec.substring(0, 3) + '-' +
          timeSec.substring(3, 6) + '-' +
          timeSec.substring(6, 9) + '-' +
          timeSec.substr(9);
    }
}

var TinhTrangOptions: SelectItem[] = [
    {label: 'Chưa thanh toán', value: 'Chưa thanh toán'},
    {label: 'Đã thanh toán', value: 'Đã thanh toán'}
]
export {TinhTrangOptions}
