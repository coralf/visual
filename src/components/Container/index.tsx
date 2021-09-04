import React from 'react';

interface Props {
  [key: string]: any;
}

const Container = ({ children, ...rest }: Props) => {
  return <div {...rest}>{children}</div>;
};

export default Container;
