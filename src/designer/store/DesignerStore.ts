import { ChartProps, TextProps } from '@/components/types';
import { DEFAULT_SCREEN } from '@/config/componentConfig';
import { genUUID } from '@/utils/commonUtils';
import { makeAutoObservable, toJS } from 'mobx';
import { Component, ComponentReact, ComponentType } from './types';
import { Screen } from './types';

export class DesignerStore {
  components: Component[] = [];
  screen: Screen = {
    width: DEFAULT_SCREEN.WIDTH,
    height: DEFAULT_SCREEN.HEIGHT,
    zoom: DEFAULT_SCREEN.ZOOM,
    ratio: DEFAULT_SCREEN.RATIO,
  };

  constructor() {
    makeAutoObservable(this);
  }

  get(id: string) {
    return this.components.find((component) => component.id === id);
  }

  get activeComponent() {
    return this.components.find((component) => component.active);
  }

  init(
    component: Component,
    {
      width,
      height,
    }: {
      width: number;
      height: number;
    }
  ) {
    component.width = width;
    component.height = height;
  }

  addComponent(component: { type: ComponentType; left: number; top: number }) {
    const id = genUUID();
    this.components.push({
      ...component,
      id,
      props: {
        id,
        style: {},
      },
      width: 0,
      height: 0,
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

  deleteActiveComponent() {
    this.components.splice(
      this.components?.findIndex(
        (item) => item.id === this.activeComponent?.id
      ),
      1
    );
  }

  updateActiveComponentRect({
    left,
    top,
    width,
    height,
  }: Partial<ComponentReact>) {
    if (!this.activeComponent) return;

    left && (this.activeComponent.left = left);
    top && (this.activeComponent.top = top);

    if (width) {
      this.activeComponent.width = width;
      this.activeComponent.props.style.width = width;
    }

    if (height) {
      this.activeComponent.height = height;
      this.activeComponent.props.style.height = height;
    }
  }
}

export const designerStore = new DesignerStore();
