import { Component, OnInit } from '@angular/core';
import {faClose,faUser,faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  faBell=faBell;
  faClose=faClose;
  showAdd:boolean= false;

  constructor() { }

  p: number = 1;
    collection: any[] = [

      {
        trackId:"1255252",
        location:"Canada",
        destination:"Texas",
        cost:200,
        weight:30,
        status:'pending',
      },

      {
        trackId:"1255252",
        location:"Canada",
        destination:"Texas",
        cost:200,
        weight:30,
        status:'pending',
      },

      {
        trackId:"1255252",
        location:"Canada",
        destination:"Texas",
        cost:200,
        weight:30,
        status:'pending',
      },
      {
        trackId:"1255252",
        location:"Canada",
        destination:"Texas",
        cost:200,
        weight:30,
        status:'pending',
      },
      {
        trackId:"1255252",
        location:"Canada",
        destination:"Texas",
        cost:200,
        weight:30,
        status:'pending',
      },
      {
        trackId:"1255252",
        location:"Canada",
        destination:"Texas",
        cost:200,
        weight:30,
        status:'pending',
      },
      {
        trackId:"1255252",
        location:"Canada",
        destination:"Texas",
        cost:200,
        weight:30,
        status:'pending',
      }
    ];  

  ngOnInit(): void {
  }

  ShowAdd(option:string){

    if(option === "open"){


      this.showAdd = true;
    }else{


      this.showAdd=false;
    }

  }

}
