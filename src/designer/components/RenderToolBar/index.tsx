import { Input } from '@/components';
import { designerStore } from '@/designer/store/DesignerStore';
import { getFixedTwo } from '@/utils/commonUtils';
import { Space } from 'antd';
import { GrAdd, GrFormAdd } from 'react-icons/gr';
import { RiAddFill } from 'react-icons/ri';
import { MdRemove } from 'react-icons/md';
import './index.less';

interface Props {}

const ScreenResize = (props: Props) => {
  return (
    <Space size="small">
      <span>1920</span>
      <span>x</span>
      <span>1080</span>
    </Space>
  );
};

const ZoomSetting = (props: Props) => {
  const screen = designerStore.screen;

  const decrement = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    designerStore.updateZoom(getFixedTwo((screen.zoom * 100 - 5) / 100));
  };

  const increment = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    designerStore.updateZoom(getFixedTwo((screen.zoom * 100 + 5) / 100));
  };

  return (
    <div className="zoom-setting">
      <div className="action" onClick={decrement}>
        <MdRemove size="15" />
      </div>
      <div className="value">{getFixedTwo(screen.zoom * 100)}%</div>
      <div className="action" onClick={increment}>
        <RiAddFill size="15" />
      </div>
    </div>
  );
};

const RenderToolBar = (props: Props) => {
  return (
    <div className="render-toolbar">
      <div className="item">
        <ScreenResize />
      </div>
      <div className="item">
        <ZoomSetting />
      </div>
    </div>
  );
};

export default RenderToolBar;
