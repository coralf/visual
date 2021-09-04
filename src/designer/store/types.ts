import { ChartProps, TextProps } from '@/components/types';

export type ComponentType =
  | 'text'
  | 'input'
  | 'textArea'
  | 'switch'
  | 'select'
  | 'table'
  | 'container'
  | 'line'
  | 'column';

export type Props = TextProps | ChartProps;

export interface Component {
  id: string;
  name?: string;
  type: ComponentType;
  props: Props;
  children?: Component[];
  active?: boolean;
  top: number;
  left: number;
  width: number;
  height: number;
}

export interface ComponentReact {
  left: number;
  top: number;
  width: number;
  height: number;
}

export interface Screen {
  width: number;
  height: number;
  zoom: number;
  ratio: number;
}
