class Car {
    //tozeret_nm, kinuy_mishari, shnat_yitzur, tzeva_rechev, tokef_dt
    tozeret_nm:string;
    kinuy_mishari:string;
    shnat_yitzur:string;
    tzeva_rechev:string;
    tokef_dt:string;
    _id:string;
    mispar_rechev:string;

    constructor(tozeret_nm:string,kinuy_mishari:string, shnat_yitzur:string, tzeva_rechev:string,tokef_dt:string,mispar_rechev:string){
        this.tozeret_nm = tozeret_nm;
        this.kinuy_mishari = kinuy_mishari;
        this.shnat_yitzur = shnat_yitzur;
        this.tzeva_rechev = tzeva_rechev;
        this.tokef_dt = tokef_dt;
        this._id = mispar_rechev;
        this.mispar_rechev = mispar_rechev;
    }
}

export default Car;