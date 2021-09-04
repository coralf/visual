import { Component } from '@/designer/store/DesignerStore';
import React from 'react';
import { TextProps } from '../types';

const Text = ({ text, style, ...rest }: TextProps) => {
  return (
    <div style={{ ...style }} {...rest}>
      {text || '文本'}
    </div>
  );
};

export default Text;
