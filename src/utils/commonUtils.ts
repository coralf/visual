import { DEFAULT_SCREEN } from '@/config/componentConfig';
import { v4 } from 'uuid';

export const genUUID = () => v4();

export const getFixedTwo = (num: number) => {
  return Number(num.toFixed(2));
};

export const getDefaultScreen = () => {
  const zoom = getFixedTwo(
    (window.screen.width * DEFAULT_SCREEN.ZOOM) / DEFAULT_SCREEN.WIDTH
  );

  return {
    zoom,
    ratio: getFixedTwo(1 / zoom),
  };
};
