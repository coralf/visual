import { designerStore } from '@/designer/store/DesignerStore';
import React, { useEffect, useState } from 'react';
import Render from '../render';
import './index.less';

interface Props {}

const Preview = (props: Props) => {
  const [zoom, setZoom] = useState(1);

  const updateRatio = () => {
    const designerWidth = designerStore.screen.width;
    const screenWidth = document.body.offsetWidth;
    if (!designerWidth || !screenWidth) return;
    setZoom(document.body.offsetWidth / designerStore.screen.width);
  };

  useEffect(() => {
    updateRatio();
  }, []);

  return (
    <div
      className="preview"
      style={{
        zoom,
      }}
    >
      <Render components={designerStore.components} />
    </div>
  );
};

export default Preview;
