import { SelectItem } from 'primeng/api';

export class PhieuDichVu {
    Ma: string;
    MaThuePhong: string;
    MaNhanVien: string;
    ThoiGianLap: Date;
    LoaiDichVu: string;
    ThanhTien: number;
    
    public constructor(init?:Partial<PhieuDichVu>) {
        Object.assign(this, init);
    }
    
    protected static SInit = (() => {
        PhieuDichVu.prototype.ThoiGianLap = new Date();
        PhieuDichVu.prototype.LoaiDichVu = 'Thuê xe';
        PhieuDichVu.prototype.ThanhTien = 0;
    })();
}

var LoaiDichVuOptions: SelectItem[] = [
    {label: 'Thuê xe', value: 'Thuê xe'},
    {label: 'Phục vụ thức ăn', value: 'Phục vụ thức ăn'}
];
export {LoaiDichVuOptions};
