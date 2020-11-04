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
}
