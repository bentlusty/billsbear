import CommandLine from '../../../src/infra/command-line';

const commandLine = new CommandLine();

const args = commandLine.args();
process.stdout.write(JSON.stringify(args));
