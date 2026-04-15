import { useEffect, useRef } from 'react';
import{ Terminal } from 'xterm';
import 'xterm/css/xterm.css';

export const TerminalApp = () => {
    const termRef = useRef<HTMLDivElement>(null);
    const term = useRef<Terminal | null>(null);

    useEffect(() => {
        term.current = new Terminal({cursorBlink: true, theme: { background: '#1e1e1e' }});
        term.current.open(termRef.current);
        term.current.writeln('Welcome to WebOS Terminal');
        term.current.write('\r\n$')

        let command: string = '';
        term.current.onData((e: string) => {
            if (e === '\r') {
                try {
                    const result = eval(command);
                    term.current.write(`\r\n${result}`);
                } catch (err: unknown) {
                    if (err instanceof Error) {
                        term.current.write(`\r\nError: ${err.message}`);
                    }
                }
            } else if (e === '\u007F') {
                if (command.length > 0) {
                    command = command.slice(0, -1);
                    term.current.write('\b \b');
                }
            } else {
                command += e;
                term.current.write(e);
            }
        },);
    }, []);

    return (
        <>
            <div ref={termRef} style={{height: '100%', width: '100%'}} />
        </>
    );
}