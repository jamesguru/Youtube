import { Component, OnInit } from '@angular/core';
import { faAd,faUser} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-reception',
  templateUrl: './reception.component.html',
  styleUrls: ['./reception.component.css']
})
export class ReceptionComponent implements OnInit {

  constructor() { }
  p: number = 1;
  collection: any[] = [1,2];
  faUser=faUser;
  faAd=faAd;
  close:boolean=false;
  ngOnInit(): void {
  }


  showAdd(){

    this.close=!this.close;
  }
}
