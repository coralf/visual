import React from 'react';
import { Switch as AntSwitch } from 'antd';
import { CommonProps } from '../types';

const Switch = (props: CommonProps) => {
  return <AntSwitch {...props} />;
};

export default Switch;
