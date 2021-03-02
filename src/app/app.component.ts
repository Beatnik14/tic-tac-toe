import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tic-tac-toe';

  player1 = 'Player1 (X)';
  player2 = 'Player2 (0)';
  winner: string;
  checkWinner;
  counter: number = 1;
  sqr1_1: string = '';
  sqr1_2: string = '';
  sqr1_3: string = '';
  sqr2_1: string = '';
  sqr2_2: string = '';
  sqr2_3: string = '';
  sqr3_1: string = '';
  sqr3_2: string = '';
  sqr3_3: string = '';

  onClick1_1() {
    if (this.counter % 2 === 0) {
      this.sqr1_1 = '0';
    } else {
      this.sqr1_1 = 'X';
    }
    this.counter++;
    this.playerWon();
  }
  onClick1_2() {
    if (this.counter % 2 === 0) {
      this.sqr1_2 = '0';
    } else {
      this.sqr1_2 = 'X';
    }
    this.counter++;
    this.playerWon();
  }
  onClick1_3() {
    if (this.counter % 2 === 0) {
      this.sqr1_3 = '0';
    } else {
      this.sqr1_3 = 'X';
    }
    this.counter++;
    this.playerWon();
  }
  onClick2_1() {
    if (this.counter % 2 === 0) {
      this.sqr2_1 = '0';
    } else {
      this.sqr2_1 = 'X';
    }
    this.counter++;
    this.playerWon();
  }
  onClick2_2() {
    if (this.counter % 2 === 0) {
      this.sqr2_2 = '0';
    } else {
      this.sqr2_2 = 'X';
    }
    this.counter++;
    this.playerWon();
  }
  onClick2_3() {
    if (this.counter % 2 === 0) {
      this.sqr2_3 = '0';
    } else {
      this.sqr2_3 = 'X';
    }
    this.counter++;
    this.playerWon();
  }
  onClick3_1() {
    if (this.counter % 2 === 0) {
      this.sqr3_1 = '0';
    } else {
      this.sqr3_1 = 'X';
    }
    this.counter++;
    this.playerWon();
  }
  onClick3_2() {
    if (this.counter % 2 === 0) {
      this.sqr3_2 = '0';
    } else {
      this.sqr3_2 = 'X';
    }
    this.counter++;
    this.playerWon();
  }
  onClick3_3() {
    if (this.counter % 2 === 0) {
      this.sqr3_3 = '0';
    } else {
      this.sqr3_3 = 'X';
    }
    this.counter++;
    this.playerWon();
  }

  reset() {
    this.winner = '';
    this.counter = 1;
    this.sqr1_1 = '';
    this.sqr1_2 = '';
    this.sqr1_3 = '';
    this.sqr2_1 = '';
    this.sqr2_2 = '';
    this.sqr2_3 = '';
    this.sqr3_1 = '';
    this.sqr3_2 = '';
    this.sqr3_3 = '';
    this.checkWinner = '';
  }

  playerWins(player) {
    if (player === 'X') {
      this.winner = 'Player1 (X) Wins';
    } else {
      this.winner = 'Player2 (0) Wins';
    }
    this.checkWinner = 'winner'

    setTimeout(() => {
      this.reset();
    }, 2000);
  }

  playerWon() {
    if (
      this.sqr1_1 != '' &&
      this.sqr1_1 === this.sqr1_2 &&
      this.sqr1_1 === this.sqr1_3
    ) {
      this.playerWins(this.sqr1_1);
    }
    if (
      this.sqr2_1 != '' &&
      this.sqr2_1 === this.sqr2_2 &&
      this.sqr2_1 === this.sqr2_3
    ) {
      this.playerWins(this.sqr2_1);
    }
    if (
      this.sqr3_1 != '' &&
      this.sqr3_1 === this.sqr3_2 &&
      this.sqr3_1 === this.sqr3_3
    ) {
      this.playerWins(this.sqr3_1);
    }

    if (
      this.sqr1_1 != '' &&
      this.sqr1_1 === this.sqr2_1 &&
      this.sqr1_1 === this.sqr3_1
    ) {
      this.playerWins(this.sqr1_1);
    }
    if (
      this.sqr1_2 != '' &&
      this.sqr1_2 === this.sqr2_2 &&
      this.sqr1_2 === this.sqr3_2
    ) {
      this.playerWins(this.sqr1_2);
    }
    if (
      this.sqr1_3 != '' &&
      this.sqr1_3 === this.sqr2_3 &&
      this.sqr1_3 === this.sqr3_3
    ) {
      this.playerWins(this.sqr1_3);
    }

    if (
      this.sqr1_1 != '' &&
      this.sqr1_1 === this.sqr2_2 &&
      this.sqr1_1 === this.sqr3_3
    ) {
      this.playerWins(this.sqr1_1);
    }
    if (
      this.sqr1_3 != '' &&
      this.sqr1_3 === this.sqr2_2 &&
      this.sqr1_3 === this.sqr3_1
    ) {
      this.playerWins(this.sqr1_3);
    }
  }
}
