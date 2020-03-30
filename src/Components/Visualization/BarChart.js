/**
 * Created by 励颖 on 2020/3/30.
 */
import React, {Component} from 'react';
import * as d3 from "d3";


class BarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount =() =>{
    this.drawChart();
  };

  drawChart = ()=> {
    const data = [12, 5, 6, 6, 9, 10];

    const svg = d3.select("#chartCard")
        .append("svg")
        .attr("width", 700)
        .attr("height", 400)
        .style("margin-left", 100);

    svg.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", (d, i) => i * 70)
        .attr("y", (d, i) => 300 - 10 * d)
        .attr("width", 65)
        .attr("height", (d, i) => d * 10)
        .attr("fill", "green")
  };

  render(){
    return (
        <div id="#drawSVG"/>
    )
  }
}

export default BarChart;