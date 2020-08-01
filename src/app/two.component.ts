import { Component } from '@angular/core';


@Component({

    selector:'two',
    template:'<br/> {{course.title|uppercase}}  <br />{{course.rating}} <br /> {{course.students}} <br />  {{course.price}} <br /> {{course.releaseDate}} <br />'

})
export class TwoComponent{
 
    course={
        title:"edrp",
        rating:4.9,
        students:10,
        price:200,
        releaseDate:new Date(2020,2,2)
    }
    
     
}

