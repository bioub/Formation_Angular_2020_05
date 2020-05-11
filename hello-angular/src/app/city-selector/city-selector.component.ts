import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-selector',
  templateUrl: './city-selector.component.html',
  styleUrls: ['./city-selector.component.css']
})
export class CitySelectorComponent implements OnInit {

  citiesMap = {
    France: ['Paris', 'Lyon', 'Marseille'],
    Espagne: ['Madrid', 'Barcelone'],
    Allemagne: ['Berlin', 'Munich'],
  };

  countries = [];

  selectedCountry = '';
  selectedCity = '';

  constructor() { }

  ngOnInit(): void {
    // Pour accéder à une clé de l'objet (la liste des villes) (ex: France)//
    console.log(this.citiesMap['France']);
    this.countries = Object.keys(this.citiesMap);
    console.log(this.countries);
  }

}
