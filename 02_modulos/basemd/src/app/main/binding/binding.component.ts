import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class BindingComponent implements OnInit {

  sNombre: string;
  nNumber: number;
  isSpanish: boolean;

  constructor() { }

  ngOnInit() {
    this.sNombre = 'Pepe';
    this.nNumber = 22;
    this.isSpanish = false;
  }

  btnBorrar() {
    this.sNombre = '';
  }
}
