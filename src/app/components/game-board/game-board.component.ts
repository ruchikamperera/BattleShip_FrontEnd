import { Component } from '@angular/core';
import { Square } from '../../models/square';
import { BattleShipService } from '../../services/battle-ship.service';


@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrl: './game-board.component.css'
})
export class GameBoardComponent {

  rows: Square[][] = [];
  boardSize: number = 10;

  constructor(private readonly battleShipService: BattleShipService) { }

  ngOnInit(): void {
    this.generateBoard(this.boardSize);
  }

  createBattleShip(): void {
    const req = {
      sizeX: this.boardSize,
      sizeY: this.boardSize
    }
    this.battleShipService.createBattleShip(req).subscribe(data => {

    })

  }

  generateBoard(boardSize: number): void {
    for (let i = 0; i < boardSize; i++) {
      const row: Square[] = [];
      for (let j = 0; j < boardSize; j++) {
        const position = String.fromCharCode(65 + j) + (boardSize - i);
        const isDark = (i + j) % 2 === 1;
        row.push({ position, isDark });
      }
      this.rows.push(row);
    }
  }

  fire(row: any, square: any) {
    console.log("sq-", square);

    const x = square.position.charAt(0);
    const y = parseInt(square.position.charAt(1));
    const req = {
      x: x,
      y: y
    }
    this.battleShipService.fire(req).subscribe(data => {

    })
  }
}
