import { Component, OnInit } from '@angular/core';
import { Country } from '../country';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getCountryList() {
    //test country data
    return [
      new Country(1, "description text",  "Germany"),
      new Country(2, "description text",  "France"),
      new Country(3, "description text",  "United Kingdom"),
      new Country(4, "description text",  "Spanin"),
      new Country(5, "description text",  "Italy"),
      new Country(6, "description text",  "Belgium"),
      new Country(7, "description text",  "Poland"),
      new Country(8, "description text",  "Austria"),
      new Country(9, "description text",  "Switzerland"),
      new Country(10, "description text",  "Sweden")
    ];
  }

}
