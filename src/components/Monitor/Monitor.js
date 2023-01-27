import { useEffect } from 'react';
import './Monitor.css';

export const Monitor = ({ input, setInput, answer }) => { 
    const handleChangeInput = (e) => {
        const re = /^[!%(-+\x2D-9^glox\xF7\u221A]+$/;
        
        if (e.target.value === "" || re.test(e.target.value)) {
            setInput(e.target.value);
        }
 
    }

    return (
        <div id='monitor' className='monitor'>
            <input 
                type="text"
                className='input'
                value={input}
                placeholder={0}
                onChange={handleChangeInput}
                // onKeyDown={handleChangeInput}
            />
        </div>
    );
}