import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css']
})
export class VotingComponent {
  @Input() options: any[] = []
  @Output() vote = new EventEmitter()
}
