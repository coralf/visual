import { Component, ComponentType } from '@/designer/store/DesignerStore';
import DragEvent from '@/designer/store/DragEvent';
export const getDragMessage = (e: React.DragEvent, key: string) => {
  return e.dataTransfer?.getData(key);
};

export const getDragComponentType = (e: React.DragEvent) => {
  return getDragMessage(e, 'componentType') as ComponentType;
};

export const canDrop = (dragEvent: DragEvent, box: HTMLElement) => {
  if (
    dragEvent.left > box.offsetLeft &&
    dragEvent.left < box.offsetLeft + box.offsetWidth &&
    dragEvent.top > box.offsetTop &&
    dragEvent.top < box.offsetTop + box.offsetHeight
  ) {
    return true;
  }
  return false;
};

export const getSelector = (id: string) => {
  return document.getElementById(`selector-${id}`) as HTMLElement;
};

export const findSelector = (target: HTMLElement) => {
  let ele: HTMLElement = target;
  while (ele !== null) {
    if (/selector-\w*/.test(ele.id)) {
      return ele;
    }
    ele = ele?.parentNode as HTMLElement;
  }
  return ele;
};

export const selectorIdToComponentId = (ele: HTMLElement) => {
  return ele?.id?.replace('selector-', '');
};
