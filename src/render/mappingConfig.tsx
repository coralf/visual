import {
  Text,
  TextArea,
  Switch,
  Select,
  Input,
  Table,
  Container,
  Line,
  Column,
} from '@/components';
import { ComponentType } from '@/designer/store/types';
type MappingItem = {
  [key in ComponentType]: (props: any) => React.ReactElement;
};

export const MAPPING_CONFIG: MappingItem = {
  input: Input,
  select: Select,
  switch: Switch,
  text: Text,
  textArea: TextArea,
  table: Table,
  container: Container,
  line: Line,
  column: Column,
};
