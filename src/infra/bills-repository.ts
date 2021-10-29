import Excel, {Row, Worksheet} from "exceljs";
import {IBillRepository} from "../domain/bills-repository";
import {Bill} from "../domain/bill";

export class BillsRepository implements IBillRepository{
    async get(path:string): Promise<Bill[]>  {
        const result: Bill[] = []
        const workbook = new Excel.Workbook();
        await workbook.xlsx.readFile(path)
        workbook.eachSheet((worksheet: Worksheet) => {
            const rows = worksheet.getRows(33, worksheet.rowCount)
            for (let row in rows) {

            }
            rows?.forEach((row: Row) => {
                if (BillsRepository._validate(row)) {
                    const name = String(row.getCell(4)) as string
                    const referenceDate = row.getCell(3).value as Date
                    const amount = row.getCell(5).value as number
                    result.push({
                        name,
                        referenceDate,
                        amount
                    })
                }
            })
        })
        return result;
    }

    private static _validate(row: Row):boolean {
        return row.cellCount >= 13 && String(row.getCell(1).value) !== "שם כרטיס";
    }
}
