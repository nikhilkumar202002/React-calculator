import React, { useState } from 'react'
import './style.css'
function Calculator() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');
    const handleClick = (value) =>{
        if (value === '='){
            try {
                    const evaluateResult = eval(input);
                    setResult(evaluateResult);
                    setInput(evaluateResult.toString());
            } catch (error) {
                    setResult('Error')
            }      
        }else if(value === 'C'){
            setInput('');
            setResult('')
        }else{
            setInput(input + value)
        }  
    }
  return (
    <>
        <div className='container'>
            <div className='container_cal'>
            <div className='container_input'>
                <input type="text" value={input} name="" id="" />
            </div>

            <div className='cal_btns'>
            <div className='container_buttons'>
                <div className='container_btn'><button onClick={() => handleClick('1')}>1</button></div>
                <div className='container_btn'><button onClick={() => handleClick('2')}>2</button></div>
                <div className='container_btn'><button onClick={() => handleClick('3')}>3</button></div>
                <div className='container_btn equal'><button onClick={() => handleClick('+')}>+</button></div>
            </div>
            <div className='container_buttons'>
                <div className='container_btn'><button onClick={() => handleClick('4')}>4</button></div>
                <div className='container_btn'><button onClick={() => handleClick('5')}>5</button></div>
                <div className='container_btn'><button onClick={() => handleClick('6')}>6</button></div>
                <div className='container_btn equal'><button onClick={() => handleClick('-')}>-</button></div>
            </div>
            <div className='container_buttons'>
                <div className='container_btn'><button onClick={() => handleClick('7')}>7</button></div>
                <div className='container_btn'><button onClick={() => handleClick('8')}>8</button></div>
                <div className='container_btn'><button onClick={() => handleClick('9')}>9</button></div>
                <div className='container_btn equal'><button onClick={() => handleClick('/')}>/</button></div>
            </div>
            <div className='container_buttons'>
                <div className='container_btn equal'><button onClick={() => handleClick('C')}>C</button></div>
                <div className='container_btn'><button onClick={() => handleClick('0')}>0</button></div>
                <div className='container_btn equal'><button onClick={() => handleClick('*')}>*</button></div>
                <div className='container_btn equal'><button onClick={() => handleClick('=')}>=</button></div>
            </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default Calculator