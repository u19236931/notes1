import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FileInfo } from '../models/fileinfo.mode';


@Component({
  selector: 'app-filechooser',
  templateUrl: './filechooser.component.html',
  styleUrls: ['./filechooser.component.css']
})
export class FilechooserComponent implements OnInit {

  @Output() onFileSelect = new EventEmitter<File>();

  constructor() { }

  ngOnInit(): void {

  }

  //sending select file to parent
  selectFile (event : Event) {
    let tgt = event.target as HTMLInputElement;
    if (tgt.files) {
        let file = tgt.files[0];
        this.onFileSelect.emit(file);
    }
  }

}
