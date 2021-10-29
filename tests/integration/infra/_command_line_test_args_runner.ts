import CommandLine from '../../../src/infra/command-line';

const commandLine = CommandLine.create();

const args = commandLine.args();
process.stdout.write(JSON.stringify(args));
