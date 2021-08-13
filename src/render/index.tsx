import { Component } from '@/designer/store/DesignerStore';
import { observer } from 'mobx-react-lite';
import { MAPPING_CONFIG } from './mappingConfig';
import './index.less';
import Selector from '@/designer/components/DragEvent/Selector';

interface Props {
  components: Component[];
}

const renderComponents = (components: Component[]): any =>
  components?.map((component) => {
    if (Array.isArray(component.children) && component.children.length > 0) {
      return renderComponents(component.children);
    }
    const Component = MAPPING_CONFIG[component.type];
    return (
      <Selector component={component} key={component.id}>
        <Component {...component.props} />
      </Selector>
    );
  });
const Render = (props: Props) => {
  return <>{renderComponents(props.components)}</>;
};

export default observer(Render);
