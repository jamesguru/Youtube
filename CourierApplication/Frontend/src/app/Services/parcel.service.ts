import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Parcel } from 'src/interfaces/Parcel';

@Injectable({
  providedIn: 'root'
})
export class ParcelService {

  constructor(private http:HttpClient) { }


  getParcels():Observable<Parcel[]>{


    return this.http.get<Parcel[]>('http://localhost:3000/api/parcel')
  }


  softDelete(id:number):Observable<{message:string}>{

    return this.http.put<{message:string}>(`http://localhost:3000/api/parcel/softdelete/${id}`,{
      deleted:1
    })



  }

  updateParcel(id:number):Observable<{message:string}>{

    return this.http.put<{message:string}>(`http://localhost:3000/api/parcel/${id}`,{
      status:1
    })
  }

  getParcelsForUser(email:string):Observable<Parcel[]>{

    return this.http.post<Parcel[]>('http://localhost:3000/api/parcel/userparcels',{
      email
    })
  }

  createParcel(
    senderEmail:string,
    receiverEmail:string,
    trackId:string,
    location:string,
    destination:string,
    dispatchedDate:string,
    weight:number,
    price:number,
    markers:string,): Observable<{message:string}>{

      return this.http.post<{message:string}>('http://localhost:3000/api/parcel',{
        senderEmail,receiverEmail,trackId,location,destination,dispatchedDate,weight,price,markers
      })
    }
}
