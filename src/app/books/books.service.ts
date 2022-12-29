import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  constructor() { }


  getBooks()
  {
    return [
      {
        name:'clean code',
        author: 'Robert C Matin',
        image:'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81To3zuZ7OL._AC_UY436_FMwebp_QL65_.jpg',    
        amount: 700, 
      },
      {
        name:'Clean Python',
        author:'Sunil Kapil',
        image:'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61p6awfYDkL._AC_UY436_FMwebp_QL65_.jpg',
        amount: 780,
      },
      {
        name:'The Go Programming Language',
        author:'Brian W. Kernighan',
        image:'https://m.media-amazon.com/images/I/51f4miT3uPL._AC_UY436_QL65_.jpg',
        amount: 633,
      },
      {
        name:'Machine Learning',
        author:'Stefan Jansen',
        image:'https://m.media-amazon.com/images/I/51eR60a9A6L._SX404_BO1,204,203,200_.jpg',
        amount: 670,
      }
    ];
  }
}
