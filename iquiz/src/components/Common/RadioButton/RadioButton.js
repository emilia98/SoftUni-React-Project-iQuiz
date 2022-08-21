import './RadioButton.css';

const RadioButton = ( {name, label, onChange} ) => {
    const [value, setValue] = useState(false);

    const onStateChanged = (e) => {
        let prevValue = value;
        setValue(!prevValue);
        onChange(value)
    }

    return (
        <label class="radiobutton">
            <input type="radio" name="radio" checked={value} onChange={onStateChanged} />
            Radio
        </label>
    );
};

export default RadioButton;