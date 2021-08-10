import { NgScormPlayerService } from "ng-scorm-player";

export class ScormPlayer {
    
    constructor(private NgScormPlayerServices: NgScormPlayerService){
        
    }

    getScorm(){
        this.NgScormPlayerServices.getUrlLaunchPage("../assets/ScormPruebas/index.html");
    }

}