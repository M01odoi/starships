import { IPeople } from "../interfaces/IPeople";
import { IStarships } from "../interfaces/IStarships";

export const apiPeople: Promise<IPeople> = new Promise((resolve, reject) => {
  resolve(
    fetch("https://swapi.dev/api/people/").then((response) => {
      return response.json();
    })
  );
});

export const apiStarships: Promise<IStarships> = new Promise((resolve) => {
  resolve(
    fetch("https://swapi.dev/api/starships/").then((response) => {
      return response.json();
    })
  );
});
