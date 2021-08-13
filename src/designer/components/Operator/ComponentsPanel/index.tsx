import React, { DragEventHandler, SyntheticEvent } from 'react';
import './index.less';
import { AiOutlineContainer, AiOutlineTable } from 'react-icons/ai';
import { BsTextIndentLeft } from 'react-icons/bs';
import { GrTextAlignCenter } from 'react-icons/gr';
import { HiOutlineSelector } from 'react-icons/hi';
import { IoMdSwitch } from 'react-icons/io';
import { DragEvent } from 'react';
import { ComponentType } from '@/designer/store/DesignerStore';

interface Props {}

interface DragComponentItemConfig {
  type: ComponentType;
  name: string;
  icon: (props: any) => React.ReactElement;
}

interface ComponentsDragConfig {
  type: string;
  name: string;
  items: DragComponentItemConfig[];
}

const components: ComponentsDragConfig[] = [
  {
    type: 'base',
    name: '基础',
    items: [
      {
        type: 'input',
        name: '输入框',
        icon: BsTextIndentLeft,
      },
      {
        type: 'textArea',
        name: '文本框',
        icon: GrTextAlignCenter,
      },
      {
        type: 'select',
        name: '下拉框',
        icon: HiOutlineSelector,
      },
      {
        type: 'switch',
        name: '开关',
        icon: IoMdSwitch,
      },
    ],
  },
  {
    type: 'containerBox',
    name: '容器',
    items: [
      {
        type: 'container',
        name: '普通容器',
        icon: AiOutlineContainer,
      },
    ],
  },
  {
    type: 'advance',
    name: '高级',
    items: [
      {
        type: 'tablePage',
        name: '高级表格',
        icon: AiOutlineTable,
      },
    ],
  },
];

interface Item {
  type: string;
  name: string;
}

interface ItemProps {
  items: any[];
}

const Items = ({ items }: ItemProps) => {
  const handleDragEnd = (e: DragEvent, item: Item) => {
    // e.dataTransfer.setData('componentType', item.type);
  };

  const handleDragStart = (e: DragEvent, item: Item) => {
    e.dataTransfer.setData('componentType', item.type);
  };

  return (
    <div className="items-layout">
      {items?.map((item) => (
        <div className="item-container" key={item.type}>
          <div
            className="item"
            draggable
            onDragStart={(e) => handleDragStart(e, item)}
            onDragEnd={(e) => handleDragEnd(e, item)}
          >
            <div>{<item.icon size={28} /> || ''}</div>
            <div>{item.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

const ComponentsPanel = (props: Props) => {
  return (
    <div className="components">
      {components?.map((item) => (
        <div key={item.type}>
          <div className="item-layout">
            <div className="item-text"> {item.name}</div>
            <Items items={item.items} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ComponentsPanel;
