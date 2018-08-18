import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-project';
  private statususer: boolean;

  	ngOnInit() {
	  if(localStorage.getItem('login')){
	  	this.statususer = true
	  }else{
	  	this.statususer= false;
	  }
	}
	logout(){
		localStorage.removeItem('login')
		this.statususer= false;
	}
}
