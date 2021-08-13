import React from 'react';

interface Props {
  text: string;
}

const Text = ({ text, ...rest }: Props) => {
  return <span {...rest}>{text || ''}</span>;
};

export default Text;
