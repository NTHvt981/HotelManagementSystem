export class HoaDon {
    Ma: string;
    MaThuePhong: string;
    ThoiGianLap: Date;

    TenKhach: string;
    SoPhong: string;

    ThoiGianThue: Date;
    GioThue: number;
    NgayThue: number;
    TongChiPhi: number;
    
    public constructor(init?:Partial<HoaDon>) {
        Object.assign(this, init);
    }
    
    protected static SInit = (() => {
        HoaDon.prototype.ThoiGianLap = new Date();
    })();
}
