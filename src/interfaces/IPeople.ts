import {IResultsPeople} from "./IResultsPeople";

export interface IPeople{
    count: number,
    next: string|null,
    previous: string|null,
    results: IResultsPeople[],
}