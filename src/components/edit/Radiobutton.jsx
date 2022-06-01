const RadiobuttonStyle = {
  WhiteSpace: 'nowrap',
  paddingRight: '1rem',
}

export default function Radiobutton({ label, value, checked, setAttr }) {
  return (
    <div style={RadiobuttonStyle}>
      <input
        type="radio"
        id={label}
        value={value}
        checked={checked === value}
        onChange={setAttr('style')}
      ></input>
      <label htmlFor={label}>{label}</label>
    </div>
  )
}
