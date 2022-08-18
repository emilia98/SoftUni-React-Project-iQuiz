import Preview from '../Preview';
import { useState } from 'react';
import './TextField.css';

const TextField = ({ type, name, labelText, placeholder, value, hasPreview }) => {
    const [ finalValue, setFinalValue ] = useState('');

    function handleOnChange(event) {
        console.log(event.target.value);
        setFinalValue(event.target.value)
    }

    return (
        <div className="text-field">
            <label htmlFor={name}>{labelText}</label>
            <input type={type} id={name} name={name} 
                placeholder={ placeholder } value={ value ?? finalValue } 
                onChange={handleOnChange}/>
            { hasPreview && (value ?? finalValue) ? <Preview value={value ?? finalValue} /> : null }
        </div>
    )
}

export default TextField;