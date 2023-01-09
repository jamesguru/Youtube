import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { Observable } from 'rxjs';
import { Diagnosis } from 'src/app/interfaces/Diagnosis';
import { DiagnosisService } from 'src/app/services/diagnosis.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private diagnosiService:DiagnosisService) { }

  ngOnInit(): void {

    this.getDiagnosis();
  }
  p: number = 1;
  collection: any[] = [1];
  diagnosis$!:Observable<Diagnosis[]>;
  donutCharts = new Chart({
    chart: {
      type: 'pie',
      plotShadow: false,
    },
  
    credits: {
      enabled: false,
    },
  
    plotOptions: {
      pie: {
        innerSize: '99%',
        borderWidth: 10,
        borderColor: '',
        slicedOffset: 10,
        dataLabels: {
          connectorWidth: 0,
        },
      },
    },
  
    title: {
      verticalAlign: 'middle',
      floating: true,
      text: 'Lab test',
    },
  
    legend: {
      enabled: false,
    },
  
    series: [
      {
        type: 'pie',
        data: [
          { name: 'Sneezing', y: 1, color: '#eeeeee' },
  
          { name: 'Coughing', y: 2, color: '#393e46' },
  
          { name: 'Vomiting', y: 3, color: '#00adb5' },
          { name: 'Diaphorrea', y: 4, color: '#eeeeee' },
          { name: 'Mental Issues', y: 5, color: '#506ef9' },
        ],
      },
    ],
  });
 
  lineChart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Patient Health Status'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Patient Health',
        data: [10, 2, 3,6,9,17,20,10,5,2,16]
      } as any
    ]
  });


  getDiagnosis(){

    const email='ffdf@sdddddddddfdf';

    this.diagnosis$= this.diagnosiService.getDiagnosisForUser(email);
  }

}
