import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any){
    // if(value.length==0,VehicleNumber==='')
    // {
    //   return value;
    // }
    // const Vehicle=[];
    // for(const AllVehicles of value)
    // {
    //   if(AllVehicles['vehicleNumber'] ===VehicleNumber)
    //   {
    //     Vehicle.push(AllVehicles)
    //   }
    // }
    // return Vehicle;
  }

}
