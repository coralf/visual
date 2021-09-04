import { DIRECTION } from '@/config/componentConfig';
import { ComponentType } from '@/designer/store/types';
export const getDragMessage = (e: React.DragEvent, key: string) => {
  return e.dataTransfer?.getData(key);
};

export const getDragComponentType = (e: React.DragEvent) => {
  return getDragMessage(e, 'componentType') as ComponentType;
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

export const getDragAction = (id: string) => {
  return DIRECTION.includes(id) ? id : 'move';
};
