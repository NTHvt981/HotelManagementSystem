export class NhanVien {
    Ma: string;
    Ten: string;
    GioiTinh: string;
    Cmnd: string;
    NgaySinh: Date;
    SoDienThoai: string;
    HinhAnh: string;

    DiaChi: string;
    ChucVu: string;
    Luong: number;

    public constructor(init?:Partial<NhanVien>) {
        Object.assign(this, init);
    }
    protected static SInit = (() => {
        NhanVien.prototype.GioiTinh = "Nam";
        NhanVien.prototype.HinhAnh = 
            "https://winaero.com/blog/wp-content/uploads/2018/08/Windows-10-user-icon-big.png";
      })();
}
