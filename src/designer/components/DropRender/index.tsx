import Render from '@/render';
import { getDragComponentType } from '@/utils/dragUtils';
import { observer } from 'mobx-react-lite';
import { DragEventHandler, useEffect, useRef } from 'react';
import EventHandler from '../DragEvent/EventHandler';
import { designerStore } from '../../store/DesignerStore';
import './index.less';

interface Props {}
const DropRender = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleDrop: DragEventHandler = (e) => {
    e.preventDefault();
    const type = getDragComponentType(e);
    const rect = ref.current?.getBoundingClientRect() as DOMRect;
    designerStore.addComponent({
      left: e.clientX * designerStore.screen.ratio - rect.left,
      top: e.clientY * designerStore.screen.ratio - rect.top,
      type,
    });
  };

  const handleDragOver: DragEventHandler = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Delete') {
        designerStore.deleteActiveComponent();
      }
    });
  }, []);

  return (
    <div className="drop-render-layout">
      <div
        ref={ref}
        className="drop-render"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        style={{
          width: designerStore.screen.width,
          height: designerStore.screen.height,
          zoom: designerStore.screen.zoom,
          top: `calc(50% - ${designerStore.screen.height / 2}px)`,
          left: `calc(50% - ${designerStore.screen.width / 2}px)`,
        }}
      >
        <EventHandler>
          <Render components={designerStore.components} />
        </EventHandler>
      </div>
    </div>
  );
};

export default observer(DropRender);
