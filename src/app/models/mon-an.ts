export class MonAn {
    Ma: string;
    Ten: string = '';
    Gia: number = 0;
    HienThi: boolean = true;

    public constructor(init?:Partial<MonAn>) {
        Object.assign(this, init);        
        
        let timeSec = (new Date()).valueOf().toString();
        this.Ma = 'MA' + 
          timeSec.substring(0, 3) + '-' +
          timeSec.substring(3, 6) + '-' +
          timeSec.substring(6, 9) + '-' +
          timeSec.substr(9);
    }
}
