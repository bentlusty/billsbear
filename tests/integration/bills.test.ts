import { Bill } from '../../src/domain/bill';
import { Bills } from '../../src/infra/bills';

describe('Bill', () => {
    it('parse bank hapoalim excel', async () => {
        const bills = Bills.create();
        const result = await bills.get('tests/integration/bank_hapoalim.xlsx');
        const expectedResult: Bill[] = [
            {
                name: 'Insurance',
                referenceDate: new Date('2021-10-06'),
                amount: 1200.83,
            },
            {
                name: 'Water bottle',
                referenceDate: new Date('2020-12-16'),
                amount: 100.0,
            },
            {
                name: 'NETFLIX.COM',
                referenceDate: new Date('2021-10-19'),
                amount: 60.9,
            },
        ];
        expect(result).toEqual(expectedResult);
    });
});
