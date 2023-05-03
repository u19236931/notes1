import { Component, OnInit } from '@angular/core';
import { FileInfo } from '../models/fileinfo.mode';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-uploadpics',
  templateUrl: './uploadpics.component.html',
  styleUrls: ['./uploadpics.component.css']
})
export class UploadpicsComponent {

  files : FileInfo[] = [];
  currentfilenumber : number = 0;


  onFileSelected(somefile: File) {
    somefile.webkitRelativePath
    let fdate = formatDate(new Date(), 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
    
    const reader = new FileReader();
    var imgSrc : string =  "/assets/imgicon.png";
    reader.onload = (e: any) => {
      imgSrc = e.target.result;
    };
    reader.readAsDataURL(somefile);

    reader.onloadend = () => {
      this.onAddFile(somefile.name, fdate, imgSrc);
    };
  }

  onAddFile(filename: string, filedate: string, imgSrc: string) {
    this.currentfilenumber += 1;
    switch(this.currentfilenumber) {
      case 1: {
        this.files[0] = new FileInfo (filename, filedate, 1, imgSrc);
        break;
      }
      case 2: {
        this.files[1] = new FileInfo (filename, filedate, 2, imgSrc);
        break;
      }
      default: {
        this.currentfilenumber = 0;
        this.onAddFile(filename, filedate, imgSrc);
        break;
      }
    }
  }
}
