import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quantity-increment',
  templateUrl: './quantity-increment.component.html',
  styleUrls: ['./quantity-increment.component.css']
})
export class QuantityIncrementComponent implements OnInit {

  constructor() { }
/*
   msg = "";

  onClick(){
    this.msg = "Click me button clicked!";
  }
*/
  public quantity = 0;
  onClickInc(){
    this.quantity += 1;
  }

  onClickDec(){
    this.quantity -= 1;
    if(this.quantity < 0){
      this.quantity = 0;
    }
  }
  ngOnInit(): void {
  }

}
