import { genUUID } from '@/utils/commonUtils';
import { makeAutoObservable, observable, toJS } from 'mobx';
// import DragEvent from '@/designer/store/DragEvent';

export type ComponentType =
  | 'text'
  | 'input'
  | 'textArea'
  | 'switch'
  | 'select'
  | 'tablePage'
  | 'container'
  | 'line'
  | 'column';

export interface Component {
  id: string;
  name?: string;
  type: ComponentType;
  props: object;
  children?: Component[];
  active?: boolean;
  top: number;
  left: number;
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
      top: 0,
      left: 0,
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

  unActive() {
    if (this.activeComponent) {
      this.activeComponent.active = false;
    }
  }

  getIdx(id: string) {
    return this.components.findIndex((item) => item.id === id);
  }

  moving(left: number, top: number) {
    if (this.activeComponent) {
      this.activeComponent.left = left;
      this.activeComponent.top = top;
    }
  }
}

export const designerStore = new DesignerStore();
