import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
	
	loginForm: FormGroup;
  submitted = false;
  userlogin:any={}

  constructor(private formBuilder: FormBuilder, private router : Router) { }


  ngOnInit() {
  	 this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
  }
  get f() { return this.loginForm.controls; }
   onSubmit() {
        this.submitted = true;
 
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        console.log(this.userlogin)
        if(localStorage.getItem('user')){
        var userceh = JSON.parse(localStorage.getItem('user'));
        var self = this;
        var log = userceh.filter(function(value,key){
          if(value && value.password){
            if(value.password == self.userlogin.password){
            var loginStatus = true
              localStorage.setItem('login', loginStatus);
              return value
            }
          }
        })
        this.router.navigate(['/movie'])
        }else{
          alert('please Register')
        }
    }

}
