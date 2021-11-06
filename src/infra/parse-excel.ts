import Excel from 'exceljs';

export interface Row {
    cells: any[];
    cellCount: number;
}

export interface BaseExcel {
    getRows: (path: string) => Promise<Row[]>;
}

export class ParseExcel implements BaseExcel {
    async getRows(path: string): Promise<Row[]> {
        const rows: Row[] = [];
        const workbook = new Excel.Workbook();
        await workbook.xlsx.readFile(path);
        const worksheet = workbook.getWorksheet(1);
        worksheet.eachRow((row) => {
            const cells = row.values as any[];
            rows.push({ cellCount: row.cellCount, cells: cells });
        });
        return rows;
    }
}

export class NullParseExcel implements BaseExcel {
    private readonly rows: Row[];

    constructor(rows: Row[]) {
        this.rows = rows;
    }

    getRows(): Promise<Row[]> {
        return Promise.resolve(this.rows);
    }
}
