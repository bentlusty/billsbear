import { IBillRepository } from '../domain/bills-repository';
import { Bill } from '../domain/bill';
import { NullParseExcel, ParseExcel, Row } from './parse-excel';



export class BillsRepository implements IBillRepository {
    private excelParser: ParseExcel;

    static create(): BillsRepository {
        const excelParser = new ParseExcel()
        return new BillsRepository(excelParser);
    }

    static createNull(rows: Row[] = []): BillsRepository {
        const excelParser = new NullParseExcel(rows)
        return new BillsRepository(excelParser);
    }

    constructor(excelParser: ParseExcel) {
        this.excelParser = excelParser;
    }

    async get(path: string): Promise<Bill[]> {
        const rows = await this.excelParser.getRows(path)
        return BillsRepository.extractBills(rows);
    }

    private static extractBills(rows: Row[]): Bill[] {
        return rows.map(BillsRepository.mapBills).filter((bill) => bill) as Bill[];
    }

    private static mapBills(row: Row): Bill | undefined {
        if (BillsRepository.validate(row)) {
            const name = String(row.cells[4]) as string;
            const referenceDate = row.cells[3] as Date;
            const amount = row.cells[5] as number;
            return {
                name,
                referenceDate,
                amount,
            } as Bill;
        }
    }

    private static validate(row: Row): boolean {
        return row.cellCount >= 13 && String(row.cells[1]) !== 'שם כרטיס';
    }
}


