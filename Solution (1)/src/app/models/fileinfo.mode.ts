export class FileInfo {

    filename : string;
    date : string;
    filenumber : number;
    imgSrc : string;
    
    constructor (fname : string, fdate : string, fnumber : number, imgSrc : string) {
        this.filename = fname;
        this.date = fdate;
        this.filenumber = fnumber;
        this.imgSrc = imgSrc;
    }
}