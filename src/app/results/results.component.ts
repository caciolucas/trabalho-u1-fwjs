import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent{
  @Input() options: any[] = [];

  totalVotes() {
    return this.options.reduce( (total, { votes }) => total + votes, 0);
  }
  calcPercent(option: any){
    if (!option.votes) return 0;
    return (option.votes/this.totalVotes()) * 100;
  }
  
}
