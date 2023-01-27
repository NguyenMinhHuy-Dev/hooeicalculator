import './Button.css';

export const Buttons = () => {
    document.addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            document.getElementById("equalbtn").click();
        }
    })

    return (
        <div className='buttons'> 

            <button className='btn'>7</button>
            <button className='btn'>8</button>
            <button className='btn'>9</button>
            <button className='btn clr'>⌫</button>
            <button className='btn clr'>AC</button>
            <button className='btn'>4</button>
            <button className='btn'>5</button>
            <button className='btn'>6</button>
            <button className='btn exp'>x</button>
            <button className='btn exp'>÷</button>
            <button className='btn'>1</button>
            <button className='btn'>2</button>
            <button className='btn'>3</button>
            <button className='btn exp'>+</button>
            <button className='btn exp'>-</button>
            <button className='btn exp'>±</button>
            <button className='btn'>0</button>
            <button className='btn exp'>.</button>
            <button className='btn exp'>ANS</button>
            <button className='btn exp equal'  id="equalbtn">=</button>
        </div>
    );
}