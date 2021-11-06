import CommandLine from '../../src/infra/command-line';
import App from '../../src/app';
import { Bills } from '../../src/infra/bills';

describe('App', () => {
    it('Reads command-line argument, parses it and writes result', async () => {
        const input = 'tests/integration/bank_hapoalim.xlsx';
        const commandLine = CommandLine.createNull([input]);
        const billsRepository = Bills.create();
        const app = App.create(commandLine, billsRepository);
        await app.run();
        const lastOutput = commandLine.getLastOutput();
        const expectedResult =
            '[\n' +
            '  {\n' +
            '    "name": "Insurance",\n' +
            '    "referenceDate": "2021-10-06T00:00:00.000Z",\n' +
            '    "amount": 1200.83\n' +
            '  },\n' +
            '  {\n' +
            '    "name": "Water bottle",\n' +
            '    "referenceDate": "2020-12-16T00:00:00.000Z",\n' +
            '    "amount": 100\n' +
            '  },\n' +
            '  {\n' +
            '    "name": "NETFLIX.COM",\n' +
            '    "referenceDate": "2021-10-19T00:00:00.000Z",\n' +
            '    "amount": 60.9\n' +
            '  }\n' +
            ']';
        expect(lastOutput).toEqual(expectedResult);
    });
});
