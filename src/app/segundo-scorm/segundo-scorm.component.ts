import { Component, OnInit } from '@angular/core';
import { ScormService } from '../services/ScormPlayer-Services';

@Component({
  selector: 'app-segundo-scorm',
  templateUrl: './segundo-scorm.component.html',
  styleUrls: ['./segundo-scorm.component.css']
})
export class SegundoScormComponent implements OnInit {

  constructor(private ScormPlayer: ScormService) { }

  ngOnInit(): void {
    // this.ScormPlayer.initializationScorm();

    // this.ScormPlayer.getData();
  }

}
