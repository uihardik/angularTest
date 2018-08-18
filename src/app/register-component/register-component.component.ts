import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {

  registerForm: FormGroup;
    submitted = false;
    userDetail:any={};

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
  	 this.registerForm = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
  }
  get f() { return this.registerForm.controls; }
   onSubmit() {
        this.submitted = true;
 
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        console.log(this.userDetail)
        if(localStorage.getItem('user')){
        var userceh = JSON.parse(localStorage.getItem('user'));
        userceh.push(this.userDetail)
        localStorage.setItem('user',JSON.stringify(userceh));
        alert('-- Successful Register --')
        this.router.navigate(['/login'])
        }else{
          var all = [];
          all.push(this.userDetail)
          localStorage.setItem('user',JSON.stringify(all))
        }
        
    }

}
