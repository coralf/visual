import { DEFAULT_SCREEN } from '@/config/componentConfig';
import { v4 } from 'uuid';

export const genUUID = () => v4();

export const getFixedTwo = (num: number) => {
  return Number(num.toFixed(2));
};

const getDefaultZoom = () => {
  const zoom = getFixedTwo(
    (window.screen.width * DEFAULT_SCREEN.ZOOM) / DEFAULT_SCREEN.WIDTH
  );
  const percentZoom = zoom * 100;
  const bitZoom = percentZoom % 10;
  return bitZoom % 5 === 0 ? zoom : (percentZoom - bitZoom) / 100;
};

export const getDefaultScreen = () => {
  const zoom = getDefaultZoom();
  return {
    zoom,
    ratio: getFixedTwo(1 / zoom),
  };
};
