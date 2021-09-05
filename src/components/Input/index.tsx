import React, { useRef } from 'react';
import { useEffect } from 'react';
import './index.less';

interface Props {
  [key: string]: any;
}

const Input = (props: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref.current?.addEventListener('input', props.onChange);
  }, []);

  return <input ref={ref} className="input" {...props} />;
};

export default Input;
