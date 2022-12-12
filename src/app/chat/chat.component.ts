import { Component, OnInit } from '@angular/core';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  constructor(private toastr: ToastrService ) {
  }
  ngOnInit() {
  }

  showToaster(){
    this.toastr.info("Message envoyer")
  }
}
