import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './../book';
import { isUndefined } from 'util';

@Pipe({
  name: 'bookFilter'
})
export class BookFilterPipe implements PipeTransform {
  transform(books: Book[], filterValue: String): Book[] {
    const filterVal = (filterValue || '').toLocaleLowerCase();
    /**const arr[] = filterVal.split(' ');
    let contains = false;
    console.log(arr)
    arr.forEach(item => {
      console.log(item);
      return books.filter(
        book => book.title.toLocaleLowerCase().indexOf(item) !== -1
      );
    });*/
    return books.filter(
      book => book.title.toLocaleLowerCase().indexOf(filterVal) !== -1
    );
  }
}
