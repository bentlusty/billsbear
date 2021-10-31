import { Bill } from '../../src/domain/bill';
import { BillsRepository } from '../../src/infra/bills-repository';

describe('BillRepository', () => {
    it('parse bank hapoalim excel', async () => {
        const repository = BillsRepository.create();
        const bills = await repository.get('tests/integration/bank_hapoalim.xlsx');
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
        expect(bills).toEqual(expectedResult);
    });
});
