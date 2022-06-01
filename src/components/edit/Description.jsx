import Textarea from './Textarea.jsx'

export default function Description({ value, setAttr }) {
  return (
    <>
      <span>description:</span>
      <Textarea value={value} setAttr={setAttr}></Textarea>
    </>
  )
}
