import CommandLine from './infra/command-line';
import { BillsRepository } from './infra/bills-repository';

export default class App {
    private commandLine: CommandLine;
    private billsRepository: BillsRepository;

    constructor(commandLine: CommandLine, billsRepository: BillsRepository) {
        this.commandLine = commandLine;
        this.billsRepository = billsRepository;
    }

    static create(commandLine: CommandLine, bills_repo: BillsRepository): App {
        return new App(commandLine, bills_repo);
    }

    async run() {
        const args = this.commandLine.args();
        const input = args[0];
        const output = await this.billsRepository.get(input);
        this.commandLine.writeOutput(JSON.stringify(output));
    }
}
