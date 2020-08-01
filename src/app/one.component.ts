import { Component } from '@angular/core';


@Component({

    selector:'one-part',
    template:'<input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/> '
})
export class OneComponent{
  email="@gmail.com";
   
    onKeyUp()
     {
         console.log(this.email);
     }
    
     
}

