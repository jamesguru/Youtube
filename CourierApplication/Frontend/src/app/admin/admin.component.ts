import { Component, OnInit,OnDestroy } from '@angular/core';
import {faClose,faUser,faBell,faTrash } from '@fortawesome/free-solid-svg-icons';
import { Observable, Subscription } from 'rxjs';
import { ParcelService } from '../Services/parcel.service';
import {Parcel} from '../../interfaces/Parcel'

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
 
  constructor(private parcelService:ParcelService) { }

  p: number = 1;
    
  ngOnInit(): void {


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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.loadParcels()
  }

}
