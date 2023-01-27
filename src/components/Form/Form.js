import { useState } from 'react';
import { Buttons } from '../Buttons/Button';
import { Monitor } from '../Monitor/Monitor';
import './Form.css';

export const Form = () => {
    const [input, setInput] = useState("");
    const [answer, setAnswer] = useState("");

    return (
        <div className='form'>
            <Monitor input={input} setInput={setInput} answer={answer}/>
            <Buttons />
        </div>
    );
}