import React, { Component, CSSProperties } from 'react';
import Row from '../model/row';


export type CellWrapperProps = {
  row: Row;
  renderCell: (row: Row) => React.ReactNode;

  grow?: number;
  basis?: string; // <CSS size> | auto
}

export default class CellWrapper extends Component<CellWrapperProps, {}> {
  static defaultProps = {
    grow: 1,
    basis: '0px',
  };


  render() {
    const { row, renderCell, grow, basis } = this.props;

    const cameliaEstilo_cell = row.data.class ? row.data.class : '';

    return (
      <div className={`cp_tree-table_cell ` + cameliaEstilo_cell  }
        style={{...STYLE_COLUMN, flexGrow: grow, flexBasis: basis }}>
        { renderCell(row) }
      </div>
    );
  }
}


const STYLE_COLUMN: CSSProperties = {
  boxSizing: 'border-box',
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  minHeight: '30px',
};
