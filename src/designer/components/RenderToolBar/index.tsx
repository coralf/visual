import { Input } from '@/components';
import { designerStore } from '@/designer/store/DesignerStore';
import { Space } from 'antd';
import './index.less';

interface Props {}

const ScreenResize = (props: Props) => {
  return (
    <Space size="small">
      {/* <span>屏幕</span> */}
      {/* <Input
        style={{ width: '3rem' }}
        value={screen.zoom * 100}
        onChange={handelChange}
      /> */}
      <span>1920</span>
      <span>x</span>
      <span>1080</span>
    </Space>
  );
};

const ZoomSetting = (props: Props) => {
  const screen = designerStore.screen;

  const handelChange = (e: any) => {
    designerStore.updateZoom(e.target.value / 100);
  };

  return (
    <Space size="small">
      {/* <span>缩放</span> */}
      <Input
        style={{ width: '3rem' }}
        value={screen.zoom * 100}
        onChange={handelChange}
      />
      <span>%</span>
    </Space>
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
