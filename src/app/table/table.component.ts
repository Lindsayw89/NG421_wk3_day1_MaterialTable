import { Component, OnInit, ViewChild } from '@angular/core';
import {IBobsBurgersCharacters} from '../interfaces/ibobs-burgers-characters'
import {BobsBurgersService} from '../services/bobs-burgers.service';
import {MatTableModule, MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['Name', 'Age', 'Clothing'];
  datasource = new MatTableDataSource(this.bobsBurgersService.CHARACTER_DATA); //
  @ViewChild(MatSort , {static: false}) sort : MatSort; //


  constructor(private bobsBurgersService : BobsBurgersService) { }
 
  dataSource = this.bobsBurgersService.CHARACTER_DATA;
  ngOnInit() {
    this.datasource.sort= this.sort; //
  }


}
