import { Component, OnInit } from '@angular/core';
import { NgScormPlayerService } from 'ng-scorm-player';

@Component({
  selector: 'app-scorm-solistica',
  templateUrl: './scorm-solistica.component.html',
  styleUrls: ['./scorm-solistica.component.css']
})
export class ScormSolisticaComponent implements OnInit {

  contadorVideo: number = 0;
  textoVideo: string = "No ha iniciado el curso";
  mensajesTSV: Array<any>;

  constructor(private player: NgScormPlayerService) {
    this.mensajesTSV = [
      { 1: "Inició el Scorm" },
      { 2: "Inició el video" },
      { 3: "Finalizo el video" },
      { 4: "Se dirije a la siguiente sección" },
      { 5: "Finalizo esta sección" }
    ];
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.player.initializeEvent.subscribe(val => { console.log("Mio 1 - " + 'initializeEvent:', val); }); 
    this.player.setValueEvent.subscribe(val => { console.log("Mio 2 - " + 'setValueEvent:', val); }); 
    this.player.getValueEvent.subscribe(val => { console.log("Mio 3 - " + 'getValueEvent:', val); }); 
    this.player.finishEvent.subscribe(val => { console.log("Mio 4 - " + 'finishEvent:', val); }); 
    this.player.commitEvent.subscribe(val => { console.log("Mio 5 - " + this.metodoPrueba() + 'commitEvent:', val); });
    // this.player.commitEvent.subscribe(val => { console.log("Mio 5 - " + 'commitEvent:', val); });

  }

  metodoPrueba(){
    // this.contadorVideo = this.contadorVideo;
    
    alert(this.mensajesTSV[this.contadorVideo][this.contadorVideo = ++ this.contadorVideo]);

    if(this.contadorVideo == 5){
      this.contadorVideo = 2;
      alert(this.mensajesTSV[this.contadorVideo][this.contadorVideo = ++ this.contadorVideo]);
    }

  }

}
