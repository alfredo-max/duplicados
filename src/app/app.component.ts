import { Component } from '@angular/core';

// servicio
import { DuplicadoserviceService} from 'src/app/services/duplicadoservice.service';
import { Duplicadomodel } from 'src/app/models/duplicadomodel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pruebaduplicados';

  constructor(private _duplicadoservice: DuplicadoserviceService) { }

  crearregistro(){
    let registro: Duplicadomodel=new Duplicadomodel("123","pepe","20");
    this._duplicadoservice.create(registro).then(()=>{
      console.log("creado")
    });
  }
}
