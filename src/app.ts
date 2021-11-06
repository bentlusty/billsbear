import CommandLine from './infra/command-line';
import { Bills } from './infra/bills';

export default class App {
    private commandLine: CommandLine;
    private billsRepository: Bills;

    constructor(commandLine: CommandLine, billsRepository: Bills) {
        this.commandLine = commandLine;
        this.billsRepository = billsRepository;
    }

    static create(commandLine: CommandLine, bills_repo: Bills): App {
        return new App(commandLine, bills_repo);
    }

    async run(): Promise<void> {
        const args = this.commandLine.args();
        const input = args[0];
        const output = await this.billsRepository.get(input);
        this.commandLine.writeOutput(JSON.stringify(output));
    }
}
