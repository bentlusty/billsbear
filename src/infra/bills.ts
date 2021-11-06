import { IBills } from '../domain/bills';
import { Bill } from '../domain/bill';
import { NullParseExcel, ParseExcel, Row } from './parse-excel';

export class Bills implements IBills {
    private excelParser: ParseExcel;

    static create(): Bills {
        const excelParser = new ParseExcel();
        return new Bills(excelParser);
    }

    static createNull(rows: Row[] = []): Bills {
        const excelParser = new NullParseExcel(rows);
        return new Bills(excelParser);
    }

    constructor(excelParser: ParseExcel) {
        this.excelParser = excelParser;
    }

    async get(path: string): Promise<Bill[]> {
        const rows = await this.excelParser.getRows(path);
        return Bills.extractBills(rows);
    }

    private static extractBills(rows: Row[]): Bill[] {
        return rows.map(Bills.mapBills).filter((bill) => bill) as Bill[];
    }

    private static mapBills(row: Row): Bill | undefined {
        if (Bills.validate(row)) {
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
