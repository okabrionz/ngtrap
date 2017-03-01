import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  title = 'DEIRS'
  slogan = 'Selamat datang di situs Jual-Beli Nama Domain, Situs, dan Aplikasi.'
  ftitle = 'FEATURED'
  ftitle1 = 'ManagedVM.com'
  fdesc1 = 'The Strong keywords domain for Web Hosting Company.'
  ftitle2 = ''
  fdesc2 = ''
  ftitle3 = ''
  fdesc3 = ''
  ftitle4 = ''
  fdesc4 = ''
  constructor() { }

  ngOnInit() {
  }

}
