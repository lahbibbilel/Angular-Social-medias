import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit() {

  }

  showToaster(){
    this.toastr.success("Hello,votre message envoyer avec succeés")
  }

}
