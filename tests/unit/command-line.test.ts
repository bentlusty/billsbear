import CommandLine from '../../src/infra/command-line';

describe('CommandLine', () => {
    it("remembers last output", function() {
        const commandLine = CommandLine.createNull();
        commandLine.writeOutput("my last output");
        expect(commandLine.getLastOutput()).toEqual("my last output");
    });
    it("last output is undefined when nothing has been output yet", function() {
        const commandLine = CommandLine.createNull();
        expect(commandLine.getLastOutput()).toBeUndefined()
    });
    describe('Nullability', () => {
        it('defaults to no arguments', function () {
            const commandLine = CommandLine.createNull();
            expect(commandLine.args()).toEqual([]);
        });
        it('allows arguments to be configured', function () {
            const commandLine = CommandLine.createNull(['one', 'two']);
            expect(commandLine.args()).toEqual(['one', 'two']);
        });
    });
});
