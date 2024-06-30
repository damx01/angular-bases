import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  public counter:number =10

  increasedBy(incremento:number):void{
    this.counter += incremento
  }

  resetCounter():void{
    this.counter=10;
  }
}
