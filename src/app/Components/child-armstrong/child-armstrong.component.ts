import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-armstrong',
  templateUrl: './child-armstrong.component.html',
  styleUrls: ['./child-armstrong.component.css']
})
export class ChildArmstrongComponent implements OnInit{

  @Input() armstrongNumber: number=0;

  constructor(){ }

  ngOnInit(): void {
    
  }
  
  isArmStrong():boolean{
    let sum = 0;
    let temp = this.armstrongNumber;
    while (temp > 0) {
      let remainder = temp % 10;
      sum += remainder ** 3;
      temp = Math.floor(temp / 10);
    }
    return this.armstrongNumber === sum;
  }
}
