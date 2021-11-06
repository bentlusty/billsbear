import { Bills } from '../../src/infra/bills';

describe('BillRepository', () => {
    describe('Nullability', () => {
        it('default to empty bills', async () => {
            const bills = Bills.createNull();
            const result = await bills.get('path/to/nowhere');
            expect(result).toEqual([]);
        });
        it('allows bills to be configured', async () => {
            const bills = Bills.createNull([
                {
                    cells: [null, null, null, new Date('2021-10-06'), 'Bill 1', 100.0],
                    cellCount: 14,
                },
                {
                    cells: [null, null, null, new Date('2021-11-01'), 'Bill 2', 100.0],
                    cellCount: 14,
                },
            ]);
            const result = await bills.get('path/to/nowhere');
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
