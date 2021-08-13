import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { DesignerStore } from './store/DesignerStore';
import './index.less';
import Header from './components/Header';
import Content from './components/Content';

interface DesignerProps {
  designerStore: DesignerStore;
}

const Designer = (props: DesignerProps) => {
  useEffect(() => {}, []);

  return (
    <div className="designer">
      <Header />
      <Content />
    </div>
  );
};

export default observer(Designer);
