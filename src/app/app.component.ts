import { Component } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-social';

  ngOnInit() {
    $('#action_menu_btn').click(function () {
      $('.action_menu').toggle();
    });
  }}
