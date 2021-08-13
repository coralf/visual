import {
  canDrop,
  findSelector,
  getSelector,
  selectorIdToComponentId,
} from '@/utils/dragUtils';
import { observer } from 'mobx-react-lite';
import { useRef } from 'react';
import { IoMdReturnLeft } from 'react-icons/io';
import { Component, designerStore } from '../../../store/DesignerStore';

interface EventHandlerProps {
  children: React.ReactElement;
}
const EventHandler = ({ children }: EventHandlerProps) => {
  const dragRootRef = useRef<HTMLDivElement>(null);
  const activeComponent = designerStore.activeComponent;

  const handleMouseDown = (e: React.MouseEvent) => {
    const selector = findSelector(e.target as HTMLElement);
    if (!selector) return;
    designerStore.active(selectorIdToComponentId(selector));
    const { clientX, clientY } = e;
    activeComponent?.dragEvent.draggingStart({
      clientX,
      clientY,
      startLeft: selector.offsetLeft,
      startTop: selector.offsetTop,
      width: selector.offsetWidth,
      height: selector.offsetHeight,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (activeComponent?.dragEvent.state !== 'end') {
      activeComponent?.dragEvent.draggingMove({
        clientX: e.clientX,
        clientY: e.clientY,
      });
    }
  };

  const getDropEle = (activeComponent: Component) => {
    for (let i = 0; i < designerStore.components.length; i++) {
      const component = designerStore.components[i];
      if (activeComponent.id === component.id) continue;
      if (canDrop(activeComponent?.dragEvent, getSelector(component.id))) {
        return component;
      }
    }
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!activeComponent) return;
    const component = getDropEle(activeComponent);
    if (component) {
      designerStore.moveTo(activeComponent, component);
    }
    activeComponent?.dragEvent.draggingEnd();
  };

  return (
    <div
      ref={dragRootRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={{
        height: '100%',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {children}
    </div>
  );
};
export default observer(EventHandler);
