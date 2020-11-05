export class Xe {
    Ma: string;
    Ten: string;
    HinhAnh: string;
    GiaTheoGio: number;
    GiaTheoNgay: number;
    TinhTrang: string;

    public constructor(init?:Partial<Xe>) {
        Object.assign(this, init);
    }
    
    protected static SInit = (() => {
        Xe.prototype.GiaTheoGio = 0;
        Xe.prototype.GiaTheoNgay = 0;
        Xe.prototype.TinhTrang = "Không thuê";
      })();
}

var TinhTrangOptions = [
    {label: 'Đang thuê', value: 'Đang thuê'},
    {label: 'Không thuê', value: 'Không thuê'},
    {label: 'Đang bảo trì', value: 'Đang bảo trì'}
];
export {TinhTrangOptions};