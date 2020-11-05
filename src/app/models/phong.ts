import { SelectItem } from 'primeng/api';

export class Phong {
    Ma: string;
    SoPhong: string;

    SoTang: number;
    SoGiuong: number;

    LoaiPhong: string;

    GiaTheoGio: number;
    GiaTheoNgay: number;
    TinhTrang: string;
    
    public constructor(init?:Partial<Phong>) {
        Object.assign(this, init);
    }
    protected static SInit = (() => {
        Phong.prototype.TinhTrang = "Không thuê";
    })();
}

var LoaiPhongOptions:SelectItem[] = [
    {label: 'Bình dân', value: 'Bình dân'},
    {label: 'Thương gia', value: 'Thương gia'}
];
export {LoaiPhongOptions};

var TinhTrangOptions = [
    {label: 'Đang thuê', value: 'Đang thuê'},
    {label: 'Không thuê', value: 'Không thuê'},
    {label: 'Đang bảo trì', value: 'Đang bảo trì'}
];
export {TinhTrangOptions};