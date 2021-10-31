import CommandLine from '../../src/infra/command-line';
import App from '../../src/app';
import { BillsRepository } from '../../src/infra/bills-repository';

describe("App", () => {
  it("Reads command-line argument, parses it and writes result", async () => {
    const input = 'tests/integration/bank_hapoalim.xlsx'
    const commandLine = CommandLine.createNull([input])
    const billsRepository = BillsRepository.create()
    const app = App.create(commandLine, billsRepository)
    await app.run()
    let lastOutput = commandLine.getLastOutput();
    expect(lastOutput).toContain("[{\"name\":\"Insurance\",\"referenceDate\":\"2021-10-06T00:00:00.000Z\",\"amount\":1200.83},{\"name\":\"Water bottle\",\"referenceDate\":\"2020-12-16T00:00:00.000Z\",\"amount\":100},{\"name\":\"NETFLIX.COM\",\"referenceDate\":\"2021-10-19T00:00:00.000Z\",\"amount\":60.9}]")

  })
})