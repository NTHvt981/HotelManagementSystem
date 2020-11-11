import { SelectItem } from 'primeng/api';

export class PhieuDichVu {
    Ma: string;
    MaThuePhong: string = '';
    MaNhanVien: string = '';
    ThoiGianLap: Date = new Date();
    LoaiDichVu: string = 'Thuê xe';
    ThanhTien: number = 0;
    HienThi: boolean = true;
    
    public constructor(init?:Partial<PhieuDichVu>) {
        Object.assign(this, init);

        let timeSec = (new Date()).valueOf().toString();
        this.Ma = 'PDV' + 
          timeSec.substring(0, 3) + '-' +
          timeSec.substring(3, 6) + '-' +
          timeSec.substring(6, 9) + '-' +
          timeSec.substr(9);
    }
}

var LoaiDichVuOptions: SelectItem[] = [
    {label: 'Thuê xe', value: 'Thuê xe'},
    {label: 'Phục vụ thức ăn', value: 'Phục vụ thức ăn'}
];
export {LoaiDichVuOptions};
