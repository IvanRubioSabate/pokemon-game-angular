import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationRoutingModule } from './information-routing.module';
import { MaterialModule } from '../material/material.module';

import { HowToPlayComponent } from './pages/how-to-play/how-to-play.component';
import { ScoresComponent } from './pages/scores/scores.component';
import { PlayerService } from "../game/services/player.service";


@NgModule({
  declarations: [
    HowToPlayComponent,
    ScoresComponent
  ],
  imports: [
    CommonModule,
    InformationRoutingModule,
    MaterialModule
  ]
})
export class InformationModule {

  scoresSaved: any[];


  constructor(
    private playerService: PlayerService
  ) {
    this.scoresSaved = [];
    if (localStorage.getItem('scores') !== null) {
      this.scoresSaved = JSON.parse(localStorage['scores']);
    }
  }

  saveScore() {
    let score = {
      player: this.playerService.username,
      score: this.playerService.score
    }
    this.scoresSaved.push(score)
    console.log(score.player, score.score)
    localStorage.setItem('scores', JSON.stringify(this.scoresSaved));
  }

}
