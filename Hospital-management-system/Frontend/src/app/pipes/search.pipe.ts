import { Pipe, PipeTransform } from '@angular/core';
import { Patient } from '../interfaces/Patient';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value:Patient[], filterText:string): Patient[]{
    if(value.length=== 0 || filterText ===''){
      return value
    }
    const filtered:Patient[]=[]
    for(let item of value){
      if(item.admission_no.toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase())!==-1){
        filtered.push(item)
      }
    }
    return filtered
  }
}