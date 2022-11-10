import { Component, OnInit,OnDestroy } from '@angular/core';
import {faClose,faUser,faBell,faTrash } from '@fortawesome/free-solid-svg-icons';
import { Observable, Subscription } from 'rxjs';
import { ParcelService } from '../Services/parcel.service';
import {Parcel} from '../../interfaces/Parcel'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { Marker } from 'src/interfaces/Marker';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit,OnDestroy {


  faBell=faBell;
  faClose=faClose;
  showAdd:boolean= false;
  parcels$!: Observable<Parcel[]>;
  faTrash = faTrash;
  subscription!:Subscription;
  form!:FormGroup;
  markerPositions:google.maps.LatLngLiteral[]=[];
  marker!:Marker;
  filterText:string='';

 
  constructor(private parcelService:ParcelService) { }

  p: number = 1;
    
  ngOnInit(): void {


    this.form = new FormGroup({
      senderEmail:new FormControl(null,[Validators.required,Validators.email]),
      receiverEmail:new FormControl(null,[Validators.required,Validators.email]),
      trackId: new FormControl(null,[Validators.required]),
      weight: new FormControl(null,[Validators.required]),
      price: new FormControl(null,[Validators.required]),
      location: new FormControl(null,[Validators.required]),
      destination: new FormControl(null,[Validators.required]),
      dispatchedDate: new FormControl(null,[Validators.required]),
      
      
    })
    this.loadParcels()

  }

  ShowAdd(option:string){

    if(option === "open"){


      this.showAdd = true;
    }else{


      this.showAdd=false;
    }

  }


  loadParcels(){

    this.parcels$ = this.parcelService.getParcels();
   
  }

  updateParcel(id:number){

    this.subscription = this.parcelService.updateParcel(id).subscribe((value) =>{

      console.log(value)
    })

    this.loadParcels()

  }
  deleteParcel(id:number){
  
    this.subscription = this.parcelService.softDelete(id).subscribe((value) =>{
      console.log(value);
    })

  }

  handleSenderAddressChange(address:Address){

    this.marker={

      lat:address.geometry.location.lat(),
      lng:address.geometry.location.lng()
    }

    console.log(this.markerPositions)

    this.markerPositions.push(this.marker)
  }

  handleReceiverAddressChange(address:Address){
    this.marker={

      lat:address.geometry.location.lat(),
      lng:address.geometry.location.lng()
    }

    console.log(this.markerPositions)
    this.markerPositions.push(this.marker)
  }

  onSubmit(){
   
    if(this.markerPositions.length){

      this.subscription= this.parcelService.createParcel(
        this.form.value.senderEmail,
        this.form.value.receiverEmail,
        this.form.value.trackId,
        this.form.value.location,
        this.form.value.destination,
        this.form.value.dispatchedDate,
        this.form.value.weight,
        this.form.value.price,
        JSON.stringify(this.markerPositions)
        
        ).subscribe((value) =>{
          console.log(value)
        })

        this.form.reset()
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.loadParcels()
  }

}
