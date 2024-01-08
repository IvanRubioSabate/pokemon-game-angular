import { Component, OnInit } from '@angular/core';
import {FormsModule, ReactiveFormsModule, FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {PlayerService} from "../../game/services/player.service";


@Component({
  selector: 'app-iniciar-sessio-rubio',
  templateUrl: './iniciar-sessio-rubio.component.html',
  styleUrls: ['./iniciar-sessio-rubio.component.css'],
})
export class IniciarSessioRubioComponent implements OnInit {

  jugador: any;
  input;
  constructor(private formBuilder: FormBuilder, private router: Router, private playerService: PlayerService) {
    this.input = this.formBuilder.group({
      jugador: ''
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.playerService.changeUser(this.input.value.jugador)
    this.router.navigate(['/home'])
  }


}
