import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBars,faClosedCaptioning,faMapLocation,faClose,faUser,faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-parcel',
  templateUrl: './parcel.component.html',
  styleUrls: ['./parcel.component.css']
})
export class ParcelComponent implements OnInit {



  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  faHambuger = faBars;
  faMapLocation=faMapLocation;
  faBell =faBell;
  faPerson=faUser;
  faClose=faClose;
  weight:number=0;
  cost: number =0;
  quote:number=20;
  showmenu:boolean=false;
  showmap:boolean =false;
  mapOptions: any = {
    center: { lat: 38.9987208, lng: -77.2538699 },
    zoom : 14
 }
 marker = {
    position: { lat: 38.9987208, lng: -77.2538699 },
 }

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

    convert(){

      if(this.weight > 0){

        this.cost= this.quote * this.weight;
      }

      
    }

    showMenu(){

      this.showmenu=true;
    }

    closeMenu(){

      this.showmenu=false;
    }

    Logout(){

      this.router.navigate(['auth/login']);
    }

    showMap(){

      this.showmap = !this.showmap;


    }
}
