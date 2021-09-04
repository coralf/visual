import React from 'react';
import './index.less';
import { useHistory } from 'react-router-dom';
import { designerStore } from '@/designer/store/DesignerStore';
import Button from '@/components/Button';
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
        <Button onClick={handlePreviewClick}>预览</Button>
      </div>
    </div>
  );
};

export default Header;
