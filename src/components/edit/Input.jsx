const InputStyle = {
  width: '100%',
}

export default function Input({ style, attr, value, setAttr }) {
  return (
    <div style={style}>
      <span>{attr}:</span>
      <input
        style={InputStyle}
        type="text"
        value={value}
        onChange={setAttr(attr)}
      ></input>
    </div>
  )
}
