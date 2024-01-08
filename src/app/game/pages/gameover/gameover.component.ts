import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { InformationModule } from "../../../information/information.module";

@Component({
  selector: 'app-gameover',
  templateUrl: './gameover.component.html',
  styleUrls: ['./gameover.component.css']
})
export class GameoverComponent implements OnInit {

  get score(): number {
    return this.playerService.score;
  }

  get highScore(): number {
    return this.playerService.highScore;
  }

  constructor(
    private playerService: PlayerService,
    private informationModule: InformationModule
  ) {

  }

  ngOnInit(): void {
    this.informationModule.saveScore();
  }

}
