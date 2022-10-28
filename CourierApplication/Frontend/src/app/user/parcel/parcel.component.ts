import { Component, OnInit } from '@angular/core';
import { faBars,faMapLocation } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-parcel',
  templateUrl: './parcel.component.html',
  styleUrls: ['./parcel.component.css']
})
export class ParcelComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }

  faHambuger = faBars;
  faMapLocation=faMapLocation;

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

}
