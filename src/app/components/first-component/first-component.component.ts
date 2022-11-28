import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {
  name : string = 'Matheus';
  age: number = 30;
  role: string = "Analista de Sistemas"
  hobbies: string[] = ["Ver filme", "Jogar videogame", "Estudar Programação"]

  constructor() { }

  ngOnInit(): void {
  }

}
