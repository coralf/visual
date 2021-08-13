import React from 'react';
import { Select as AntSelect } from 'antd';

interface Option {
  name: string;
  value: string;
}

interface Props {
  options: Option[];
}

const Select = ({ options, ...rest }: Props) => {
  return (
    <AntSelect style={{ minWidth: 100 }} {...rest}>
      {options?.map((item) => (
        <AntSelect.Option key={item.value} value={item.value}>
          {item.name || ''}
        </AntSelect.Option>
      ))}
    </AntSelect>
  );
};

export default Select;
