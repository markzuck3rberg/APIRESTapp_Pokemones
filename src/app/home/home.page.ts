// Importa el servicio APIServiceService y el decorador Component desde los módulos de Angular.
import { PokeapiService } from './../Services/apiservice.service';
import { Component } from '@angular/core';

// Define el componente HomePage con su selector, plantilla y estilos.
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pokemon:any ;
  name = ""
  // Constructor del componente que recibe una instancia del servicio APIServiceService.
  constructor(private api: PokeapiService) {}

  // Método para obtener datos de un Pokémon dado su ID.
  getPokemonData(name: string) {
  try {

    this.api.getPokemonName(name).subscribe((response => {
      this.pokemon = response;
      console.log(this.pokemon)
    }));
    } catch (error) {
      console.log(error);
    }
  }
  pokemon2:any ;
  name2 = ""

  // Método para obtener datos de un Pokémon dado su ID.
  getPokemonData2(name2: string) {
  try {

    this.api.getPokemonName(name2).subscribe((response => {
      this.pokemon2 = response;
      console.log(this.pokemon2)
    }));
    } catch (error) {
      console.log(error);
    }
  }

  item:any ;
  itemid:string="" 
  nameit = ""
  getItemData(nameit: string) {
    try {
  
      this.api.getItemName(nameit).subscribe((response => {
        this.item = response;
        console.log(this.item)
      }));
      } catch (error) {
        console.log(error);
      }
    }
  
  item2:any ;
  itemid2:string="" 
  nameit2 = ""
  getItemData2(nameit2: string) {
    try {
  
      this.api.getItemName(nameit2).subscribe((response => {
        this.item2 = response;
        console.log(this.item2)
      }));
      } catch (error) {
        console.log(error);
      }
    }
} 