interface Process {
    argv: string[];
    stdout: { write(text: string): void };
}

export default class CommandLine {
    private process: Process;

    static create(): CommandLine {
        return new CommandLine(process);
    }

    static createNull(args: string[] = []): CommandLine {
        return new CommandLine(new NullProcess(args));
    }

    constructor(process: Process) {
        this.process = process;
    }

    writeOutput(text: string): void {
        this.process.stdout.write(text + '\n');
    }

    args(): string[] {
        return this.process.argv.slice(2);
    }
}

class NullProcess implements Process {
    private readonly args: string[];

    constructor(args: string[]) {
        this.args = args;
    }

    get stdout() {
        return {
            write() {
                return;
            },
        };
    }

    get argv(): string[] {
        return ['null_process_node', 'null_process_script.js', ...this.args];
    }
}
