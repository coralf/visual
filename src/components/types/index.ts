import { CSSProperties } from 'react';

export interface CommonProps {
  id: string;
  style: CSSProperties;
}

export interface TextProps extends CommonProps {
  text: string;
}
interface Option {
  label: string;
  value: string;
}

export interface SelectProps extends CommonProps {
  options: Option[];
}

export interface ChartProps extends CommonProps {}
