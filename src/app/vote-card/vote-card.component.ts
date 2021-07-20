import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vote-card',
  templateUrl: './vote-card.component.html',
  styleUrls: ['./vote-card.component.css']
})
export class VoteCardComponent {

  @Input() title: string = ''
  @Input() options: any[] = []
  @Input() state: string = ''

  vote(index: number) {
    this.options[index].votes++
  }
  switchState() {
    this.state = this.state == 'closed' ? 'open' : 'closed'
  }

}
