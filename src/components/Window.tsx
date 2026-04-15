import { Rnd } from 'react-rnd';

export const Window = ({ title, children, defaultPos }) => {
    <Rnd 
    default={{ x: defaultPos.x, y: defaultPos.y, width: 500, height: 300 }}
    bounds="parent"
    style={{ border: '1px solid #555', background: '#222', borderRadius: '8px', overflow: 'hidden' }}
    >
        <div  style={{ background: '#444', padding: '4px', cursor: 'move', color: 'white', fontSize: '12px' }}>
            {title} 
        </div>   
        <div style={{ height: 'calc(100%- 25px)' }}>
            {children}
        </div>
    </Rnd>
}