export class Xe {
    Ma: string;
    Ten: string = '';
    HinhAnh: string = '';
    GiaTheoGio: number = 0;
    GiaTheoNgay: number = 0;
    TinhTrang: string = 'Không thuê';
    HienThi: boolean = true;

    public constructor(init?:Partial<Xe>) {
        Object.assign(this, init);
        
        let timeSec = (new Date()).valueOf().toString();
        this.Ma = 'XE' + 
          timeSec.substring(0, 3) + '-' +
          timeSec.substring(3, 6) + '-' +
          timeSec.substring(6, 9) + '-' +
          timeSec.substr(9);
    }
}

var TinhTrangOptions = [
    {label: 'Đang thuê', value: 'Đang thuê'},
    {label: 'Không thuê', value: 'Không thuê'},
    {label: 'Đang bảo trì', value: 'Đang bảo trì'}
];
export {TinhTrangOptions};