import React from 'react';
import { Select as AntSelect } from 'antd';
import { SelectProps } from '../types';

const Select = ({ options, ...rest }: SelectProps) => {
  return (
    <AntSelect style={{ minWidth: 100, ...rest.style }}>
      {options?.map((item) => (
        <AntSelect.Option key={item.value} value={item.value}>
          {item.label || ''}
        </AntSelect.Option>
      ))}
    </AntSelect>
  );
};

export default Select;
