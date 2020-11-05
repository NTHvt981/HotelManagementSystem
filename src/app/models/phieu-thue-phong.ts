import { SelectItem } from 'primeng/api';

export class PhieuThuePhong {
    Ma: string;
    MaKhach: string;
    MaPhong: string;
    MaLeTan: string;

    ThoiGianThue: Date;
    ThoiGianTra: Date;
    GioThue: number;
    NgayThue: number;
    TinhTrang: string;

    public constructor(init?:Partial<PhieuThuePhong>) {
        Object.assign(this, init);
    }
    
    protected static SInit = (() => {
        PhieuThuePhong.prototype.ThoiGianThue = new Date();
        PhieuThuePhong.prototype.ThoiGianTra = new Date();
        PhieuThuePhong.prototype.GioThue = 0;
        PhieuThuePhong.prototype.NgayThue = 0;
        PhieuThuePhong.prototype.TinhTrang = "Chưa thanh toán";
    })();
}

var TinhTrangOptions: SelectItem[] = [
    {label: 'Chưa thanh toán', value: 'Chưa thanh toán'},
    {label: 'Đã thanh toán', value: 'Đã thanh toán'}
]
export {TinhTrangOptions}
