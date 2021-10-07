import type { CellsProps } from './Cells';
import _Cells from './Cells';
import CellsItem from './CellsItem';
import './style.less';

interface CompoundedComponent extends React.FC<CellsProps> {
  Item: typeof CellsItem;
}

const Cells = _Cells as CompoundedComponent;

Cells.Item = CellsItem;

export default Cells;
