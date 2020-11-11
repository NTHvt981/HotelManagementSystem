import { randomDate } from '../services/common-functions';

export class NhanVien {
    Ma: string;
    Ten: string = '';
    GioiTinh: string = 'Nam';
    Cmnd: string = '';
    NgaySinh: Date = new Date();
    SoDienThoai: string = '';
    HinhAnh: string = 'https://winaero.com/blog/wp-content/uploads/2018/08/Windows-10-user-icon-big.png';

    DiaChi: string = '';
    ChucVu: string = 'Nhân viên lễ tân';
    Luong: number = 0;
    HienThi: boolean = true;

    public constructor(init?:Partial<NhanVien>) {
        Object.assign(this, init);
                
        let timeSec = (new Date()).valueOf().toString();
        this.Ma = 'NV' + 
          timeSec.substring(0, 3) + '-' +
          timeSec.substring(3, 6) + '-' +
          timeSec.substring(6, 9) + '-' +
          timeSec.substr(9);
          
        this.Cmnd = timeSec;
        this.SoDienThoai = timeSec.substring(0, 3) + '-' +
         timeSec.substring(3, 7) + '-' +
         timeSec.substring(7, 10)

        this.NgaySinh = randomDate('01/01/1950', '01/01/2000')
    }
}
