import { Component, OnInit } from '@angular/core';
import {IBobsBurgersCharacters} from '../interfaces/ibobs-burgers-characters'
import {BobsBurgersService} from '../services/bobs-burgers.service';
import {MatTableModule} from '@angular/material';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['Name', 'Age', 'Clothing'];

  


  constructor(private bobsBurgersService : BobsBurgersService) { }
 
  dataSource = this.bobsBurgersService.CHARACTER_DATA;
  ngOnInit() {
  }

}
