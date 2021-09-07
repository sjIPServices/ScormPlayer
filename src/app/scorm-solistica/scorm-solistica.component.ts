import { Component, OnInit } from '@angular/core';
import { NgScormPlayerService } from 'ng-scorm-player';
import { peticionesScorm } from '../services/ApiScorm';

@Component({
  selector: 'app-scorm-solistica',
  templateUrl: './scorm-solistica.component.html',
  styleUrls: ['./scorm-solistica.component.css'],
  providers: [peticionesScorm]
})
export class ScormSolisticaComponent implements OnInit {
  adelantar: string;
  public infoDB: any;
  public user: any;

  constructor(private player: NgScormPlayerService, private _peticionesScorm: peticionesScorm) {

    this.adelantar = "1|1|0|0|0|0|0|0|0|0|0|0|0&&3&&";
  }

  ngOnInit(): void {
    // Obtiene la informacion que llega de la base de datos
    this.ObtenerData();

    // Obtiene el objeto de la base de datos.
    this.obtenerLocalStorage();
  }

  // Obtiene el objeto de la base de datos.
  obtenerLocalStorage(){
    var aValue: string = localStorage.getItem('userInfo');

    this.user = JSON.parse(aValue).user;
    // let user = localStorage.getItem('userInfo')
    // this.user= JSON.parse(user).user;
    console.log(JSON.parse(aValue).aValue);
  }

  // Obtiene la informacion que llega de la base de datos
  ObtenerData(){
    this._peticionesScorm.getDataScorm().subscribe(
      result => {
        this.infoDB = result;
        console.log(this.infoDB);
        this.player.commitEvent.subscribe(val => {
          // console.log(val);
          this.player.SetValue(["cmi.core.lesson_location"], this.infoDB.scormResult.runtimeData["cmi.core.lesson_location"]);
        });

      },
      error => {
        console.log(error);
      }
    );
  }
}