import { Bill } from '../../src/domain/bill';
import { BillsRepository } from '../../src/infra/bills-repository';

describe('BillRepository', () => {
    it('parse bank hapoalim excel', async () => {
        const repository = BillsRepository.create();
        const bills = await repository.get('tests/integration/bank_hapoalim.xlsx');
        const expectedResult: Bill[] = [
            {
                name: 'A I G ביטוח חובה',
                referenceDate: new Date('2021-10-06'),
                amount: 1200.83,
            },
            {
                name: 'שטראוס מים בע"מ',
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
    describe('Nullability', () => {
        it('default to empty bills', async () => {
            const repository = BillsRepository.createNull();
            const result = await repository.get('path/to/nowhere');
            expect(result).toEqual([]);
        });
        it('allows bills to be configured', async () => {
            const repository = BillsRepository.createNull([
                {
                    cells: [null, null, null, new Date('2021-10-06'), 'Bill 1', 100.0],
                    cellCount: 14
                },
                {
                    cells: [null, null, null, new Date('2021-11-01'), 'Bill 2', 100.0],
                    cellCount: 14
                }
            ]);
            const result = await repository.get('path/to/nowhere');
            expect(result).toEqual([
                {
                    name: 'Bill 1',
                    referenceDate: new Date('2021-10-06'),
                    amount: 100.0,
                },
                {
                    name: 'Bill 2',
                    referenceDate: new Date('2021-11-01'),
                    amount: 100.0,
                },
            ]);
        });
    });
});
