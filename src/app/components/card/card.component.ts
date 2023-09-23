import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  pokemon: PokemonData
  
  constructor(
    private service: PokemonService
  ) {
    this.pokemon = {
      id: 0, name: "",
      sprites: {
        front_default: ""
      }, types: []
    }
  }

  ngOnInit(): void {
    this.getPokemon("pikachu")
  }
  getPokemon(searchName: string){
    this.service.getPokemon(searchName).subscribe(
      {
        next: (response) => {
          this.pokemon = {
            id: response.id,
            name: response.name,
            sprites: response.sprites,
            types: response.types
          }
        },
        error: (error) => console.log('not found')
      }
    )
  }
}