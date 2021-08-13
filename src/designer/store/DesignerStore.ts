import { genUUID } from '@/utils/commonUtils';
import { makeAutoObservable, observable, toJS } from 'mobx';
import DragEvent from '@/designer/store/DragEvent';

export type ComponentType =
  | 'text'
  | 'input'
  | 'textArea'
  | 'switch'
  | 'select'
  | 'tablePage'
  | 'container';

export interface Component {
  id: string;
  name?: string;
  type: ComponentType;
  props: object;
  children?: Component[];
  active?: boolean;
  dragEvent: DragEvent;
}

export class DesignerStore {
  components: Component[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  get(id: string) {
    return this.components.find((component) => component.id === id);
  }

  get activeComponent() {
    return this.components.find((component) => component.active);
  }

  addComponent(type: ComponentType) {
    this.components.push({
      id: genUUID(),
      type,
      props: {},
      dragEvent: new DragEvent(),
    });
  }

  active(id: string) {
    const component = this.components.find((item) => item.id === id);
    if (this.activeComponent) {
      this.activeComponent.active = false;
    }
    if (!component) return;
    component.active = true;
    console.log(`toJs`, toJS(this.components));
  }

  getIdx(id: string) {
    return this.components.findIndex((item) => item.id === id);
  }

  moveTo(source: Component, target: Component) {
    const idx = this.getIdx(target.id);
    this.components.splice(this.getIdx(source.id), 1);
    let right = this.components.length;
    while (right > idx) {
      this.components[right] = this.components[right - 1];
      right--;
    }
    this.components[right] = source;
  }
}

export const designerStore = new DesignerStore();
