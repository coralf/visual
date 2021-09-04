import Render from '@/render';
import { getDragComponentType } from '@/utils/dragUtils';
import { observer } from 'mobx-react-lite';
import { DragEventHandler, useEffect, useRef } from 'react';
import EventHandler from '../DragEvent/EventHandler';
import { designerStore } from '../../store/DesignerStore';
import DragEvent from '@/designer/event/DragEvent';
import './index.less';

interface Props {}
const DropRender = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleDrop: DragEventHandler = (e) => {
    e.preventDefault();
    const type = getDragComponentType(e);
    const rect = ref.current?.getBoundingClientRect() as DOMRect;
    designerStore.addComponent({
      left: e.clientX - rect.left,
      top: e.clientY - rect.top,
      type,
    });
  };

  const handleDragOver: DragEventHandler = (e) => {
    e.preventDefault();
  };

  const updateSize = () => {
    const width = ref.current?.offsetWidth;
    if (!width) return;
    designerStore.screen.width = width;
    designerStore.screen.height = Math.round(
      width / designerStore.screen.ratio
    );
  };

  useEffect(() => {
    updateSize();
    window.addEventListener('resize', () => {
      updateSize();
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Delete') {
        designerStore.deleteActiveComponent();
      }
    });
  }, []);

  return (
    <div
      ref={ref}
      className="drop-render"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      style={{
        height: designerStore.screen.height,
      }}
    >
      <EventHandler>
        <Render components={designerStore.components} />
      </EventHandler>
    </div>
  );
};

export default observer(DropRender);
