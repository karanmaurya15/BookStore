import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any,searchText : any):any[] {
    console.log(searchText )
    if(searchText =='All books'){
      return value
    }
    return value.filter((book:any)=>{
      return book.bookName.toLowerCase().includes(searchText );
    })
  }

}
