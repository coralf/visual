import { observer } from 'mobx-react-lite';
import { MAPPING_CONFIG } from './mappingConfig';
import './index.less';
import Selector from '@/designer/components/DragEvent/Selector';
import { toJS } from 'mobx';
import { Component } from '@/designer/store/types';

interface Props {
  components: Component[];
}

const RenderComponent = observer(({ props, Component }: any) => {
  return <Component {...toJS(props)} />;
});

const renderComponents = (components: Component[]): any =>
  components?.map((component) => {
    if (Array.isArray(component.children) && component.children.length > 0) {
      return renderComponents(component.children);
    }
    const Component = MAPPING_CONFIG[component.type];
    return (
      <Selector component={component} key={component.id}>
        <RenderComponent props={component.props} Component={Component} />
      </Selector>
    );
  });
const Render = (props: Props) => {
  return <>{renderComponents(props.components)}</>;
};

export default observer(Render);
