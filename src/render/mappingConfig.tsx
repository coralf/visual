import { ComponentType } from '@/designer/store/DesignerStore';
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
type MappingItem = {
  [key in ComponentType]: (props: any) => React.ReactElement;
};

export const MAPPING_CONFIG: MappingItem = {
  input: Input,
  select: Select,
  switch: Switch,
  text: Text,
  textArea: TextArea,
  tablePage: Table,
  container: Container,
  line: Line,
  column: Column,
};
