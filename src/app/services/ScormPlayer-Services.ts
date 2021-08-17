import { Injectable } from "@angular/core";
import { NgScormPlayerService } from "ng-scorm-player";

@Injectable()
export class ScormService{
    
    constructor(private player: NgScormPlayerService){  }

    // initializationScorm(){
    //     if(this.player.Initialize()){
    //         console.log("El scorm se inicializo correctamente.");
    //       }else{
    //         console.log("Error al imprimir el scorm, por favor valide.");
    //       }
    // }

    // getData(){
    //     // setInterval(() => {
    
    //     //     var puntaje = this.player.scormResult.scorePercent;
    
    //     //     if(puntaje == null){
    //     //       puntaje = 0; 
    //     //     }
    
    //     //     console.log("Su puntaje es: " + puntaje);
    
    //     //     console.log(this.player.scormResult.completed);
    //     //     console.log(this.player.scormResult.completedOn);
    //     //     console.log(this.player.scormResult.progression);
    //     //     console.log(this.player.scormResult.runtimeData);
    //     //     console.log(this.player.scormResult.score);
    //     //     console.log(this.player.scormResult.scoreMax);
    //     //     console.log(this.player.scormResult.scorePercent);
    //     //     console.log(this.player.MyGetValue);
    //     //     console.log(this.player.getValueEvent);
    //     //     console.log(this.player.getValueEvent);

    //     // }, 5000);

    //     // var Hola: string;

      

    //     // this.player.LMSGetValue(Hola:String){
    //     //   try {
    //     //     this.player.getValueSource.next(this.player.scormResult);
    //     //     return this.player.runtimeData[key] ? this.player.runtimeData[key] : '';
    //     //   }
    //     //   catch (err) {
    //     //   }
    //     // }
    // }

}