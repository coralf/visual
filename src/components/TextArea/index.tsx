import { Input } from 'antd';
import React from 'react';

interface Props {}

const TextArea = (props: Props) => {
  return <Input.TextArea {...props} />;
};

export default TextArea;
