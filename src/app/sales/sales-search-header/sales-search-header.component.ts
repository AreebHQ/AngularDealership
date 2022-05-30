import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { searchQuery } from 'src/app/CarSearchQueryModel';
import { SalesComponent } from '../sales.component';

@Component({
  selector: 'app-sales-search-header',
  templateUrl: './sales-search-header.component.html',
  styleUrls: ['./sales-search-header.component.css']
})
export class SalesSearchHeaderComponent implements OnInit {
  @ViewChild('fSearch',{static:false}) searchForm: NgForm;

 

  searchQuery : searchQuery;
  searchInput : string;
  minYear : string;
  maxYear : string;
  minPrice: string;
  maxPrice: string;

  constructor(private homeComp : SalesComponent) { }

  ngOnInit(): void {
    this.minYear = "Min";
    this.maxYear = "Max";
    this.minPrice = "Min";
    this.maxPrice = "Max";
  }

  selectMinYear(event:any)
  {
    this.minYear = event.target.value;
 
  }
  selectMaxYear(event:any)
  {
    this.maxYear = event.target.value;

  }
  selectMinPrice(event:any)
  {
    this.minPrice = event.target.value;

  }
  selectMaxPrice(event:any)
  {
    this.maxPrice = event.target.value;

  }

  public loadSearch(){
    this.searchInput = this.searchForm.value.searchBar;
   
    this.searchQuery = {"minYear": this.minYear,
    "maxYear": this.maxYear,
    "minPrice": this.minPrice,
    "maxPrice": this.maxPrice,
    "searchInput": this.searchInput };
     console.log(this.searchQuery);

    this.homeComp.getSearchResult(this.searchQuery);

  }

}
