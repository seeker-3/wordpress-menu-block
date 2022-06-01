import { Component } from 'react'
import { findDOMNode } from 'react-dom'

const TextareaStyle = {
  width: '100%',
  Resize: 'none',
}

export default class Textarea extends Component {
  constructor(props) {
    super(props)
  }
  handleResize() {
    const node = findDOMNode(this)

    if (!(node instanceof HTMLElement)) return

    const { style, scrollHeight } = node

    style.height = 'inherit'

    const { borderBottomWidth, paddingBottom } = getComputedStyle(node)

    const height =
      (scrollHeight || 100) +
      parseInt(borderBottomWidth, 0) +
      parseInt(paddingBottom, 0) +
      'px'

    console.log(height)

    style.height = height
  }
  componentDidMount() {
    addEventListener('resize', () => this.handleResize())
    this.handleResize()
  }
  handleOnChange(e) {
    this.props.setAttr('description')(e)
    this.handleResize()
  }
  render() {
    return (
      <textarea
        style={TextareaStyle}
        value={this.props.value}
        onChange={e => this.handleOnChange(e)}
      ></textarea>
    )
  }
}
