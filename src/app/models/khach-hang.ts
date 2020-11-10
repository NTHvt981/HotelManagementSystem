import { Entity } from './../services/firestore-crud.service';
export class KhachHang implements Entity {
    Ma: string = "";
    Ten: string = "";
    GioiTinh: string = "Nam";
    Cmnd: string = "";
    NgaySinh: Date = new Date;
    SoDienThoai: string = "";
    HinhAnh: string = "https://winaero.com/blog/wp-content/uploads/2018/08/Windows-10-user-icon-big.png";

    TinhTrang: string = "Không thuê";
    HienThi: boolean = true;

    public constructor(init?:Partial<KhachHang>) {
        Object.assign(this, init);
    }
}
