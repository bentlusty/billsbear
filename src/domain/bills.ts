import { Bill } from './bill';

export interface IBills {
    get: (path: string) => Promise<Bill[]>;
}
