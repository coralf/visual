import { makeAutoObservable } from 'mobx';

class DesignEvent {
  startClientX: number = 0;
  startClientY: number = 0;
  startLeft: number = 0;
  startTop: number = 0;
  left: number = 0;
  top: number = 0;
  width: number = 0;
  height: number = 0;
  state: 'moving' | 'start' | 'end' = 'end';

  get isDragging() {
    return this.state === 'moving';
  }

  get isStart() {
    return this.state === 'start';
  }

  get isEnd() {
    return this.state === 'end';
  }

  draggingStart({
    clientX,
    clientY,
    startLeft,
    startTop,
    width,
    height,
  }: {
    clientX: number;
    clientY: number;
    startLeft: number;
    startTop: number;
    width: number;
    height: number;
  }) {
    this.startClientX = clientX;
    this.startClientY = clientY;
    this.startLeft = startLeft;
    this.startTop = startTop;
    this.left = startLeft;
    this.top = startTop;
    this.state = 'start';
    this.width = width;
    this.height = height;
  }

  draggingMove({ clientX, clientY }: { clientX: number; clientY: number }) {
    this.left = clientX - this.startClientX + this.startLeft;
    this.top = clientY - this.startClientY + this.startTop;
    this.state = 'moving';
  }

  draggingEnd() {
    this.state = 'end';
  }

  getCoordinate() {
    return {
      left: this.left,
      top: this.top,
    };
  }
}

export default new DesignEvent();
