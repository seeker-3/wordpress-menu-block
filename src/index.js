import Edit from './components/edit/Edit.jsx'
import Save from './components/Save.jsx'

const attributes = {
  title: { type: 'string' },
  price: { type: 'string' },
  description: { type: 'string' },
  style: { type: 'string', default: '' },
}

const wp = /** @type {any} */ (window).wp

wp.blocks.registerBlockType('custom-blocks/menu-item', {
  title: 'Menu Item',
  icon: 'admin-page',
  category: 'common',
  attributes,
  edit: Edit,
  save: Save,
})
