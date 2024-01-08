import { Component, OnInit } from '@angular/core';
import {InformationModule} from "../../information.module";

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {

  constructor(
    public informationModule: InformationModule
  ) {
  }

  ngOnInit(): void {
    console.log(this.informationModule.scoresSaved.toLocaleString())
  }

}
