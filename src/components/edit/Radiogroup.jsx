import Radiobutton from './Radiobutton.jsx'
import { Component } from 'react'
import { findDOMNode } from 'react-dom'

const RadiogroupStyle = {
  display: 'flex',
  FlexWrap: 'wrap',
}

export default class Radiogroup extends Component {
  handleResize() {
    const node = findDOMNode(this)

    if (!(node instanceof Element)) return

    const { children } = node

    const { width } = node.getBoundingClientRect()

    var childrenWidth = 5

    for (const child of children) {
      if (!(child instanceof HTMLElement)) continue
      child.style.flexBasis = 'auto'
      childrenWidth += child.getBoundingClientRect().width
    }

    if (childrenWidth >= width) {
      for (const child of children) {
        if (!(child instanceof HTMLElement)) continue
        child.style.flexBasis = '100%'
      }
    }
  }
  componentDidMount() {
    addEventListener('resize', () => this.handleResize())
    addEventListener('load', () => this.handleResize())
    // this.handleResize();
  }
  render() {
    const { checked, setAttr } = this.props

    return (
      <div style={RadiogroupStyle}>
        <Radiobutton
          label="none"
          value=""
          checked={checked}
          setAttr={setAttr}
        ></Radiobutton>
        <Radiobutton
          label="border"
          value="border"
          checked={checked}
          setAttr={setAttr}
        ></Radiobutton>
        <Radiobutton
          label="fill"
          value="fill"
          checked={checked}
          setAttr={setAttr}
        ></Radiobutton>
      </div>
    )
  }
}
