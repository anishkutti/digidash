import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'chart.piecelabel.js';

import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-summary-home',
  templateUrl: './summary-home.component.html',
  styleUrls: ['./summary-home.component.css']
})
export class SummaryHomeComponent implements OnInit {
  @ViewChild('donut', { static: false }) donut: ElementRef;
  @ViewChild('MeSeStatusCanvas', { static: false }) MeSeStatusCanvas: ElementRef;
// Donut chart Options
public barLegend;
public douLegend;


  public doughnutChartLabels: string[] = ['Bank Midwest', 'Bank East', 'Bank IB','Bank IB','Bank ID','Bank IC','Bank IL'];
  public chartLabels: Array<string> = ['Bank Midwest', 'Bank East', 'Bank IB','Bank IB','Bank ID','Bank IC','Bank IL'];
  public doughnutChartData: number[] = [20.5, 22.3, 5.9,16.4,16.6,18.3];
  public doughnutChartType: string = 'doughnut';
  public colors: any[] = [{ backgroundColor: ["rgba(175, 192, 192, 0.9)", "rgba(75, 192, 192, 0.9)", "rgba(75, 192, 192, 0.9)", "lightblue", "lightyellow", "lightgreen"] }];
  public chartOptions: any = {
    legend: { display: true,position:"bottom", labels: { fontColor: 'black' } },
    cutoutPercentage: 70,
    pieceLabel: {
      render: function (args) {
        const label = args.label,
          value = args.value;
          return value + '%';
        //return label + ': ' + value;
      }
    }
  }
// **************************************//
  // Horizontal Bar chart

  public barChartTitle = 'Bar Chart Example in Angular 4';

  // ADD CHART OPTIONS. 
  public barChartOptions = {
    responsive: true,
    legend: { display: false }
    
  }
  public arbarChartLegend =['JAN', 'FEB'];
  public BarCharLabels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL'];

  // STATIC DATA FOR THE CHART IN JSON FORMAT.
  public BarChartData = [
    {
      label: '1st Year',
      data: [21,33,22,33,35,22,44],
      legend :'abca'
    }  ];

  // CHART COLOR.
  public BarChartColors = [
    { // 1st Year.
      backgroundColor: [
        'rgba(75, 192, 192, 0.9)',
        'rgba(255, 99, 132, 0.9)',
        'rgba(75, 192, 192, 0.9)',
        'rgba(75, 192, 192, 0.9)',
        'rgba(75, 192, 192, 0.9)',
        'rgba(75, 192, 192, 0.9)',
        'rgba(75, 192, 192, 0.9)'
      ]
    }
    
  ]

  public onChartClick(event) {
    
  }
  ////
  public  chart = []; // This will hold our chart info

  constructor(private _http: HttpClient) { }

  ngOnInit() {

  }


  ngAfterViewInit() {
    return;

  }

}
