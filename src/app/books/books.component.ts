import { Component, OnInit } from '@angular/core';
import { Book } from '../types/Book';
import { BooksService } from './books.service';



@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books: Book[] =[];

  constructor(private booksService: BooksService) {
   
   }

   //cart: Book[]=[];


  isShowing:boolean=true;


  /*addToCart(book: Book){
    console.log(event);
    
  }*/

  ngOnInit(): void {
    this.books=this.booksService.getBooks();
  }

  myName:string='';

}
