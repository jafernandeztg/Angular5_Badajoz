import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css'],
})
export class LogComponent implements OnInit {

  public direccion: string;

  constructor() { }

  ngOnInit() {
    this.direccion = '../../assets/images.png';
  }

}
