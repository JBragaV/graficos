import { Component, ViewChild } from '@angular/core';
import chartJs from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //@ViewChild('lineBarsCanvas', {static: true}) linesBarCanvas;
  lineBarsCanvas: any;

  constructor() {}

  ngAfterViewInit(){
    setTimeout(() => {
      this.lineBarsCanvas = this.getChart(this.dados, this.dados2)
    },150)
  }
  private dados = [20, 45, 27, 18, 10, 38, 21, 45, 17, 55, 1, 52]
  private dados2 = [30, 25, 27, 8, 20, 18, 1, 35, 17, 15, 31, 22]
  getChart(d1, d2){
    let ctx = document.getElementById("line")
    let data = {
      labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
      datasets: [{
        label: "Receitas", 
        fill: false,
        lineTension: 0.,
        backgroundColor: "rgba(0, 178, 255, 0.8)",
        borderColor: "rgba(0, 0, 255, 0.8",
        borderCapStyle: 'butt',
        borderJoinStyle: 'miter',
        pointRadius: 1,
        pointHitRadius: 10,
        data: d1,
        scanGaps: false
      },
      {
        label: "Dispesas", 
        fill: false,
        lineTension: 0.,
        backgroundColor: "rgba(0, 178, 255, 0.8)",
        borderColor: "rgba(231, 205, 35, 0.8",
        borderCapStyle: 'butt',
        borderJoinStyle: 'miter',
        pointRadius: 1,
        pointHitRadius: 10,
        data: d2,
        scanGaps: false
      },
      {
        label: "Saldo", 
        fill: false,
        lineTension: 0.,
        backgroundColor: "rgba(0, 178, 255, 0.8)",
        borderColor: "rgba(255, 0, 0, 0.8",
        borderCapStyle: 'butt',
        borderJoinStyle: 'miter',
        pointRadius: 1,
        pointHitRadius: 10,
        data: [d1[0]-d2[0], d1[1]-d2[1], d1[2]-d2[2], d1[3]-d2[3], d1[4]-d2[4], d1[5]-d2[5], d1[6]-d2[6], d1[7]-d2[7], d1[8]-d2[8], d1[9]-d2[9], 
        d1[10]-d2[10], 
        d1[11]-d2[11]],
        scanGaps: false
      }]
    }
    return new chartJs (ctx, {
      data,
      type: "bar"
    })
  }
}
