import React from 'react';
import './index.less';

interface Props {
  onClick: () => void;
  children: JSX.Element | string;
}

const Button = (props: Props) => {
  return (
    <button className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
