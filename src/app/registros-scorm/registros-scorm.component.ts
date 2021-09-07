import { Component, OnInit } from '@angular/core';
import { peticionesScorm } from '../services/ApiScorm';

@Component({
  selector: 'app-registros-scorm',
  templateUrl: './registros-scorm.component.html',
  styleUrls: ['./registros-scorm.component.css'],
  providers: [peticionesScorm]
})
export class RegistrosScormComponent implements OnInit {

  public infoDB: any;

  constructor(private _peticionesScorm: peticionesScorm) { }

  ngOnInit(): void {
    this.ObtenerInfo();
  }

  ObtenerInfo(){
    this._peticionesScorm.getDataScorm().subscribe(
      result => {
        this.infoDB = result;
        console.log(this.infoDB);
        console.log(this.infoDB.scormResult.runtimeData["cmi.core.lesson_location"]);

      },
      error => {
        console.log(error);
      }
    );
  }

}
