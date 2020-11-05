export class MonAn {
    Ma: string;
    Ten: string;
    Gia: number;

    public constructor(init?:Partial<MonAn>) {
        Object.assign(this, init);
    }
    protected static SInit = (() => {
        MonAn.prototype.Gia = 0;
    })();
}
