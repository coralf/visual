import { Component, designerStore } from '@/designer/store/DesignerStore';
import { canDrop } from '@/utils/dragUtils';
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import { useRef } from 'react';
import { BiMove } from 'react-icons/bi';

interface SelectorProps {
  component: Component;
  children: React.ReactElement;
}

const Selector = ({ component, children }: SelectorProps) => {
  const selectorRef = useRef<HTMLDivElement>(null);
  const { activeComponent } = designerStore;
  const box = selectorRef.current as HTMLDivElement;
  return (
    <>
      <div
        ref={selectorRef}
        id={'selector-' + component.id}
        className={classNames(component.active ? 'active' : '')}
        style={
          (component.dragEvent.isDragging && {
            position: 'absolute',
            width: '100%',
            opacity: component.dragEvent.isDragging ? 0.3 : 1,
            left: component.dragEvent.left,
            top: component.dragEvent.top,
            zIndex: 999,
          }) ||
          {}
        }
      >
        {component.active && (
          <div className="drag-tools">
            <div className="drag-icon" id={'icon' + component.id}>
              <BiMove size={18} style={{ color: '#1890ff' }} />
            </div>
          </div>
        )}
        {children}
      </div>
      {component.dragEvent.isDragging && (
        <div
          style={{
            width: component.dragEvent.width,
            height: component.dragEvent.height,
            backgroundColor: '#0001',
          }}
        ></div>
      )}
      {activeComponent?.dragEvent.isDragging &&
        canDrop(activeComponent.dragEvent, box) && (
          <div
            style={{
              height: 2,
              backgroundColor: '#1890ff',
              width: '100%',
            }}
          ></div>
        )}
    </>
  );
};

export default observer(Selector);
