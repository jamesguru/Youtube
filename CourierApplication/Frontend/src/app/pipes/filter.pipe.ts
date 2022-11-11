import { Pipe, PipeTransform } from '@angular/core';
import { Parcel } from 'src/interfaces/Parcel';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Parcel[], selectedOption: string): Parcel[]{

    if(value.length === 0 || selectedOption === ''){

      return value;
    }

    const receivedParcels:Parcel[]=[];
    const sendParcels:Parcel[]=[];

    const user = JSON.parse(localStorage.getItem('user') as string)

    const email= user.email;

    if(selectedOption === 'received'){
      for(let item of value){

        if(item.receiverEmail.toLocaleLowerCase().indexOf(email.toLocaleLowerCase())! === -1){

          receivedParcels.push(item)
        }
      }

      return receivedParcels;
    }else if(selectedOption === 'sent'){
      for(let item of value){

        if(item.senderEmail.toLocaleLowerCase().indexOf(email.toLocaleLowerCase())! === -1){

          sendParcels.push(item)
        }
      }

      return sendParcels;


    }

    return value;
  }

}
