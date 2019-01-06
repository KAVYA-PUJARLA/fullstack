import { Component, OnInit } from '@angular/core';
// import * as d3 from 'd3';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
var 
  constructor() { }

  ngOnInit() {
    //working code
    // var data=[10,20,30,40,50];
    // // var svg=d3.select("#chat-area").append("svg").attr("width",400).attr("height",400);
    // var rectangles=svg.selectAll("rect").data(data).enter()
    // .append("rect")
    // .attr("y",20)
    // .attr("x",function(d,i){
    //   return i*60;
    // })
    // .attr("width",50)
    // .attr("height",function(d,i){
    //   console.log("Item height"+d);
    //   return d*i;
    // })
    // .attr("fill",function(d){
    //   return "grey";
    // });

      //working code
    // start of circle
    // var circles= svg.selectAll("circle").data(data);
    // circles.enter().append("circle")
    // .attr("cx",function(d,i){
    //   console.log("Item d"+d+" "+i);
    //   return (i*50)+25;
    // })
    // .attr("cy",25)
    // .attr("r",function(d){
    //   return d;
    // })
    // .attr("fill","blue");
// end of circle

// same circle code
// var circle=svg.append("circle").attr("cx",200).attr("cy",200).attr("r",100).attr("fill","green");
  }

}
