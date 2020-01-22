import { Component, OnInit, ViewChild } from '@angular/core';
import {IBobsBurgersCharacters} from '../interfaces/ibobs-burgers-characters'
import {BobsBurgersService} from '../services/bobs-burgers.service';
import {MatTableModule, MatTableDataSource} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'age', 'clothing'];
  dataSource: MatTableDataSource<IBobsBurgersCharacters>; //
  @ViewChild(MatSort , {static: true}) sort : MatSort; //
  constructor(private bobsBurgersService : BobsBurgersService) { }
 
  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.bobsBurgersService.CHARACTER_DATA);
    this.dataSource.sort= this.sort; //
  }

}
