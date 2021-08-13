import { designerStore } from '@/designer/store/DesignerStore';
import React from 'react';
import Preview from '../preview';

interface Props {}

const PreviewPage = (props: Props) => {
  return (
    <div>
      <Preview />
    </div>
  );
};

export default PreviewPage;
