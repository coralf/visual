import { DIRECTION } from '@/config/componentConfig';
import { Component, designerStore } from '@/designer/store/DesignerStore';
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import { useEffect, useRef } from 'react';
import { BiMove } from 'react-icons/bi';
import './index.less';

interface SelectorProps {
  component: Component;
  children: React.ReactElement;
}

const Selector = ({ component, children }: SelectorProps) => {
  const selectorRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const rect = document
      .getElementById('selector-' + component.id)
      ?.getBoundingClientRect();
    designerStore?.init(component, {
      width: rect?.width || 0,
      height: rect?.height || 0,
    });
  }, []);

  const rect = selectorRef?.current?.getBoundingClientRect();

  return (
    <div
      ref={selectorRef}
      id={'selector-' + component.id}
      style={{
        position: 'absolute',
        left: component.left,
        top: component.top,
        width: component.width || rect?.width,
        height: component.height || rect?.height,
        zIndex: 999,
        cursor: 'move',
        boxSizing: 'border-box',
        border: component.active ? '1px solid #40a9ff' : '',
      }}
    >
      {DIRECTION.map((d) => (
        <div
          className={classNames('control-point', `point-${d}`)}
          id={d}
          key={d}
        ></div>
      ))}
      {children}
    </div>
  );
};

export default observer(Selector);
