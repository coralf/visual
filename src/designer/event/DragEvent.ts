import { designerStore } from '../store/DesignerStore';

export type DragAction =
  | 'move'
  | 'n'
  | 'ne'
  | 'e'
  | 'se'
  | 's'
  | 'sw'
  | 'w'
  | 'nw';

class DragEvent {
  startClientX: number = 0;
  startClientY: number = 0;
  clientX: number = 0;
  clientY: number = 0;
  startLeft: number = 0;
  startTop: number = 0;
  width: number = 0;
  height: number = 0;
  state: 'moving' | 'start' | 'end' = 'end';
  action: DragAction = 'move';

  get isDragging() {
    return this.state === 'moving';
  }

  get isStart() {
    return this.state === 'start';
  }

  get isEnd() {
    return this.state === 'end';
  }

  draggingStart(
    action: DragAction,
    {
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
    }
  ) {
    this.startClientX = clientX;
    this.startClientY = clientY;
    this.startLeft = startLeft;
    this.startTop = startTop;
    this.state = 'start';
    this.width = width;
    this.height = height;
    this.action = action;
  }

  draggingMove({ clientX, clientY }: { clientX: number; clientY: number }) {
    this.clientX = clientX;
    this.clientY = clientY;
    this.state = 'moving';
    this.triggerDragAction();
  }

  triggerDragAction() {
    const offsetY =
      (this.clientY - this.startClientY) * designerStore.screen.ratio;
    const offsetX =
      (this.clientX - this.startClientX) * designerStore.screen.ratio;

    switch (this.action) {
      case 'move':
        const left = offsetX + this.startLeft;
        const top = offsetY + this.startTop;
        designerStore.updateActiveComponentRect({
          left,
          top,
        });
        break;
      case 'n':
        designerStore.updateActiveComponentRect({
          top: this.startTop + offsetY,
          height: this.height - offsetY,
        });
        break;

      case 'ne':
        designerStore.updateActiveComponentRect({
          top: this.startTop + offsetY,
          width: this.width + offsetX, //offsetY
          height: this.height - offsetY,
        });
        break;

      case 'e':
        designerStore.updateActiveComponentRect({
          width: this.width + offsetX,
        });
        break;

      case 'se':
        designerStore.updateActiveComponentRect({
          width: this.width + offsetX,
          height: this.height + offsetY,
        });
        break;

      case 's':
        designerStore.updateActiveComponentRect({
          height: this.height + offsetY,
        });
        break;

      case 'sw':
        designerStore.updateActiveComponentRect({
          height: this.height + offsetY,
          width: this.width - offsetX,
          left: this.startLeft + offsetX,
        });
        break;

      case 'w':
        designerStore.updateActiveComponentRect({
          width: this.width - offsetX,
          left: this.startLeft + offsetX,
        });
        break;

      case 'nw':
        designerStore.updateActiveComponentRect({
          height: this.height - offsetY,
          top: this.startTop + offsetY,
          width: this.width - offsetX,
          left: this.startLeft + offsetX,
        });
        break;

      default:
        break;
    }
  }

  draggingEnd() {
    this.state = 'end';
  }
}

export default new DragEvent();
