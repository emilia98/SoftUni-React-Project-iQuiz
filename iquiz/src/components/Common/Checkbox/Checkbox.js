import { useState } from 'react';
import './Checkbox.css';

const Checkbox = ({ name, label }) => {
  const [value, setValue] = useState(false);

  const onStateChanged = (e) => {
    let prevValue = value;
    setValue(!prevValue);
  }
  
  return (
    <label className="checkbox">
      <input type="checkbox" name={name} checked={value} onChange={onStateChanged}/>
      {label}
    </label>
  )
};

export default Checkbox;