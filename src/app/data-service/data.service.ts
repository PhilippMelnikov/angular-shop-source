import { Injectable } from '@angular/core';

const products = [
  {
    "id": 0,
    "title" : "Eloquent Javascript",
    "author" : "Marijn Haverbeke",
    "type" : "Books",
    "category" : "Coding",
    "pages" : "225",
    "language" : "Javascript",
    "price" : "25.99",
    "code" : "#00000"
  },
  {
    "id": 1,
    "title" : "Learning Java",
    "author" : "Patrick Niemeyer",
    "type" : "Books",
    "category" : "Coding",
    "pages" : "325",
    "language" : "Java",
    "price" : "30.99",
    "code" : "#00001"
  },
  {
    "id": 2,
    "title" : "Cooking for Family and Friends",
    "author" : "Joe Wicks",
    "type" : "Books",
    "category" : "Cooking",
    "pages" : "222",
    "main_ingredient" : "Chicken",
    "price" : "37.99",
    "code" : "#00002"
  },
  {
    "id": 3,
    "title" : "The Secret Destiny of America",
    "author" : "Manly P. Hall",
    "type" : "Books",
    "category" : "Esoterics",
    "pages" : "322",
    "min_age" : "16",
    "price" : "70.99",
    "code" : "#00003"
  },
  {
    "id": 4,
    "title" : "Wagner : Der Ring des Nibelungen",
    "performer" : "Bayreuth Festival Orchestra",
    "type" : "Discs",
    "subtype" : "CD",
    "category" : "Music",
    "price" : "10.99",
    "code" : "#00004"
  },
  {
    "id": 5,
    "title" : "Alfred Hitchcock: Frenzy",
    "type" : "Discs",
    "subtype" : "DVD",
    "category" : "Video",
    "price" : "12.99",
    "code" : "#00005"
  },
  {
    "id": 6,
    "title" : "Microsoft Office 2015",
    "type" : "Discs",
    "subtype" : "DVD",
    "category" : "Software",
    "price" : "99.99",
    "code" : "#00006"
  },
  {
    "id": 7,
    "title" : "Adobe Photoshop 2016",
    "type" : "Discs",
    "subtype" : "DVD",
    "category" : "Software",
    "price" : "129.99",
    "code" : "#00007"
  }
]

@Injectable()
export class DataService {

  constructor() { }
  public getProducts(){
    return products;
  }

}
