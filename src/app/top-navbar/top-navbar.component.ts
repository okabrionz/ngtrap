import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})
export class TopNavbarComponent implements OnInit {
    logoimg = './assets/icons/Icon-App-29x29@3x.png'
  constructor() { }

  ngOnInit() {
  }

}
