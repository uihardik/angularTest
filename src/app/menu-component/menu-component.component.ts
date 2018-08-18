import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-component',
  templateUrl: './menu-component.component.html',
  styleUrls: ['./menu-component.component.css']
})
export class MenuComponentComponent implements OnInit {
	
	movie : any = [];
	dtOptions: DataTables.Settings = {};
   	constructor() { }

    ngOnInit() {         
    this.movie = [ {'name':'ABCD1',ReDate:'10/09/2018',rate:3},         
    {'name':'krish',ReDate:'16/10/2018',rate:5},         
    {'name':'IceAge',ReDate:'16/09/2018',rate:4},
    {'name':'ironMen',ReDate:'3/08/2018',rate:5},
	{'name':'spider-Men',ReDate:'7/11/2018',rate:3},
	{'name':'dhadak',ReDate:'10/09/2018',rate:2},
	{'name':'FF8',ReDate:'16/10/2018',rate:5},
	{'name':'manwise',ReDate:'16/09/2018',rate:4},
	{'name':'ceptain',ReDate:'3/08/2018',rate:1},
	{'name':'indian',ReDate:'7/11/2018',rate:4},
	{'name':'josh',ReDate:'10/09/2018',rate:2},
	{'name':'Pink',ReDate:'16/10/2018',rate:5},
	{'name':'Baby',ReDate:'16/09/2018',rate:4},
	{'name':'Holiday',ReDate:'3/08/2018',rate:5},
	{'name':'sholy',ReDate:'7/11/2018',rate:5}];

	this.dtOptions = {
			pageLength: 5,
		};
	}

}
