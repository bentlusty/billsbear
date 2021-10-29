import path from 'path';
import childProcess, { ForkOptions } from 'child_process';

describe('CommandLine', function () {
    it('writes output', async function () {
        const stdout = await runModule('./command_line_test_output_runner.ts');
        expect(stdout).toEqual('my output\n');
    });
    it('provides command-line arguments', async function () {
        const args = ['my arg 1', 'my arg 2'];
        const stdout = await runModule('./command_line_test_args_runner.ts', args);
        expect(stdout).toEqual('["my arg 1","my arg 2"]');
    });
});
function runModule(relativeModulePath: string, args?: ReadonlyArray<string>) {
    return new Promise((resolve, reject) => {
        const absolutePath = path.resolve(__dirname, relativeModulePath);
        const options: ForkOptions = {
            stdio: 'pipe',
            execArgv: ['-r', 'ts-node/register'],
        };
        const child = childProcess.fork(absolutePath, args, options);

        let stdout = '';
        let stderr = '';
        child.stdout?.on('data', (data: string) => {
            stdout += data;
        });
        child.stderr?.on('data', (data: string) => {
            stderr += data;
        });

        child.on('exit', () => {
            if (stderr !== '') {
                console.log(stderr);
                return reject(new Error('Runner failed'));
            } else {
                return resolve(stdout);
            }
        });
    });
}
