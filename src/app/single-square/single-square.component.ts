import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-single-square',
  templateUrl: './single-square.component.html',
  styleUrls: ['./single-square.component.scss'],
})
export class SingleSquareComponent implements OnChanges {
  @Input() playerMove: 'X' | '0' | '' | 'winner'= '';
  @Input() winner: 'winner';
  move: string = '';

  disabled: boolean = false;


  ngOnChanges() {
    this.disabled = this.playerMove == 'X' || this.playerMove == '0' || this.winner === 'winner';
    
    console.log(this.winner)
  }
}
