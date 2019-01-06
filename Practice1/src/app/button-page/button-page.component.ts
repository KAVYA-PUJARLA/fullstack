import { Component, OnInit } from '@angular/core';
import {RegistryService} from '../registry.service';
import {User} from 'models/adduser';
// import * as d3 from '../practice/d3';
import 'fullcalendar';
import * as $ from 'jquery';


@Component({
  selector: 'app-button-page',
  templateUrl: './button-page.component.html',
  styleUrls: ['./button-page.component.css']
})
export class ButtonPageComponent implements OnInit {
users:User[];

  constructor(private service:RegistryService) { }

  ngOnInit() {
$(document).ready(function(){
  $(function() {
    $('#calendar').fullCalendar({
      // put your options and callbacks here
    })
  
  });
});

  }
  
  get_all_users(){
this.service.get_all_users().subscribe((data:User)=>{
  this.users=data;
});
  }













  // radius = 10;

  // ngAfterContentInit() {
  //   d3.select('p').style('color', 'green');
  // }

  // colorMe() {
  //   d3.select('button').style('color', 'green');
  // }

  // clicked(event: any) {
  //   d3.select(event.target).append('ellipse')
  //     .attr('cx', event.x)
  //     .attr('cy', event.y)
  //     .attr('r', () => {
  //       return this.radius;
  //     })
  //     .attr('fill', 'green');
  // }

}
