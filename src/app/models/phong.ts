import { SelectItem } from 'primeng/api';

export class Phong {
    Ma: string = '';
    SoPhong: string = '';

    SoTang: number = 0;
    SoGiuong: number = 0;

    LoaiPhong: string = 'Bình dân';

    GiaTheoGio: number = 0;
    GiaTheoNgay: number = 0;
    TinhTrang: string = 'Không thuê';

    HinhAnh = 'https://winaero.com/blog/wp-content/uploads/2018/08/Windows-10-user-icon-big.png';
    HienThi = true;
    
    public constructor(init?:Partial<Phong>) {
        let timeSec = (new Date()).valueOf().toString();
        
        this.Ma = 'P' + 
          timeSec.substring(0, 3) + '-' +
          timeSec.substring(3, 6) + '-' +
          timeSec.substring(6, 9) + '-' +
          timeSec.substr(9);

        Object.assign(this, init);
    }
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