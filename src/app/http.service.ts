import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getPokemon();
    this.getFriends();
  }
  getPokemon(){
    let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
    console.log(bulbasaur);
    bulbasaur.subscribe(data => console.log(data['forms']['0'].name + "'s abilities are " + data['abilities']['0'].ability.name + " and " + data['abilities']['1'].ability.name + "."));
  }
  getFriends(){
    let poison = this._http.get('https://pokeapi.co/api/v2/type/4/')
    poison.subscribe(data => this.printFriends(data));
  }
  printFriends(data){
    console.log("Pokemon of poison type:");
    for(var i=0; i < 70; i++){
      console.log(data.pokemon[i].pokemon.name);
    }
  }
}
