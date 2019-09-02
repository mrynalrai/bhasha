import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Basha';
  str = 'Winter is coming';
  words = this.str.split(' ');
  totalLength = this.words.length;
  resultWords = [];
  flag: boolean;
  result: string;

  private addWord(item) {
    const pos = this.words.indexOf(item);
    this.words.splice(pos, 1);
    this.resultWords.push(item);
    if (this.str ===  this.resultWords.join(' ')) {
      this.flag = true;
      this.result = 'Correct!';
    } else {
      this.flag = false;
      this.result = 'Wrong';
    }
  }

  private removeWord(item) {
    const pos = this.resultWords.indexOf(item);
    this.resultWords.splice(pos, 1);
    this.words.push(item);
    if (this.str ===  this.resultWords.join(' ')) {
      this.flag = true;
      this.result = 'Correct!';
    } else {
      this.flag = false;
      this.result = 'Wrong';
    }
  }
}
