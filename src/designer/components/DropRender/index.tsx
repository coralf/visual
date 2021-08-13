import Render from '@/render';
import { getDragComponentType } from '@/utils/dragUtils';
import classNames from 'classnames';
import { observable } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { DragEventHandler, useRef, useState } from 'react';
import EventHandler from '../DragEvent/EventHandler';
import { Component, designerStore } from '../../store/DesignerStore';
import './index.less';
interface Props {}
const DropRender = (props: Props) => {
  const handleDrop: DragEventHandler = (e) => {
    e.preventDefault();
    const componentType = getDragComponentType(e);
    designerStore.addComponent(componentType);
  };

  const handleDragOver: DragEventHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="drop-render"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <EventHandler>
        <Render components={designerStore.components} />
      </EventHandler>
    </div>
  );
};

export default DropRender;
