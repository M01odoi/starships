import { IResultsPeople } from "./IResultsPeople";
import { IResultsStarships } from "./IResultsStarships";

export interface IResultPeopleStarships {
  array: IResultsPeople[] | IResultsStarships[] | undefined;
  title: string;
}
