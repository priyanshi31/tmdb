import { Component, OnInit } from '@angular/core';
import 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
home: Home = {
    id: 1,
    name: 'Windstorm'
  };


  constructor() { }

  ngOnInit() {
  }

}
