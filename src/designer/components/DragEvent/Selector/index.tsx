import { Component, designerStore } from '@/designer/store/DesignerStore';
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import { useRef } from 'react';
import { BiMove } from 'react-icons/bi';
import './index.less';

interface SelectorProps {
  component: Component;
  children: React.ReactElement;
}

const Selector = ({ component, children }: SelectorProps) => {
  const selectorRef = useRef<HTMLDivElement>(null);
  const { activeComponent } = designerStore;
  const box = selectorRef.current as HTMLDivElement;
  return (
    <div
      ref={selectorRef}
      id={'selector-' + component.id}
      style={{
        position: 'absolute',
        left: component.left,
        top: component.top,
        zIndex: 999,
        cursor: 'all-scroll',
        boxSizing: 'border-box',
        border: component.active ? '1px solid #40a9ff' : '',
      }}
    >
      {children}
    </div>
  );
};

export default observer(Selector);
