import { Component, OnInit } from '@angular/core';
import { ScormService } from '../services/ScormPlayer-Services';

@Component({
  selector: 'app-exe-learning',
  templateUrl: './exe-learning.component.html',
  styleUrls: ['./exe-learning.component.css']
})
export class ExeLearningComponent implements OnInit {

  constructor(private ScormService: ScormService) { }

  ngOnInit(): void {
    // this.ScormService.initializationScorm();

    // this.ScormService.getData();
  }

}
