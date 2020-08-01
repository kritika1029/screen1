import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component,OnInit } from '@angular/core';


@Component({
  selector: 'student-setup',
  templateUrl: './student-setup.component.html',
  styleUrls: ['./student-setup.component.css']
})
export class StudentSetupComponent implements OnInit{
  formenroll:FormGroup;
  ngOnInit(){
    
     
  }
  
   /*
   constructor(private formBuilder: FormBuilder) {
     this.studentSetupForm = this.formBuilder.group({
       setup:formBuilder.group({}),       
       enroll:formBuilder.group({}),
       personal:formBuilder.group({}),
       contact:formBuilder.group({})
     });
   }
   */
    studentSetupForm =new FormGroup({
      
      status:new FormControl('',Validators.required),
      sessionyear:new FormControl('',Validators.required),
      parententity:new FormControl('',Validators.required),
   
      
      studentName:new FormControl('',Validators.required),
        fatherName:new FormControl('',Validators.required),
        motherName:new FormControl('',Validators.required),
        nation:new FormControl('',Validators.required),
        dob:new FormControl('',Validators.required),
        email1:new FormControl('',Validators.required),
        category:new FormControl('',Validators.required),
        religion:new FormControl('',Validators.required),
        gender:new FormControl('',Validators.required),
        aadhar:new FormControl('',[Validators.required,
                                  Validators.minLength(12),
                                  Validators.maxLength(12)]),
        permanentadd:new FormGroup({address:new FormControl('',Validators.required),
                                    state:new FormControl('',Validators.required),
                                    city:new FormControl('',Validators.required),
                                    pincode:new FormControl('',Validators.required),
                                   })                       
        
                                   
                                  
    });
  formsetup: FormGroup;
 
   submit() {
     console.log(this.studentSetupForm.value);
   }
   
}
