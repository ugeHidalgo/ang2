import { Component, OnInit } from '@angular/core';

import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})

export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  count: number;

  ngOnInit() {
    const me = this;

    me.count = 5;
    me.countDowmBeforeClearMessages();
  }

  countDowmBeforeClearMessages(): void {
    const me = this;

    me.count--;
    if (me.count <= 0) {
      me.messageService.clear();
      return;
    }
    setTimeout(() => {
      me.countDowmBeforeClearMessages();
    }, 1000);
  }

}
