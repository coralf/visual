import { designerStore } from '@/designer/store/DesignerStore';
import React from 'react';
import Render from '../render';
import './index.less';

interface Props {}

const Preview = (props: Props) => {
  return (
    <div className="preview">
      <Render components={designerStore.components} />
    </div>
  );
};

export default Preview;
