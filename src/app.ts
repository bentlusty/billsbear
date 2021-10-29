import CommandLine from './infra/command-line';
import { BillsRepository } from './infra/bills-repository';

const commandLine = new CommandLine();
const bills_repo = new BillsRepository();
const path = commandLine.args()[0];
bills_repo.get(path).then((bills) => commandLine.writeOutput(JSON.stringify(bills)));
