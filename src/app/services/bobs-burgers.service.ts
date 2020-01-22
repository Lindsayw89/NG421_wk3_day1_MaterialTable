import { Injectable } from '@angular/core';
import {IBobsBurgersCharacters} from '../interfaces/ibobs-burgers-characters'

@Injectable({
  providedIn: 'root'
})
export class BobsBurgersService {
  CHARACTER_DATA: IBobsBurgersCharacters[] = [
    {name: 'Bob', age: 45, clothing:'white shirt and sweatpants'},
    {name: 'Linda', age: 43, clothing: 'red shirt and jeans'},
    {name: 'Louise', age: 9, clothing: 'green dress and pink hat'},
    {name: 'Gene', age: 11, clothing: 'yellow shirt and shorts'},
    {name: 'Tina', age: 13, clothing: 'blue shirt and skirt'},
    {name: 'Teddy', age: 47, clothing: 'work overalls'},
    {name: 'Mort', age: 43, clothing:'suit and tie'},
  ];

  constructor() { }
}
