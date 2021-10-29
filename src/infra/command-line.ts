export default class CommandLine {
    writeOutput(text: string): void {
        console.log(text);
    }

    args(): string[] {
        return process.argv.slice(2);
    }
}
