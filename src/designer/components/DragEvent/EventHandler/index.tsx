import {
  findSelector,
  getDragAction,
  getSelector,
  selectorIdToComponentId,
} from '@/utils/dragUtils';
import { observer } from 'mobx-react-lite';
import { useCallback, useRef } from 'react';
import { IoMdReturnLeft } from 'react-icons/io';
import { Component, designerStore } from '../../../store/DesignerStore';
import DesignEvent, { DragAction } from '../../../event/DragEvent';

interface EventHandlerProps {
  children: React.ReactElement;
}

const EventHandler = ({ children }: EventHandlerProps) => {
  const handleMouseDown = (e: React.MouseEvent) => {
    const selector = findSelector(e.target as HTMLElement);
    if (!selector) return;
    designerStore.active(selectorIdToComponentId(selector));
    const { clientX, clientY } = e;
    DesignEvent.draggingStart(
      getDragAction((e.target as HTMLElement)?.id) as DragAction,
      {
        clientX,
        clientY,
        startLeft: selector.offsetLeft,
        startTop: selector.offsetTop,
        width: selector.offsetWidth,
        height: selector.offsetHeight,
      }
    );
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (DesignEvent.state !== 'end') {
      DesignEvent.draggingMove({
        clientX: e.clientX,
        clientY: e.clientY,
      });
    }
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    DesignEvent.draggingEnd();
  };

  return (
    <div
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
