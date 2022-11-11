import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBars,faClosedCaptioning,faMapLocation,faClose,faUser,faBell } from '@fortawesome/free-solid-svg-icons';
import { userInfo } from 'os';
import { Observable } from 'rxjs';
import { ParcelService } from 'src/app/Services/parcel.service';
import { Parcel } from 'src/interfaces/Parcel';

@Component({
  selector: 'app-parcel',
  templateUrl: './parcel.component.html',
  styleUrls: ['./parcel.component.css']
})
export class ParcelComponent implements OnInit {



  constructor(private router:Router,private parcelService:ParcelService) { }

  ngOnInit(): void {

    this.loadUserParcels();
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
  parcels$!:Observable<Parcel[]>;
  
location!:string;
destination!:string;
trackId!:string;
parcelweight!:number;
price!:number;
status!:number;
selectedOption:string ='';

user = JSON.parse(localStorage.getItem('user') as string)

email= this.user.email;

  mapOptions: any = {
    center:  {
      lat: -0.32984428475063204,
      lng: 36.097950790026374,
    },
    zoom : 1
 }

 markerPositions: google.maps.LatLngLiteral[] = [];
 markerOptions: google.maps.MarkerOptions = { draggable: false };
 marker = {
    position: { lat: 38.9987208, lng: -77.2538699 },
 }

  p: number = 1;
   
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

      localStorage.clear()
      this.router.navigate(['auth/login']);
    }

    showMap(location:string,destination:string,trackId:string,weight:number,price:number,status:number,markers:string){

      this.showmap = !this.showmap;
      
      this.location = location;
      this.destination=destination;
      this.trackId=trackId;
      this.parcelweight=weight;
      this.price=price;
      this.status=status;
      this.markerPositions=JSON.parse(markers)
    }

    closeMap(){
      this.showmap=!this.showmap;
    }
    change(event:any){

      this.selectedOption = event.target.value;

    }

    loadUserParcels(){
      this.parcels$ = this.parcelService.getParcelsForUser(this.email);
    }
}
