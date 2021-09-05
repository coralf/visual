import { designerStore } from '@/designer/store/DesignerStore';
import React, { useEffect, useState } from 'react';
import Render from '../render';
import './index.less';

interface Props {}

const Preview = (props: Props) => {
  const [zoom, setZoom] = useState(1);

  const updateRatio = () => {
    const designerWidth = designerStore.screen.width;
    const width = window.screen.width;
    if (!designerWidth || !width) return;
    setZoom(width / designerWidth);
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
