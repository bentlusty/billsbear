import {Bill} from "./bill";

export interface IBillRepository {
    get: (path:string) => Promise<Bill[]>
}