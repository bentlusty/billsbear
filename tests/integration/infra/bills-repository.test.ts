import {Bill} from "../../../src/domain/bill";
import {BillsRepository} from "../../../src/infra/bills-repository";

describe('BillRepository', () => {
    it('parse bank hapoalim excel', async () => {
        let repository = new BillsRepository();
        const bills = await repository.get("tests/integration/infra/bank_hapoalim.xlsx")
        const expectedResult: Bill[] = [
            {
                name: "A I G ביטוח חובה",
                referenceDate: new Date("2021-10-06"),
                amount: 1200.83
            },
            {
                name: "שטראוס מים בע\"מ",
                referenceDate: new Date("2020-12-16"),
                amount: 100.00
            },
            {
                name: "NETFLIX.COM",
                referenceDate: new Date("2021-10-19"),
                amount: 60.90
            }
        ]
        expect(bills).toEqual(expectedResult)
    })
})