function BaseSelect({options, defaultVal, value, onChange}) {
    return (
      <select 
          value={value}
          onChange={event => onChange(event.target.value)}
          >
        <option disabled value="">{defaultVal}</option>
        {options.map(option => 
          <option key={option.value} value={option.value}>{option.title}</option>
        )}
      </select>
    );
  }
  
export default BaseSelect;
  