export class HoaDon {
    Ma: string = '';
    MaThuePhong: string = '';
    ThoiGianLap: Date = new Date();

    TenKhach: string = '';
    SoPhong: string = '';

    ThoiGianThue: Date = new Date();
    GioThue: number = 0;
    NgayThue: number = 0;
    TongChiPhi: number = 0;
    
    public constructor(init?:Partial<HoaDon>) {
        Object.assign(this, init);
        
        let timeSec = (new Date()).valueOf().toString();
        this.Ma = 'HD' + 
          timeSec.substring(0, 3) + '-' +
          timeSec.substring(3, 6) + '-' +
          timeSec.substring(6, 9) + '-' +
          timeSec.substr(9);
    }
}
