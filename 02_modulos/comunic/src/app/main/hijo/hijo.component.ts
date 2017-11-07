import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() miNombre: string;
  @Output() recibido: EventEmmitter<string>;
  sNombreFavorito: string;
  constructor() {
    this.recibido = new EventEmitter();
   }

  ngOnInit() {
  }

  btnEvento(){
    this.recibido.emit(this.sNombreFavorito);
  }
}
