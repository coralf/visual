import React from 'react';
import { Input as AntInput } from 'antd';

interface Props {}

const Input = (props: Props) => {
  return <AntInput {...props} />;
};

export default Input;
