# ivnalk/cp-react-tree-table
[![npm version](https://badge.fury.io/js/cp-react-tree-table.svg)](https://badge.fury.io/js/cp-react-tree-table)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](https://github.com/constantin-p/cp-react-tree-table/raw/master/LICENSE)

A fork from a fast, efficient tree table component for ReactJS.

[Real Live Demo](https://constantin-p.github.io/cp-react-tree-table) | [Real Documentation](https://constantin.software/cp-react-tree-table/docs/)

[Real Documentation v0.x](https://github.com/constantin-p/cp-react-tree-table/tree/ver/0.x)


### Installation

###### [Method A] Using [npm](https://www.npmjs.com):

```sh
npm install --save @ivnalk/cp-react-tree-table
```

### Usage

Import the `@ivnalk/cp-react-tree-table` module:

```javascript
import { TreeTable, TreeState } from '@ivnalk/cp-react-tree-table';
```

### Mejoras de Estilo
Se implementó la opción de agregar clases CSS en cada celda de la tabla.

Para integrar una clase CSS se debe de enviar en los datos del treetable
```javascript
data: { name: 'Department 1', expenses: '75,000', employees: '18', contact: 'Florence Carter', class: 'myCSS_Class' },
```

## License

This project is MIT licensed.
Please see the [LICENSE](LICENSE) file for more information.
