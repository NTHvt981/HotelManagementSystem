export class KhachHang {
    Ma: string;
    Ten: string;
    GioiTinh: string;
    Cmnd: string;
    NgaySinh: Date;
    SoDienThoai: string;
    HinhAnh: string;

    TinhTrang: string;

    public constructor(init?:Partial<KhachHang>) {
        Object.assign(this, init);
    }
    
    protected static SInit = (() => {
        KhachHang.prototype.GioiTinh = "Nam";
        KhachHang.prototype.TinhTrang = "Không thuê";
        KhachHang.prototype.HinhAnh = 
            "https://winaero.com/blog/wp-content/uploads/2018/08/Windows-10-user-icon-big.png";
      })();
}
