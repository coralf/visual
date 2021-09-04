import React from 'react';
import Config from '../Config';
import DropRender from '../DropRender';
import Operator from '../Operator';
import './index.less';
interface Props {}

const Content = (props: Props) => {
  return (
    <div className="content">
      <Operator></Operator>
      <DropRender></DropRender>
      <Config></Config>
    </div>
  );
};

export default Content;
