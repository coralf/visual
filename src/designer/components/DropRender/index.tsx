import Render from '@/render';
import { getDragComponentType } from '@/utils/dragUtils';
import { observer } from 'mobx-react-lite';
import { DragEventHandler, useEffect, useRef } from 'react';
import EventHandler from '../DragEvent/EventHandler';
import { designerStore } from '../../store/DesignerStore';
import './index.less';
import RenderToolBar from '../RenderToolBar';

interface Props {}
const DropRender = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleDrop: DragEventHandler = (e) => {
    e.preventDefault();
    const type = getDragComponentType(e);
    const rect = ref.current?.getBoundingClientRect() as DOMRect;
    designerStore.addComponent({
      left:
        (e.clientX - rect.left * designerStore.screen.zoom) *
        designerStore.screen.ratio,
      top:
        (e.clientY - rect.top * designerStore.screen.zoom) *
        designerStore.screen.ratio,
      type,
    });
  };

  const handleDragOver: DragEventHandler = (e) => {
    e.preventDefault();
  };

  const init = () => {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Delete') {
        designerStore.deleteActiveComponent();
      }
    });
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="drop-render-layout">
      <RenderToolBar />
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
