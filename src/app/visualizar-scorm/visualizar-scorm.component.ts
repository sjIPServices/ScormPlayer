import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgScormPlayerService } from "ng-scorm-player";

@Component({
  selector: 'app-visualizar-scorm',
  templateUrl: './visualizar-scorm.component.html',
  styleUrls: ['./visualizar-scorm.component.css']
})
export class VisualizarScormComponent implements OnInit, OnDestroy {
  
  // name: number;
  puntajeMax: number = 0;

  constructor(private player: NgScormPlayerService){}

  ngOnInit(): void {
    this.initializationScorm();
    this.getData();

  }

  ngOnDestroy(): void {
    alert("Esta saliendo del Scorm");
  }

  initializationScorm(){
    if(this.player.Initialize()){
      console.log("El scorm se inicializo correctamente.");
    }else{
      console.log("Error al imprimir el scorm, por favor valide.");
    }
  }

  getData(){
    setInterval(()=>{
      this.puntajeMax = this.player.scormResult.scorePercent;

    }, 500);
  }
}
