import { Button } from 'antd';
import React from 'react';
import './index.less';
import { useHistory } from 'react-router-dom';
import { designerStore } from '@/designer/store/DesignerStore';
interface Props {}

const Header = (props: Props) => {
  const history = useHistory();

  const handlePreviewClick = () => {
    designerStore.unActive();
    history.push('/preview');
  };

  return (
    <div className="header">
      <div className="logo">Visual</div>
      <div className="header-right">
        <Button type="primary" onClick={handlePreviewClick}>
          预览
        </Button>
      </div>
    </div>
  );
};

export default Header;
