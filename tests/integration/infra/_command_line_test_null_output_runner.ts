import CommandLine from '../../../src/infra/command-line';

const commandLine = CommandLine.createNull();
commandLine.writeOutput('This output should never be seen');
