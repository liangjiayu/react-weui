import type { SelectHTMLAttributes } from 'react';
import React from 'react';
import {} from '../../utils';

export type SelectProps = {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  defaultValue?: string;
} & SelectHTMLAttributes<HTMLSelectElement>;

const Select: React.FC<SelectProps> = () => {
  return (
    <div className="weui-cell weui-cell_active weui-cell_select">
      <div className="weui-cell__bd">
        <select className="weui-select">
          <option value="1">1</option>
        </select>
      </div>
    </div>
  );
};

export default Select;
