import React from 'react';
import Designer from '@/designer';
import { designerStore } from '@/designer/store/DesignerStore';
interface Props {}

const DesignerPage = (props: Props) => {
  return (
    <div>
      <Designer designerStore={designerStore} />
    </div>
  );
};

export default DesignerPage;
