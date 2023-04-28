import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public n1:number;
  public n2:number;
  public res:number;


  constructor() {
    this.n1 = 0;
    this.n2 = 0;
    this.res = 0;
  }

  somar(){
    this.res = this.n1 + this.n2;
  }
  subtrair(){
    this.res = this.n1 - this.n2;
  }
  multiplicar(){
    this.res = this.n1 * this.n2;
  }
  dividir(){
    this.res = this.n1 / this.n2;
  }
}
