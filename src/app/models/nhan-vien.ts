export class NhanVien {
    Ma: string;
    Ten: string;
    GioiTinh: string;
    ChucVu: string;
    Luong: number;
    SoDienThoai: string;

    Cmnd: string = "";
    DiaChi: string = "";
    HinhAnh: string = "";

    public constructor(init?:Partial<NhanVien>) {
        Object.assign(this, init);
    }
}
