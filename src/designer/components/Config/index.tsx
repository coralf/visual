import { observer } from 'mobx-react-lite';
import React from 'react';
import { designerStore } from '../../store/DesignerStore';
import './index.less';

interface Props {}

const Config = (props: Props) => {
  const { activeComponent } = designerStore;
  return <div className="config">{activeComponent?.id}</div>;
};

export default observer(Config);
