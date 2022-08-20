import Preview from '../Preview';
import { useState } from 'react';
import './TextField.css';

const TextField = ({ type, name, labelText, placeholder, value, hasPreview, validator }) => {
    const [ values, setValues ] = useState({
        finalValue: value ?? "",
        error: "" 
    });

    function handleOnChange(event) {
        let value = event.target.value;
        let error = undefined;

        if (validator) {
            let validationResult = validator(value);
            if (!validationResult.valid) {
                error = validationResult.message;
            }
        }

        setValues(prevValues => {
            return { ...prevValues, finalValue: value, error: error}
         });
    }

    return (
        <div className="text-field">
            <label htmlFor={name}>{labelText}</label>
            <input type={type} id={name} name={name} 
                placeholder={ placeholder } value={ values.finalValue } 
                onChange={handleOnChange}/>
            { hasPreview && (values.finalValue) ? <Preview value={values.finalValue} /> : null }
            { (values.error ? <span className="error">{ values.error }</span> : null)}
        </div>
    )
}

export default TextField;