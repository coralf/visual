import Render from '@/render';
import { getDragComponentType } from '@/utils/dragUtils';
import classNames from 'classnames';
import { observable } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { DragEventHandler, useEffect, useRef, useState } from 'react';
import EventHandler from '../DragEvent/EventHandler';
import { Component, designerStore } from '../../store/DesignerStore';
import './index.less';
interface Props {}
const DropRender = (props: Props) => {
  const [size, setSize] = useState<{
    width: number;
    height: number;
  }>();

  const handleDrop: DragEventHandler = (e) => {
    e.preventDefault();
    const componentType = getDragComponentType(e);
    designerStore.addComponent(componentType);
  };

  const handleDragOver: DragEventHandler = (e) => {
    e.preventDefault();
  };

  const updateSize = () => {
    const width = document.getElementById('dropRender')?.offsetWidth || 0;
    setSize({ width, height: Math.round(width * 0.56) });
  };

  useEffect(() => {
    updateSize();
    window.addEventListener('resize', () => {
      updateSize();
    });
  }, []);

  return (
    <div
      id="dropRender"
      className="drop-render"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      style={{ height: size?.height }}
    >
      <EventHandler>
        <Render components={designerStore.components} />
      </EventHandler>
    </div>
  );
};

export default DropRender;
