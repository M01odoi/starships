import { IResultsStarships } from "./IResultsStarships";

export interface IStarships {
  count: number;
  next: string;
  previous?: any;
  results: IResultsStarships[];
}
