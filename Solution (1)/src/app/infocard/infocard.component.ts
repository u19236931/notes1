import { Component, OnInit, Input } from '@angular/core';
import { FileInfo } from '../models/fileinfo.mode';

@Component({
  selector: 'app-infocard',
  templateUrl: './infocard.component.html',
  styleUrls: ['./infocard.component.css']
})
export class InfocardComponent implements OnInit {

  @Input()
  info! : FileInfo;

  ngOnInit(): void {

  }

}
