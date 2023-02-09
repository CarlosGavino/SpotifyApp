import { Pipe, PipeTransform } from '@angular/core';
import { TrackModel } from 'src/app/core/Models/track.model';

@Pipe({
  name: 'orderList'
})
export class OrderListPipe implements PipeTransform {

  transform(value: Array<any>, args: string, sort : string = 'asc'): TrackModel[] {
    try {
     if(value === null){
       return value;
     } else {
       const tmpList = value.sort((a, b) => {
         if (a[args] < b[args]) {
           return -1
         }
         else if (a[args] === b[args]) {
           return 0;
         }
         else if (a[args] > b[args]) {
           return 1;
         }
         return 1
       });
 
       return (sort === 'asc') ? tmpList : tmpList.reverse()
     
     }
     
    } catch (error) {
     console.log(error);
     return value;
    }
    
   }
}
