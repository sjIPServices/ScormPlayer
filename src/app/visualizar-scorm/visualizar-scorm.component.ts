import { Component, OnInit } from '@angular/core';
import { NgScormPlayerModule, NgScormPlayerService } from 'ng-scorm-player';
// import { ScormPlayer } from '../services/ScormPlayer-Services';

@Component({
  selector: 'app-visualizar-scorm',
  templateUrl: './visualizar-scorm.component.html',
  styleUrls: ['./visualizar-scorm.component.css']
})
export class VisualizarScormComponent implements OnInit {
  
  constructor(private NgScormPlayerModule: NgScormPlayerModule, private player: NgScormPlayerService){}

  ngOnInit(): void {

    if(this.player.Initialize()){
      console.log("El scorm se inicializo correctamente.");
    }else{
      console.log("Error al imprimir el scorm, por favor valide.");
    }

    // console.log(this.player.MyGetValue);

    // console.log(this.player.getValueEvent);
    // this.player.getValueEvent.subscribe((data) => {
    //   console.log(data.score);
    //   //DO STUFF HERE
    // });
    // console.log(this.player.LMSGetValue);
    // this.ScormPlayer.getScorm();
    // this.player.initializeEvent.subscribe(val => { console.log('initializeEvent:', val); }); 
    // this.player.setValueEvent.subscribe(val => { console.log('setValueEvent:', val); }); 
    // this.player.getValueEvent.subscribe(val => { console.log('getValueEvent:', val); }); 
    // this.player.finishEvent.subscribe(val => { console.log('finishEvent:', val); }); 
    // this.player.commitEvent.subscribe(val => { console.log('commitEvent:', val); }); 

    this.getData();

  }

  getData(){
    setInterval(() => {

      var puntaje = this.player.scormResult.scorePercent;

        if(puntaje == null){
          puntaje = 0;
        }

        console.log("Su puntaje es: " + puntaje);

      console.log(this.player.scormResult.completed);
      console.log(this.player.scormResult.completedOn);
      console.log(this.player.scormResult.progression);
      console.log(this.player.scormResult.runtimeData);
      console.log(this.player.scormResult.score);
      console.log(this.player.scormResult.scoreMax);
      console.log(this.player.scormResult.scorePercent);
      console.log(this.player.MyGetValue);
      console.log(this.player.getValueEvent);
      console.log(this.player.getValueEvent);

      // this.player.MyGetValue(key){
      //   try{

      //   }
      // }
    }, 5000);

    
  }



}
