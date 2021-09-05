import { DEFAULT_SCREEN } from '@/config/componentConfig';
import { v4 } from 'uuid';

export const genUUID = () => v4();

export const getDefaultZoom = () => {
  return Number(
    (
      (window.screen.width * DEFAULT_SCREEN.ZOOM) /
      DEFAULT_SCREEN.WIDTH
    ).toFixed(2)
  );
};
