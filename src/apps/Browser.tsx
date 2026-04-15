import { useState } from 'react';

export const BrowserApp = () => {
    const [url, setUrl] = useState('https://www.wikipedia.org');
    const [input, setInput] = useState(url);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ background: '#3b3939', padding: '7px' }}>
                <input type="text" value={input} 
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && setUrl(input)}
                style={{ width: '100%', borderRadius: '3px', borderStyle: 'solid', borderWidth: '2px 4px 2px 4px', padding: '5px' }} />
            </div>
            <iframe src={url} style={{ flex: 1, border: 'none', background: '#E7E7E7' }} ></iframe>
        </div>
    )
}