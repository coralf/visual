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
  const ref = useRef<HTMLDivElement>(null);

  const handleDrop: DragEventHandler = (e) => {
    e.preventDefault();
    const componentType = getDragComponentType(e);
    designerStore.addComponent(componentType);
  };

  const handleDragOver: DragEventHandler = (e) => {
    e.preventDefault();
  };

  const updateSize = () => {
    const width = ref.current?.offsetWidth;
    if (!width) return;
    designerStore.screen.width = width;
    designerStore.screen.height = Math.round(
      width / designerStore.screen.ratio
    );
  };

  useEffect(() => {
    updateSize();
    window.addEventListener('resize', () => {
      updateSize();
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Delete') {
        designerStore.deleteActiveComponent();
      }
    });
  }, []);

  return (
    <div
      ref={ref}
      className="drop-render"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      style={{
        height: designerStore.screen.height,
      }}
    >
      <EventHandler>
        <Render components={designerStore.components} />
      </EventHandler>
    </div>
  );
};

export default observer(DropRender);
