import { Component, OnInit } from '@angular/core';
import { NgScormPlayerService } from "ng-scorm-player";

@Component({
  selector: 'app-visualizar-scorm',
  templateUrl: './visualizar-scorm.component.html',
  styleUrls: ['./visualizar-scorm.component.css']
})
export class VisualizarScormComponent implements OnInit {
  
  // name: number;
  puntajeMax: any = "Sin iniciar";

  constructor(private player: NgScormPlayerService){}

  ngOnInit(): void {
    // this.initializationScorm();
    this.getData();
    
  }

  // initializationScorm(){
  //   if(this.player.Initialize()){
  //     console.log("El scorm se inicializo correctamente.");
  //   }else{
  //     console.log("Error al imprimir el scorm, por favor valide.");
  //   }
  // }

  getData(){
    // setInterval(()=>{

    //   this.player.commitEvent.subscribe(val => { console.log("Mio 5 - " + 'commitEvent:', val); });

    //     // if(this.player.scormResult == undefined){
    //     //   this.puntajeMax = "En proceso";
    //     // }else if(this.player.scormResult == null){
    //     //   this.puntajeMax = "En proceso";
    //     // }else{
    //     //   this.puntajeMax = this.player.scormResult.scorePercent;
    //     // }

    //     // if(this.player.scormResult.runtimeData != undefined){
    //     //   console.log(this.player.scormResult.runtimeData["cmi.completion_status"]);
    //     // }

    // }, 500);

    this.player.initializeEvent.subscribe(val => { console.log("Mio 1 - " + 'initializeEvent:', val); }); 
    this.player.setValueEvent.subscribe(val => { console.log("Mio 2 - " + 'setValueEvent:', val); }); 
    this.player.getValueEvent.subscribe(val => { console.log("Mio 3 - " + 'getValueEvent:', val); }); 
    this.player.finishEvent.subscribe(val => { console.log("Mio 4 - " + 'finishEvent:', val); }); 
    this.player.commitEvent.subscribe(val => { 
      console.log("Mio 5 - " + 'commitEvent:', val); 
      let paginaScorm = val.runtimeData["cmi.core.lesson_location"];
      console.log(paginaScorm);

    });
  }
}
