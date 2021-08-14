import React from 'react';

interface Props {
  text: string;
}

const Text = ({ text, ...rest }: Props) => {
  return <span {...rest}>{text || '文本'}</span>;
};

export default Text;
