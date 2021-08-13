import { designerStore } from '@/designer/store/DesignerStore';
import React from 'react';
import Render from '../render';

interface Props {}

const Preview = (props: Props) => {
  return (
    <div>
      <Render components={designerStore.components} />
    </div>
  );
};

export default Preview;
